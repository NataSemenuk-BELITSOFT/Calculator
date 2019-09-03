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
    let customButtons = localStorage.getItem('buttons'), i=0;
    if(customButtons) {
        console.log('Come');
        customButtons = customButtons.split(',').map((item) => {
            const prop = {
                label: item,
                clickHandler: click,
            };
            return <Button key={prop.label} clickHandler={prop.clickHandler} label={prop}/>
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
