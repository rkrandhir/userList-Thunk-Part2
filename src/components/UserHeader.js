import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // it attempts to fetch its own data which we dont want now;  
    
    // componentDidMount() {
    //     console.log(this.props.userId)
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        //const user = this.props.users.find((user) => user.id === this.props.userId);
        //instead of above code, we can do it in mapStateToProps
        const { user } = this.props;
        
        if(!user) {
            return null;
        }

        return (
        <div className="header">{ user.name }</div>
        );
    }
}

/* const mapStateToProps = (state) => {
    return { users: state.users}
} */

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)}; //this state.users comes from reducers -> index.js
}

export default connect(mapStateToProps)(UserHeader);

