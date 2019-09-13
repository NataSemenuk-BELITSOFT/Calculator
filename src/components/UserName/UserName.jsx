import React from 'react';
import {connect} from "react-redux";
import './UserName.css'

const UserName = ({ curUser }) => {
    return (
        <p className = 'nameUser'>
            {curUser.name}
        </p>
    );
};

const mapStateToProps = ({ curUser }) => {
    return {
        curUser,
    };
};

export default connect(mapStateToProps, null)(UserName);