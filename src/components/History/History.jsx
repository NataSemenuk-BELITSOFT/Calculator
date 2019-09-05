import React from 'react';
import './History.css';
const History = (props) => {
    let history = JSON.parse(localStorage.getItem('history'));
    if(history !== null){
        history = history.map((item) => <p>{item}</p>);
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