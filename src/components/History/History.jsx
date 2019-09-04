import React from 'react';
import './History.css';
const History = (props) => {
    let history = localStorage.getItem('test');
    if(history !== null){
        history = history.split(',').map((item) => <p>{item}</p>);
    }else {
        history = '';
    }
    return(
        <div className = 'historyBox'>
            <p>History</p>
            {history}
        </div>
    ) 
}
export default History;