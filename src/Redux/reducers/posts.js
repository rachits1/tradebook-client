const postsReducer = (state = {allPosts: [], loading: true, currId: null},action)=>{
    switch(action.type){
        case "GET_POSTS_REQUEST":
            return {loading: true}
        case "GET_POSTS_SUCCESS":
            return {allPosts: action.payload, loading: false}
        case "CREATE_POST":
            return {...state,allPosts: [...state.allPosts,action.payload]}
        case "DELETE_POST":
            return {...state,allPosts: state.allPosts.filter((post)=> post._id !== action.payload)}
        case "SET_CURRENT_ID":
            return {...state, currId: action.payload}
        case "UPDATE_POST":
            return {...state, allPosts: state.allPosts.map((post)=> post._id === action.payload._id ? action.payload : post)}
        case "REMOVE_CURRENT_ID":
            return {...state, currId: null}    
        default:
            return state
    }
}

export default postsReducer;