import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{

	render(){
		const { data } = this.props;
		if(!data) return null;
		const list = data.map(
			info => (<PhoneInfo info={info} key={info.id}/>)
			)
		return (
			<div>
			<h1>dsafdas</h1>
				{list}
			</div>
		)
	}
}
export default PhoneInfoList;