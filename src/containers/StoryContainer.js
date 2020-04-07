import React, {Component} from 'react';

class StoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            filteredstories: []

        }
    }

    componentDidMount() {
    this.loadstories(this.props.stories [0].url)
    }
    loadstories(url) {
    fetch(url)
    .then(res => res.json())
    .then((storiesList) => {
        const filteredstories = storiesList.map((storyId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
        })
    
    Promise.all(filteredstories)
    .then((results)=>{
        this.setState({filteredstories: results})
    })
})

}
render(){
    return(
        <div></div>
    ) 
}
}

export default StoryContainer;