import React from 'react';
import './FeedsSection.css';
import FeedForm from './FeedForm';
import Post from './Post';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useSelector} from 'react-redux';

function FeedsSection() {
    const postState = useSelector(state => state.posts)
    const {allPosts, loading} = postState;
    return (
        <div className="feeds__section flex column">

            <FeedForm />
            <div className="partition">
                <div></div>
            </div>
            
            {loading ? 
                <div className="loading__box flex">
                    <h2><HourglassEmptyIcon /> Loading...</h2>
                </div>

                :
                allPosts.length === 0 ?     
                    <div className="empty__feed flex"><h2>No Posts, why not create one ?</h2><InsertEmoticonIcon /></div>
                :
                allPosts.map((post)=>{
                    return (
                        <Post key={post._id} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default FeedsSection