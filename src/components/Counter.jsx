import React from "react";
import { useDispatch } from "react-redux";
import {changeScore} from "../redux/actions";

const Counter = (props) => {
    const dispatch = useDispatch();
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => dispatch(changeScore(props.id, -1))} >- </button>
                <span className="counter-score">{props.score}</span>
                <button className="counter-action increment" onClick={() => dispatch(changeScore(props.id, +1))}> + </button>
            </div>
        )
}

export default Counter;