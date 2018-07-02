import React from 'react';
//함수형 컴포넌트 
//초기 마운트 속도가 미세하게 빠름
//불필요한 기능이 없어서 메모리 자원도 많이 않사용함
//state life cycle이 빠져있음
//단순히 보여지는 용도로만 할때 사용
//컴포넌트 간단하게 할수있고 속도 최적화

const Yourname = ({name}) =>{
	return <div> 안녕하세요 {name} 입니다.</div>;
}


export default Yourname;