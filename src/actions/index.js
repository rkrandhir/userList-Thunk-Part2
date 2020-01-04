import _ from 'lodash';
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async(dispatch, getState) => {
    await dispatch(fetchPosts());
    console.log(getState().posts);
    // lodash - Map function to show array of user Id
    // loadash - uniq function to show only array of the unique record 
    
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // ALTERNATIVE METHOD for the above 2 lines

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()

    // chain is a lodash function
    // it chains the function and keeps the first argument
    // value is to execute the function
    // for more info udemy - Modern React with Redux (192)
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS',payload: response.data}); 
};  

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload:response.data});
};
/*
Actions must be plain objects
Use custom middleware for async actions

ROLE OF MIDDLEWARE (THUNK) -  to deal with async action creator
*/