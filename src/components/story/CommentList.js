import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
    let index = 0;
    return (
        <div style={{padding: 15}}>
            { comments && comments.map( comment => {
                return (
                    <Comment comment={comment} key={index++}/>
                )
            })
            }
        </div>
    )
}

export default CommentList