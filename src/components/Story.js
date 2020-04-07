import React, {Component} from 'react'; 

const Story = ({details}) => (
    <li>
        <article>
            <h1> <a href={details.url}>{details.title}</a></h1>
            <p>Written by {details.by}</p>
        </article>
    </li>
);
    


export default Story;