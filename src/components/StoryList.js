import React from 'react';
import Story from '../components/Story';

const StoryList = (props) =>{
    const stories = props.stories.map((story, index) => {
        return (<Story key = {index} details={story} position={index+1}/>);
    });

    return(
        <ul>
            {stories}
        </ul>
    );
}

export default StoryList; 