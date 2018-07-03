import React, {Component,Fragment} from 'react';
import './App.css'
import MyName from './MyName';
import YourName from './YourName';
import Counter from './Counter';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component{
	id = 0;
	handleCreate = (data) =>{
		const { information } = this.state;
		this.setState({
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
	state = {
		information :[]
	}
	render(){
		return (
			<Fragment>	{/*Fragment 불필요한 겉 div를 뺄수있다.*/}
				<MyName englishName='Lucas' onCreate={this.handleCreate}/>
				<YourName name='Lucas'/>
				<Counter />
				{JSON.stringify(this.state.information)}
				<PhoneInfoList data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
			</Fragment>
		)
	}
}

export default App;