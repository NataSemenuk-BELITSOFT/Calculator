import React from 'react';
import Button from '../Button/Button.jsx';

import './ButtonsBox.css';

const ButtonsBox = ({click}) => {
    const initialData = [
        {
            label: 'c',
        },
        {
            label: '+/-',
        },
        {
            label: '√',
        },
        {
            label: '/',
        },
        {
            label: '7',
        },
        {
            label: '8',
        },
        {
            label: '9',
        },
        {
            label: '*',
        },
        {
            label: '4',
        },
        {
            label: '5',
        },
        {
            label: '6',
        },
        {
            label: '-',
        },
        {
            label: '1',
        },
        {
            label: '2',
        },
        {
            label: '3',
        },
        {
            label: '+',
        },
        {
            label: '.',
        },
        {
            label: '0',
        },
        {
            label: '%',
        },
        {
            label: '=',
        },
    ];
    const buttons = initialData.map ( (item) => <Button key={item.label} clickHandler={click} label={item}/>);
    let customButtons = localStorage.getItem('buttons');
    if(customButtons) {
        customButtons = customButtons.split(',').map((item) => {
            const prop = {
                label: item,
                clickHandler: click,
            };
            return <Button key = {item} props = {prop} />
        });
    } else {
        customButtons = '';
    }
    return (
        <div className = 'buttonsBox'>
            {buttons}
            {customButtons}
        </div>
    );
};

export default ButtonsBox;
// export default class ButtonsBox extends React.Component {
        //     static propTypes = {
        //         clickHandler: PropTypes.func,
        //     };
        
        //     handleClick = (buttonName) => {
        //         this.props.clickHandler(buttonName);
        //     };
        //     render() {
        // return (
        //     <div>
        //         <div className = 'components_ButtonsPanel'>
        //             <Button label = 'c' clickHandler={this.handleClick}/>
        //             <Button label = '+/-' clickHandler={this.handleClick}/>
        //             <Button label = '&#8730;' clickHandler={this.handleClick}/>
        //             <Button label = '/' clickHandler={this.handleClick}/>
        //         </div>
        //         <div className="components_ButtonsPanel">
        //             <Button label = '7' clickHandler={this.handleClick}/>
        //             <Button label = '8' clickHandler={this.handleClick}/>
        //             <Button label = '9' clickHandler={this.handleClick}/>
        //             <Button label = '*' clickHandler={this.handleClick}/>
        //         </div>          
        //         <div className="components_ButtonsPanel">
        //             <Button label = '4' clickHandler={this.handleClick}/>
        //             <Button label = '5' clickHandler={this.handleClick}/>
        //             <Button label = '6' clickHandler={this.handleClick}/>
        //             <Button label = '-' clickHandler={this.handleClick}/>
        //         </div>
        //         <div className="components_ButtonsPanel">
        //             <Button label = '1' clickHandler={this.handleClick}/>
        //             <Button label = '2' clickHandler={this.handleClick}/>
        //             <Button label = '3' clickHandler={this.handleClick}/>
        //             <Button label = '+' clickHandler={this.handleClick}/>
        //         </div> 
        //         <div className="components_ButtonsPanel">
        //             <Button label = '.' clickHandler={this.handleClick}/>
        //             <Button label = '0' clickHandler={this.handleClick}/>
        //             <Button label = '%' clickHandler={this.handleClick}/>
        //             <Button label = '=' clickHandler={this.handleClick} equal/>
        //         </div>
        //     </div>
        // );
        //     }
        // };