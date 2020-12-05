import React, {Component} from 'react';
import Posts from '../posts/Posts';

class AllPosts extends Component {

    state = {posts: [], chosenOne: null};

    onSelectUser = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenOne: find});
    };

    render() {
        console.log('rend');
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(posts => <Posts item={posts} key={posts.id} onSelectUser={this.onSelectUser}/>)
                }
                {
                    chosenOne && <Posts item={chosenOne}/>
                }

            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    }
}


export default AllPosts;