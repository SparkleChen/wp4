import React from 'react'
import { First_Half } from "./First_Half";

export class Second extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <First_Half/>
                <h1>我是Second.</h1>
            </div>
        )
    }
}