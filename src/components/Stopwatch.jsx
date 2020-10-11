import React, {Component} from 'react';

class Stopwatch extends Component {
    tickRef;

    state = {
        isRunning: false,
        timer: 0
    }

    tick = () => {
        // isRunning이 true이면 timer를 1씩 증가
        if (this.state.isRunning) {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }
    }
    //Dom이 렌더링 된 직후에 호출되는 라이프 사이클
    // 3rd 라이브러리 로딩, 네트워크 호출
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    // Dom이 파괴되기 직전에 호출되는 라이프 사이클
    // 리소스 해제 등등
    componentWillUnmount() {
        clearInterval(this.tickRef);
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }

    handleReset = () => {
        this.setState({timer: 0});
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;