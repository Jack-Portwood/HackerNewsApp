import React, {Component} from 'react';
import StoryList from "../components/StoryList.js";

class StoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [], 
            filteredstories: []

        }
    }

    componentDidMount() {
    this.loadstories(this.props.stories[0].url)
    }
    loadstories(url) {
    fetch(url)
    .then(res => res.json())
    .then((storiesList) => {
        const reducedList = storiesList.slice(0,10);
        const filteredstories = reducedList.map((storyId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json()) //20-21 returns an array of fetches 
        })
    
    Promise.all(filteredstories)
    .then((results)=>{
        this.setState({filteredstories: results})
    }) // promise is fetching everything from array ^^
})

}
render(){
    return(
        <div>
            <StoryList stories={this.state.filteredstories}/>
            

        </div>
    ) 
}
}

export default StoryContainer;