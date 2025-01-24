import React from 'react'
import { useDispatch } from "react-redux";
import {addPost} from '../JS/actions/post'

const LawyerDetailsComment = ({User,avocatID,setComment,comment}) => {
    const dispatch = useDispatch();
  return (
    <div className='lawyerDetailsComment'>
        <h2>Leave a comment</h2>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" id="comment" cols="30" rows="10" placeholder='Leave a comment' className="textarea--custom" />
        <button onClick={() => {dispatch(addPost({userID: User._id,lawyerID: avocatID,comment}));setComment("");}} className='btn--costum'>Comment</button>
    </div>
  )
}

export default LawyerDetailsComment