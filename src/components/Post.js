import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {deletePost,setCurrentId} from '../Redux/actions/posts';
import {useDispatch} from 'react-redux';
import moment from 'moment'

const randomData = ['erondu','anonymous','bull','bear','crypto','landscape','mountain']
const random = Math.floor(Math.random() * randomData.length)

function Post({post}) {
    const dispatch = useDispatch()
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleEdit(){
        scrollToTop()
        dispatch(setCurrentId(post._id))
    }

    return (
    <div className="posts-container flex">
        <div className="profile-avatar">
            <Avatar alt="Cindy Baker" src={`https://source.unsplash.com/${randomData[random]}`} className="avatar" />
        </div>

        <div className="profile-content flex column">
            <div className="profile-head flex">
                <h5 className="name">{post.name}</h5>
                <h5 className="faded">@{post.username}</h5>
                <h5 className="faded">{moment(post.createdAt).fromNow()}</h5>
            </div>

            <div className="post-content">
                <p>{post.post}</p>
            </div>
            {post.selectedFile === "" ? <></> :
                <div className="post-img">
                    <img src={post.selectedFile} alt="post-img" />
                </div>
            }

            <div className="post-icons-container flex">
                <button className="ico-btn" onClick={handleEdit}><EditIcon className="post-icon" fontSize="small"/></button>
                <button className="ico-btn" onClick={() => dispatch(deletePost(post._id))}><DeleteOutlineIcon className="post-icon" fontSize="small"/></button>
            </div>
        </div>
    </div>
    )
}

export default Post;
