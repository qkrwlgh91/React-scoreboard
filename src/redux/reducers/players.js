const playerInitialState = {
    players: [
        {name: 'LDK', score: 0, id: 1},
        {name: 'HONG', score: 0, id: 2},
        {name: 'KIM', score: 0, id: 3},
        {name: 'PARK', score: 0, id: 4},
      ]
}

export const playerReducer = (state = playerInitialState, action) => {
    return state;
}