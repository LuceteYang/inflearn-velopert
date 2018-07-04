import React, {Component} from 'react';

class Myname extends Component{
	input = null;
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
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.onCreate(this.state)
		this.setState({
		name:'',
		phone:''
		})
		this.input.focus();
	}
	render(){
		const name = "Sanghwan"
		return (
			<div className="App">
				Hello {name}
				<h1>
					{this.props.englishName}
				</h1>
				<form onSubmit={this.handleSubmit}>
				{/*특정 돔에 직접적으로 접근해야하는 경우(크기를 가져오거나 높이를 가져와야한다거나 등등)*/}
				<input placeholder="이름" 
				name="name"
				onChange = {this.handleChange} 
				ref = {ref => this.input = ref}
				value={this.state.name}/>
				{this.state.name}
				<input placeholder="전화번호" 
				name="phone"
				onChange = {this.handleChange} 
				value={this.state.phone}/>
				{this.state.phone}
				<button type="submit">등록</button>
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