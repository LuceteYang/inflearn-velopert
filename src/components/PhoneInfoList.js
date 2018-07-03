import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{

	render(){
		const { data, onRemove } = this.props;
		if(!data) return null;
		const list = data.map(
			info => (
				<PhoneInfo 
					info={info} 
					key={info.id} 
					onRemove={onRemove}
				/>)
			)
		return (
			<div>
				{list}
			</div>
		)
	}
}
export default PhoneInfoList;