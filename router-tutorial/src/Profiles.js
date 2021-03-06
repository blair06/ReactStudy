import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle}to="/profiles/velopert">velopert</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/hyewon">hyewon</NavLink>
                </li>
            </ul>
            {/* component대신 render라는 props를 넣어주었다. 이처럼 component가 아닌 JSX를 바로 보여줄수있다.
                JSX에서 props를 생략하면 자동으로 true로 설정된다. 여기선 exact가 true */}
            <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
            
        </div>
    );
};

export default Profiles;