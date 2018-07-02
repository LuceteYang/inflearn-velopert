import React, {Component} from 'react';

class Myname extends Component{
	static defaultProps= { //더 최신 문법 번들링하면 결국 밑의 코드와 같음
		englishName:'영어이름'
	}
	render(){
		const name = "Sanghwan"
		return (
			<div className="App">
				Hello {name}
				<h1>
					{this.props.englishName}
				</h1>
			</div>
		)
	}
}
/*
Myname.defaultProps= {
	englishName:'영어이름'
}
*/

export default Myname;