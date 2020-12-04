import React, {Component} from 'react';
import {cars} from "../Source/source";

class Cars extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.model} - {item.year} - {item.hp} - {item.color}
            </div>
        );
    }
}

export default Cars;