import React from 'react';
import {Route,Link, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/Profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>{/*루트컴포넌트 규칙중복을 방지하기위해 exact를 설정해준다. */}
        <Route path="/about" component={About}/>
        <Route path="/profiles" component = {Profiles}/>
        <Route path="/history" component = {HistorySample}/>
        {/* 여러경로에서 같은 컴포넌트를 보여주는 방법 
        -> path props를 배열로 설정해주면 된다.
        <Route path={['/about','/info']} component={About}/> */}
        <Route render={({location})=>(
          <div>
            <h2>이 페이지는 존재하지 않습니다!</h2>
            <p>{location.pathname}</p>
          </div>
        )}></Route>
      </Switch>
      
    </div>
  );
};

export default App;
