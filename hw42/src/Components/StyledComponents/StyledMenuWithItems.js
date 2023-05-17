import React from 'react';
import {Menu} from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
    color: black;
    font-size: 20px;
    background-color: white;
    margin-top: 50%;
`
function StyledMenuWithItems (){
    function getItem(label, key, icon, children, type) {
    return {
        key,
        label,
    };
    }
    const items = [
    getItem('Home', '1'),
    getItem('API', '2'),
    getItem('Maps', '3'),
    getItem('Option 1', '4'),
    getItem('Option 2', '4'),
    ];
    return(<StyledMenu items={items}></StyledMenu>)
}

export default StyledMenuWithItems;