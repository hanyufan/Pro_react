import React from 'react'
import { Card } from 'antd'
import './style.css'

export default (props) => {
	return (
		<Card className="footer" style={{ marginTop: '20px'}}>
			<div className="one">
				本网站由<span>EasyVOA</span>开发上线 &copy; 2011-2014 <span>手机版EasyVOA</span>
			</div>
			<div className="two">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</div>
			<img alt="流量" className="three" src={require('../../../statics/imgs/icon.gif')} />
		</Card>
	)
}