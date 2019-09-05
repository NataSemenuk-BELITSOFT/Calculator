import React from 'react';
import Button from '../Button/Button.jsx';

import './ButtonsBox.css';

const ButtonsBox = ({click}) => {
    const initialData = [
        {
            label: 'c',
            btnStyle: 'clear',
        },
        {
            label: '+/-',
            btnStyle: 'operation',
        },
        {
            label: '√',
            btnStyle: 'operation',
        },
        {
            label: '/',
            btnStyle: 'operation',
        },
        {
            label: '7',
            btnStyle: 'baseButton',
        },
        {
            label: '8',
            btnStyle: 'baseButton',
        },
        {
            label: '9',
            btnStyle: 'baseButton',
        },
        {
            label: '*',
            btnStyle: 'operation',
        },
        {
            label: '4',
            btnStyle: 'baseButton',
        },
        {
            label: '5',
            btnStyle: 'baseButton',
        },
        {
            label: '6',
            btnStyle: 'baseButton',
        },
        {
            label: '-',
            btnStyle: 'operation',
        },
        {
            label: '1',
            btnStyle: 'baseButton',
        },
        {
            label: '2',
            btnStyle: 'baseButton',
        },
        {
            label: '3',
            btnStyle: 'baseButton',
        },
        {
            label: '+',
            btnStyle: 'operation',
        },
        {
            label: '.',
            btnStyle: 'baseButton',
        },
        {
            label: '0',
            btnStyle: 'baseButton',
        },
        {
            label: '%',
            btnStyle: 'baseButton',
        },
        {
            label: '=',
            btnStyle: 'res',
        },
    ];
    const buttons = initialData.map ( (item) => <Button key={item.label} clickHandler={click} label={item} btnStyle={item.btnStyle}/>);
    let customButtons = localStorage.getItem('buttons'), i=0;
    if(customButtons) {
        customButtons = customButtons.split(',').map((item) => {
            const prop = {
                label: item,
                clickHandler: click,
                btnStyle: 'baseButton',
            };
            return <Button key={prop.label} clickHandler={prop.clickHandler} label={prop} btnStyle={prop.btnStyle}/>
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
