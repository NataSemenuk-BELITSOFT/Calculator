import React from 'react';
import './Button.css';
import PropTypes from "prop-types";

export default class Button extends React.Component {
static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
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
//     constructor() {
//         super();
//         this.onClickLabel = () => {
//             console.log(`Eee, you click on button ${this.props.label}`);
//         }
//     };
//     render() {
//         const { label } = this.props;
//         return (
//             <button className = 'buttonStyle'
//             onClick = { this.onClickLabel }>
//                 {label}
//             </button> 
//         );
//     };
// }