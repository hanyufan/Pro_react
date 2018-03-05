import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actionCreator'
import './style.css'

class List extends Component {
	render() {
		return (
			<div className="list-content">
				<div className="list-img">
					<div className="img-left">
						<img alt="图片" src={require('../../statics/imgs/img-left.png')} />
					</div>
					<div className="img-right">
						<img alt="图片" src={require('../../statics/imgs/img-right.gif')} />
					</div>
				</div>
				<ul className="study">
					<li className="first_li"></li>
					<li><a href="javascript:;">大家说英语</a></li>
					<li><a href="javascript:;">空中英语教室</a></li>
					<li><a href="javascript:;">彭蒙惠英语</a></li>
				</ul>
				<div className="speak_Enlish">
					<div className="English_left">
						<img className="speak" src={require('../../statics/imgs/speak.png')} />
						<div className="talk">
							<img alt="图片" className="book" src={require('../../statics/imgs/book_left1.jpg')} />
							<img alt="图片" className="book" src={require('../../statics/imgs/book_left2.jpg')} />
							<img alt="图片" className="book" src={require('../../statics/imgs/book_left3.jpg')} />
						</div>
						<div className="try">往期试听：</div>
						{
							this.props.left.map((value) => {
	      						return (
	      							<div className="left_list" key={value.id}><a href="javascript:;">{value.title}</a></div>
	      						)
	      					})
						}
					</div>
					<div>
					</div>
					<div className="English_right">
						<div className="magazine_show">杂志展示</div>
						<img alt="图片" className="book" src={require('../../statics/imgs/book_right.jpg')} />
						{
							this.props.right.map((value) => {
	      						return (
	      							<div className="content" key={value.id} dangerouslySetInnerHTML={{__html:value.title}}></div>
	      							
	      						)
	      					})
						}
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
    if (!this.props.left.length && !this.props.right.length) {
      this.props.actions.getActionList()
    }
  }
}


const mapStateToProps = (state) => {
  return {
    left: state.list.left,
    right: state.list.right
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(List)