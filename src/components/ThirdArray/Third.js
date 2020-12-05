import React, {Component} from 'react';

class Third extends Component {

    render() {
        let {item} = this.props
        return (
            <div>
                {item.name} - {item.age} - {item.status.toString()}
            </div>
        );
    }
}

export default Third;