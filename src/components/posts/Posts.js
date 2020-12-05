import React, {Component} from 'react';

class Posts extends Component {
    render() {
        let {item, onSelectUser} = this.props;
        return (
            <div>
                {item.id} - {item.title} -
                <button onClick={() => onSelectUser(item.id)}>chose</button>
            </div>
        );
    }
}

export default Posts;