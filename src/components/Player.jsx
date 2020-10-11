import React from "react";
import Counter from "./Counter";

const Player = (props) => {
    console.log("Player props"+props);
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
                {props.childre}
                {props.name}
            </span>
            <Counter score={props.score} id={props.id} changeScore={props.changeScore} />
        </div>
    )
}

export default Player;