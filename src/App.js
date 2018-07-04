import React, {Component,Fragment} from 'react';
import './App.css'
import MyName from './MyName';
import YourName from './YourName';
import Counter from './Counter';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component{
	id = 3;
	state = {
		information : [
			{	
				id:0,
				name:'홍길동',
				phone:'010-0000-3322'
			},
			{	
				id:1,
				name:'심청이',
				phone:'010-0000-2142'
			},
			{	
				id:2,
				name:'호랑이',
				phone:'010-0000-2323'
			}
		],
		keyword:""
	}
	handleChange = (e) =>{
		this.setState({
			keyword : e.target.value
		})
	}
	handleCreate = (data) =>{
		const { information } = this.state;
		this.setState({
			//불변성을 왜 유지하는가
			//push로 하게 되면 불변성을 유지하는게 아님
			information: information.concat({
				...data,
				id: this.id++
				})
		})
	}
	handleRemove = (id) =>{
		const { information } = this.state;
		this.setState({
			information: information.filter(info => info.id!==id)
		})
	}
	handleUpdate = (id, data) =>{
		const { information } = this.state;
		this.setState({
			information: information.map(info => {
				if(info.id===id){
					return {
						id, ...data,
					};
				}
				return info;
			})
		})
	}

	render(){
		return (
			<Fragment>	{/*Fragment 불필요한 겉 div를 뺄수있다.*/}
				<MyName englishName='Lucas' onCreate={this.handleCreate}/>
				<YourName name='Lucas'/>
				<Counter />
				{JSON.stringify(this.state.information)}
				<input 
				value={this.state.keyword}
				onChange={this.handleChange}
				placeholder = "검색"/>
				<PhoneInfoList 
				data={
					this.state.information.filter(
					info => info.name.indexOf(this.state.keyword)> -1)
				} 
				onRemove={this.handleRemove} 
				onUpdate={this.handleUpdate}
				/>
			</Fragment>
		)
	}
}

export default App;