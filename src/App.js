import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import {CustomPlayer} from "./components/CustomPlayer";
import AddPlayerForm from './components/AddPlayerForm';
import _ from 'lodash';

const App = () => {
  const [players, setPlayers] = useState(
   [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  );
  const handleRemovePlayer = (id) => {
    setPlayers(players.filter(item => item.id !== id));
    // this.setState(prevState => {
    //   return {
    //     players: prevState.players.filter(item => item.id !== id)
    //   }
    // })
  };

  const handleChangeScore = (id, delta) => {
    console.log("id: ", id, "delta: ", delta);
    players.forEach(player => {
      if (player.id === id) {
        player.score += delta;
      }
    });
    setPlayers([ ...players ])
    // this.setState(prevState => {
    //   const players = [ ...prevState.players ];
    //   players.forEach(player => {
    //     if (player.id === id) {
    //       player.score += delta;
    //     }
    //   })
    //   return { players }
    // })
  }

  const handleAddPlayer = (name) => {
    const maxObject = _.maxBy(players, 'id');
    const maxId = maxObject.id + 1;
    console.log(maxId);
    players.unshift({id: maxId, name, score: 0});
    setPlayers([ ...players ]);
    // this.setState(prevState => {
    //   const players = [ ...prevState.players ];

    //   const maxObject = _.maxBy(players, 'id');
    //   const maxId = maxObject.id + 1;
    //   console.log("maxId: ", maxId);
    //   players.unshift({id: maxId, name, score: 0});

    //   return { players };
    // });
  };

  const getHighScore = () => {
    const maxObject = _.maxBy(players, 'score');
    const highScore = maxObject.score;
    // 0은 default이므로 0보다 클경우만 highScore로 지정
    return highScore > 0? highScore : null;
  }

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" players={players} />

      {/*Players List */}
      { players.map(item => <CustomPlayer 
        key={item.id.toString()}
        id={item.id}
        name={item.name}
        score={item.score}
        isHighScore={item.score === getHighScore}
        removePlayer={handleRemovePlayer}
        changeScore={handleChangeScore}
      />)}
      <AddPlayerForm addPlayer={handleAddPlayer}/>
    </div>
  )


}

export default App;
