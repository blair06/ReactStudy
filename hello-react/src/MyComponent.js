import React from 'react';
import PropTypes from 'prop-types'; //props타입 지정시 불러와야함


const MyComponent = (props) => {
    const {name, children, year} = props;//비구조화 할당문법
    return (<div>안녕하세요 나의 이름은 {name}입니다.
        children값은 {children}입니다.
        태어난 년도는 {year}입니다.
    </div>) 
};


MyComponent.defaultProps = {
    name: '기본이름',
    year: 1998
    
};
MyComponent.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number.isRequired //미입력시 console오류출력
};
export default MyComponent; //다른파일에서 이파일을 import할때 MyComponent클래스를 불러오도록 설정
