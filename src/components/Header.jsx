import React from 'react';
import Statistics from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <Statistics players={props.players}/>
            <h1>{ props.title }</h1>
            <Stopwatch />
        </header>
    )
}

export default Header;