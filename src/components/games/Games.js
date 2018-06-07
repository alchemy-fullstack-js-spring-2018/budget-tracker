import React, { Component } from 'react';

const games = [
    { id: 1, timestamp: '9/1/2015', name: 'Armello', developer: 'League of Geeks', price: '19.99' },
    { id: 2, timestamp: '8/28/2012', name: 'Guild Wars 2', developer: 'Arenanet', price: '29.99' },
    { id: 3, timestamp: '11/20/2017', name: 'Battle Chef Brigade', developer: 'Trinket Studios', price: '19.99' },
    { id: 4, timestamp: '4/12/2018', name: 'Dead In Vinland', developer: 'CCCP', price: '19.99' },
];

export default class Games extends Component {

    state={
        games: null
    };

    componentDidMount() { //directly mounts the state games.
        Promise.resolve(games)
            .then(games => this.setState({ games }));
    }

    render() {
        const { games } = this.state;
        if(!games) return null;

        return (
            <div>
                <h1>Steam Games Budget</h1>
                <ul>
                    {games.map(({ name, price }) =>{
                        return <li key={name}>{name} Price:{price}</li>;
                    })}
                    </ul>
                    </div>
        );

        
    }
}