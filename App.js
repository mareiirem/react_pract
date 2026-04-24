import React, { Component } from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';
import List from './components/List';

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
                <h1>React Practice App</h1>

                <div className="section">
                    <h2>Hello World</h2>
                    <HelloWorld />
                </div>

                <div className="section">
                    <h2>Counter</h2>
                    <Counter />
                </div>

                <div className="section">
                    <h2>All Items</h2>
                    <List items={produce.map(item => item.name)} />
                </div>

                <div className="section">
                    <h2>Filtered List</h2>
                    <FilteredList items={produce} />
                </div>
            </div>
        );
    }
}

export default App;
