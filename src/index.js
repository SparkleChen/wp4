import React from 'react'
import { render } from 'react-dom'
import { First } from "./component/first"
import './css/index.css'

render(
    <div>
        <h1>我是webpack4.0+</h1>
        <First/>
    </div>,
    document.getElementById('root')
);