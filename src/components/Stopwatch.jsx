import React, {useEffect, useState, useRef} from 'react';

const Stopwatch = (props) => {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);

    // useRef 사용
    const refIsRunning = useRef(isRunning);
/*
    const tick = () => {
        // isRunning이 true이면 timer를 1씩 증가
        console.log('tick:', isRunning, refIsRunning.current);
        if (refIsRunning.current) {
            //setTimer도 setState와 마찬가지로 이전값을 파라미터로 받는 함수를 적용할 수있다.
            //setTimer(timer + 1);
            setTimer(timer => timer + 1)
        }
*/
        // customer hooks
        useInterval(() => {
            if (isRunning) {
                setTimer(timer => timer + 1);
            }
        }, 1000);

        // if (this.state.isRunning) {
        //     this.setState(prevState => ({
        //         timer: prevState.timer + 1
        //     }))
        // }
    
    //Dom이 렌더링 된 직후에 호출되는 라이프 사이클
    // 3rd 라이브러리 로딩, 네트워크 호출
    // componentDidMount() {
    //     this.tickRef = setInterval(this.tick, 1000);
    // }

    // Dom이 파괴되기 직전에 호출되는 라이프 사이클
    // 리소스 해제 등등
    // componentWillUnmount() {
    //     clearInterval(this.tickRef);
    // }

    const handleStopwatch = () => {
        refIsRunning.current = !refIsRunning.current;
        setIsRunning(!isRunning);
        // this.setState(prevState => ({
        //     isRunning: !prevState.isRunning
        // }));
    }

    const handleReset = () => {
        setTimer(0);
        //this.setState({timer: 0});
    }
/*
    useEffect(() => {
        let tickRef = setInterval(tick, 1000);
        return () => {
            clearInterval(tickRef);
        }
    })
*/

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{timer}</span>
                <button onClick={handleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        )
    
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Stopwatch;