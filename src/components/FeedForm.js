import React,{useState,useEffect} from 'react';
import FileBase from 'react-file-base64';
import './FeedForm.css';
import {useDispatch,useSelector} from 'react-redux';
import {sendPost,updatePost} from '../Redux/actions/posts';

function FeedForm() {
    const dispatch = useDispatch()
    const currId = useSelector(state => state.posts.currId);
    const post = useSelector(state => state.posts.currId ? state.posts.allPosts.find((post)=> post._id === state.posts.currId) : null);
    console.log(currId);
    console.log(post);
    const [formData,setFormData] = useState({
        name: '',username: '',post: '',selectedFile: ''
    })

    useEffect(()=>{
        if(post){
            setFormData({
                name: post.name,username: post.username, post: post.post
            })
        }
    },[post])

    function handleChange(e){
        const {name,value} = e.target;
        setFormData({
            ...formData,[name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if (currId){
            dispatch(updatePost(currId,formData))
            dispatch({type: "REMOVE_CURRENT_ID"})
        } else {
            dispatch(sendPost(formData))
        }
        setFormData({
            name: '',username: '',post: '',selectedFile: ''
        })
    }
    
    return (
    <div className="form-container flex">
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <input required type="text" name="name" placeholder="Your Name" autoComplete="off" value={formData.name} onChange={handleChange}/>
            </div>

            <div className="form-control">
                <input required type="text" name="username" placeholder="Type in a username" autoComplete="off" value={formData.username} onChange={handleChange}/>
            </div>

            <div className="form-control">
                <textarea required name="post" cols="3" placeholder="What was your last best trade ?" value={formData.post} onChange={handleChange}></textarea>
            </div>
            <div className="post-form-icons flex">
                <div className="flex file-inp">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, selectedFile: base64 })} className="selected-file"/>
                    {/* <button className="ico-btn"><ImageIcon className="f-ico"/></button> */}
                </div>
                <div className="post-form-btn">
                    <button className="btn" type="submit">Post</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default FeedForm
