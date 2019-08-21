import React from 'react';
import './History.css';
History = (props) => {
    return(
        <div className = 'historyBoxStyle'>
            <p>History</p>
            <p>{props.history}</p>
        </div>
    ) 
}
export default History;