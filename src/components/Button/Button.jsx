import React from 'react';
import './Button.css';
import PropTypes from "prop-types";

export default class Button extends React.Component {
static propTypes = {
    label: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.label);
  };

    render() {
        return (
            <div>
                <button className = 'buttonStyle' onClick = { this.handleClick }>{this.props.label}</button> 
            </div>
        );
    };
}
// import React from 'react';
// import './History.css';
// const History = (props) => {
//     // localStorage.setItem('history', props.history);
//     let displayedHistory='';
//     if(localStorage.getItem('history')) {
//         const history = localStorage.getItem('history').split(',');
//         displayedHistory = history.map((item) => <p>{item}</p>);
//     }
//     return(
//         <div className = 'historyBoxStyle'>
//             <h1>History</h1>
//             {displayedHistory}
//         </div>
//     ) 
// }
// export default History;