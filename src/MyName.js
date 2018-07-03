import React, {Component} from 'react';

class Myname extends Component{
	static defaultProps= { //더 최신 문법 번들링하면 결국 밑의 코드와 같음
		englishName:'영어이름'
	}
	state = {
		name:'',
		phone:''
	}
	handleChange = (e)=>{
		this.setState({
			[e.target.name] :e.target.value
		})
	}
	render(){
		const name = "Sanghwan"
		return (
			<div className="App">
				Hello {name}
				<h1>
					{this.props.englishName}
				</h1>
				<form>
				<input placeholder="이름" 
				name="name"
				onChange = {this.handleChange} 
				value={this.state.name}/>
				{this.state.name}
				<input placeholder="전화번호" 
				name="phone"
				onChange = {this.handleChange} 
				value={this.state.phone}/>
				{this.state.phone}
				</form>
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