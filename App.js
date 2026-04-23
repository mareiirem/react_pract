import React, { Component } from 'react';
import './App.css';

import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import List from './List';

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelloWorld />
                <Counter />

                <h2>All Items</h2>
                <List items={produce.map(item => item.name)} />

                <h2>Filtered Items</h2>
                <FilteredList items={produce} />
            </div>
        );
    }
}

export default App;