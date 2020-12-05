import React, {Component} from 'react';

class Second extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.name} - {item.username} - {item.email}
            </div>
        );
    }
}

export default Second;