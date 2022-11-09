import jsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceHolder.get('/posts');
    // console.log(response.data);
    dispatch({ type:'FETCH_POSTS', payload: response.data });
}

export const fetchUser = (id)=>async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload: response.data});
}