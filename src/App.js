import React, {Component} from 'react';
import {cars} from "./components/FirstArray/FirstArray";
import First from "./components/FirstArray/First";
import {users} from "./components/SecondArray/SecondArray";
import Second from "./components/SecondArray/Second";
import {array} from "./components/ThirdArray/ThirdArray";
import Third from "./components/ThirdArray/Third";

class App extends Component {
    render() {
        return (
            <div>
                {cars.map((cars, index) => <First item = {cars} key = {index}/>)}
                <br/>
                {users.map(users => <Second item = {users} key = {users.id}/>)}
                <br/>
                {array.map((array, index)=> <Third item = {array} key = {index}/>)}
            </div>
        );
    }
}

export default App;


// lesson 1
//
// Создать несколько массивов с объектами.
//     Создать для каждого из  массивов компонент, который отрисовывает все объекты.
//     для отрисовки каждого отдельного объекта создать свой компонент.
//     Вывести все объекты в UI