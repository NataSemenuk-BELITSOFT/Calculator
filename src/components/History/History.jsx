import React from 'react';
import './History.css';
const History = (props) => {
    // let prev_history = localStorage.getItem('test');
    // console.log(prev_history);
    // console.log(props.history);
    // if(prev_history === 'null'){
    //     prev_history = '';
    // }
    // const history = prev_history + props.history;
    // localStorage.setItem('test', history);
    let history = localStorage.getItem('test');
    if(history !== null){
        history = history.split(',').map((item) => <p>{item}</p>);
    }else {
        history = '';
    }
    return(
        <div className = 'historyBoxStyle'>
            <p>History</p>
            {history}
        </div>
    ) 
}
export default History;