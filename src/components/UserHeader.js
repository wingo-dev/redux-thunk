import React from 'react';
import {connect} from 'react-redux';
class UserHeader extends React.Component {
    render() {
        
        const user = this.props.users.find(user => user.id === this.props.userId);
        if(!user){
            return null;
        }
        return (
            <div className="header">{user.name}{"  "}{user.email}</div>
        );
    }
}

const mapStateToProps = state =>{
    // console.log(state.users);
    return {users: state.users};
}
export default connect(mapStateToProps)(UserHeader);