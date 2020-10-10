import React from "react";
import _ from 'lodash';

const Statistics = (props) => {
    const totalPlayers = props.players.length;
    const totalScore = _.sumBy(props.players, "score")
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Pointes:</td>
                    <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Statistics;