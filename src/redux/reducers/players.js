import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";
import _ from 'lodash';

const playerInitialState = {
    players: [
        {name: 'LDK', score: 0, id: 1},
        {name: 'HONG', score: 0, id: 2},
        {name: 'KIM', score: 0, id: 3},
        {name: 'PARK', score: 0, id: 4},
      ]
}

//playerInitialState.filteredPlayers = playerInitialState.players;

export const playerReducer = (state = playerInitialState, action) => {
    let players = [...state.players];
    switch (action.type) {
        case REMOVE_PLAYER:
            players = [ ...state.players];
            let index = players.findIndex(player => player.id === action.id);
            players.splice(index, 1)
            return {
                ...state,
                players
            }
        case ADD_PLAYER:
            players = [...state.players];
            const maxObject = _.maxBy(players, 'id');
            const maxId = maxObject.id + 1;
            players.unshift({id: maxId, name: action.name, score: 0});
            return {
                ...state,
                players
            }
        case CHANGE_SCORE:
            players = [...state.players];
            players.forEach((player, index) => {
                if (index+1 === action.id) {
                    player.score += action.delta;
                }
            })
            return {
                ...state,
                players
            }
        default: 
            return state;
    }
   
}