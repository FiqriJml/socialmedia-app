import React from 'react';
import Story from './Story';

const StoryList = ({stories}) => {
    return (
        <div>
            { stories && stories.map( story => {
                return (
                    <Story story={story} key={story.id}/>
                )
            })}
        </div>
    )
}

export default StoryList;