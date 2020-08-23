import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        //바로전페이지로 돌아간다
        this.props.history.goBack();
    };

    handleGoHome = () => {
        // '/'주소로 간다
        this.props.history.push('/');
    };

    componentDidMount() {
        //설정시 페이지에 변화가 생기려고할때마다 나갈것인지 질문함
        //1번
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    }

    componentWillUnmount(){
        //component가 언마운트되면 질문을 멈춤
        if(this.unblock){//1번
            this.unblock(); // Q)이거랑 1번이랑 같은건가? 이건 뭘 실행하는거지?
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;