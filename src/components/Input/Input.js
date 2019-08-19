import React from 'react';
import PropTypes from "prop-types";
import './Input.css';
export default class Input extends React.Component {
    static propTypes = {
        value: PropTypes.string,
      };    
    render() {
        return (      
            <div>
                <div className = 'inputStyle'>{this.props.value}</div>
            </div>
        );
    }
};
// const Input = () => {
//     return (
//         <input className = 'inputStyle'/>
//     );
// };
