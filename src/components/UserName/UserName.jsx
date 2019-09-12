 import React from 'react';

import './UserName.css'
import {connect} from "react-redux";

const UserName = ({ currentUser }) => {
    return (
        <div className = 'nameUser'>
            {currentUser.name}
        </div>
    );
};

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    };
};

export default connect(mapStateToProps, null)(UserName);