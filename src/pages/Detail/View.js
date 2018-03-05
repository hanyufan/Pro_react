import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeDetailAction } from './actionCreator'
import { getClock } from'./canvas'
import "./style.css"

class Detail extends Component {
	render() {
		return (
			<div className="detail">
				<div className="top">
					<h1 className="title">{this.props.title}</h1>
					<div className="alt">
						<div>时间：{this.props.pubdate}</div>
						<div>来源：{this.props.source}</div>
						<div>收听下载次数：{this.props.count}</div>
					</div>
				</div>
				<div>
					<canvas className="canvas" width="300" height="300" ref='canvas'></canvas>
				</div>
				<div className="box-music">
					<embed className="music" src={this.props.mp3} ref={(audio) => {this.audio =audio}}></embed>
				</div>
				<div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
			</div>
		)
	}

	componentDidMount() {
    	this.getDetailInfo()
    	getClock(this.refs.canvas)
  	}

	getDetailInfo() {
	    fetch('/api/detail.json?id=' + this.props.params.id)
	      .then((res) => res.json())
	      .then(this.props.changeDetailInfo)
	}
}

const mapState = (state) => ({...state.detail})

const mapDispatch = (dispatch) => {
	return {
		changeDetailInfo(res) {
			const action = getChangeDetailAction(res.data)
			dispatch(action)
		}	
	}
}

export default connect(mapState, mapDispatch)(Detail)