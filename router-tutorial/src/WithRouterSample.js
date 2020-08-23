import React from 'react';
import {withRouter} from 'react-router-dom';
//Router로 사용된 컴포넌트가 아니어도 match,location,history객체를 접근하게한다.

const WithRouterSample = ({location,match,history}) => {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true}></textarea>
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true}></textarea>
            <button onClick={()=> history.push('/')}>홈으로</button>
        </div>
    );
};

export default withRouter(WithRouterSample);
//withRouter를 사용할때는 내보낼 컴포넌트를 함수에 감싸서 보낸다.