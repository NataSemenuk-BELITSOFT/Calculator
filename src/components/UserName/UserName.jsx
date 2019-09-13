 import React from 'react';

import './UserName.css'
import {connect} from "react-redux";

const UserName = ({ currentUser }) => {
    return (
        <p className = 'nameUser'>
            {currentUser.name}
        </p>
    );
};

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    };
};

export default connect(mapStateToProps)(UserName);