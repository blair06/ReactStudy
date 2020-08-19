import React from 'react';
import {Route,Link} from 'react-router-dom';
import About from './About';
import Home from './Home';


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
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
      {/* 여러경로에서 같은 컴포넌트를 보여주는 방법 
      -> path props를 배열로 설정해주면 된다.
      <Route path={['/about','/info']} component={About}/> */}
    </div>
  );
};

export default App;
