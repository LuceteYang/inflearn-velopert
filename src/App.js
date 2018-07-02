import React, {Component,Fragment} from 'react';
import './App.css'
import MyName from './MyName';
import YourName from './YourName';
import Counter from './Counter';

class App extends Component{
	render(){
		return (
			
			<Fragment>	{/*Fragment 불필요한 겉 div를 뺄수있다.*/}
				<MyName englishName='Lucas'/>
				<YourName name='Lucas'/>
				<Counter />
			</Fragment>
		)
	}
}

App

export default App;