import axios from 'axios';
const url = "https://tradebook-rbt.herokuapp.com//posts";

export const getPosts = ()=>{
    return async (dispatch)=>{
        try {
            dispatch({type: "GET_POSTS_REQUEST"})
            const {data} = await axios.get(url);
            dispatch({type: "GET_POSTS_SUCCESS",payload: data})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const sendPost = (postData)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(url,postData)
            dispatch({type: "CREATE_POST",payload: data})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deletePost = (postId)=> {
    return async (dispatch)=>{
        try {
            await axios.delete(`${url}/${postId}`)
            dispatch({type: "DELETE_POST",payload: postId})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const setCurrentId = (currId)=>{
    return (dispatch)=>{
        dispatch({type: "SET_CURRENT_ID",payload: currId})
    }
}

export const updatePost = (currId,postData)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.patch(`${url}/${currId}`,postData)
            dispatch({type: "UPDATE_POST",payload: data})
        } catch (error) {
            console.log(error.message)
        }
    }
}