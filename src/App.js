import React, {Component} from 'react';
import {cars} from "./Source/source";
import Cars from "./Data/cars";

class App extends Component {
    render() {
        return (
            <div>
                {cars.map((cars, index) => <Cars item = {cars} key = {index}/>)}
            </div>
        );
    }
}

export default App;