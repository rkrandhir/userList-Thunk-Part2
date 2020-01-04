import React from 'react';
import PostList from './PostList';

const App = () => {
    return <div><PostList /></div>
}

export default App; 

/*
===============================
GENERAL DATA LOADING WITH REDUX
===============================

A.  Components are generally responsible for fetching data they need by calling an action creator
    1.  Component gets rendered onto the screen
    2.  Component's 'ComponentDidMount' lifecycle method gets called
    3.  We call action creator from 'ComponentDidMount'

B.  Action creators are responsible for making API requests
    This is where Redux-thunk comes into play

    4.  Action creator runs code to make an API request
    5.  API resonds with data
    6.  Action creator returns an 'action' with the fetched data on the 'Payload' property

C.  We get fetched data into a component by generating new state in our redux store,
    Then getting that into our component through mapStateToProps

    7.  Some reducer sees the action, returns the data off the 'Payload'
    8.  Because we generated some new state object, redux/react-redux cause our React app to be rendered

*/