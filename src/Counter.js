import React, {Component} from 'react';

class Counter extends Component{
	state = {
		number:0
	}
	componentDidCatch(error, info){
		//에러 수집 가능
		console.log('componentDidCatch error',error);
		console.log('componentDidCatch info',info);
	}
	//화살표 함수를 쓰게되면 생각해도됨
	handleIncrease = ()=>{
		this.setState({
			number: this.state.number+1
		})
	}
	//컴포넌트가 만들어질때마다 호출되는함수
	constructor(props){
		super(props);//component가 가지고있는 생성함수 호출해야한다.
		this.handleDecrease = this.handleDecrease.bind(this);//construct에서 사용하는게 this다 라는것을 명시
	}
	//일반함수로 하게 되면 component에서 this를 뭔지 모름
	handleDecrease(){
		this.setState({
			number: this.state.number-1
		})
	}
	componentDidMount(){
		//컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
		console.log('Counter componentDidMount')
	}
	static getDerivedStateFromProps(nextState, prevState){
		console.log('Counter getDerivedStateFromProps')
		console.log('prevState 바뀔 state 값',prevState);
		console.log('nextState 바뀌기 전 state 값',nextState);
		return null
	}
	shouldComponentUpdate(nextProps, nextState){
		//업데이트 성능 최적화
		//여기서 return false하면 렌더링을 안함ㄷ
		//특정조건에 따라 렌더링을 막아줌
		console.log(nextState.number);
		if(nextState.number===5) return false;	//number가 5면 state값은 바뀌지만 UI상 반영은 안됨
		return true;
	}

	componentDidUpdate(prevprops,prevState){
		//Component가 update되고 나서 호출되는 함수
		if(this.state.number!==prevState.number){
			console.log('componentDidUpdate number state 값이 바꼈다.')
		}
	}
	render(){
		
		return (
			<div >
					<h1>카운터</h1>
					<div>값 : {this.state.number}</div>
					<button onClick={this.handleIncrease}>+</button>
					<button onClick={this.handleDecrease}>-</button>
			</div>
		)
	}
}

export default Counter;