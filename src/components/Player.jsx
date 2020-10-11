import React from "react";
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {useDispatch} from 'react-redux';

const Player = (props) => {
    const dispatch = useDispatch();
    console.log(props);
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => dispatch(removePlayer(props.id))}>X</button>
                {props.children}
                {props.name}
            </span>
            <Counter score={props.score} id={props.id} changeScore={props.changeScore} />
        </div>
    )
}

export default Player;