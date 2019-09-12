import React, {Component} from 'react';
import './History.css';

 const History = ({ history, clearHistory }) => {
    if(history && history.length){
        history = history.map((item) => <p>{item}</p>);
    }else {
        history = '';
    }
    return(
        <div className = 'historyBox'>
            <p>History</p>
            <button className = 'clearHistory'
                    onClick={clearHistory}>Clear</button>
            {history}
        </div>
    )
}

export default History;
