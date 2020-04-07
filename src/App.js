import React, {Component} from 'react';
import StoryContainer from './containers/StoryContainer';

class App extends Component {
  render(){
    const stories = [
      { name: "Lastest Stories", url:"https://hacker-news.firebaseio.com/v0/topstories.json"},
      { name: "Story Detail", url:"https://hacker-news.firebaseio.com/v0/item/{storyId}.json"}
    ]

  
  return (
    <StoryContainer stories={stories}/>
  );
  }
}

export default App;
