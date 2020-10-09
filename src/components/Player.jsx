import React from "react";
import Counter from "./Counter";

const Player = (props) => {
    console.log("Player props"+props);
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
            </span>
            <span className="player-name">
                {props.name}
            </span>
            <Counter />
        </div>
    )
}

export default Player;