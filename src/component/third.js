import React from 'react'
import { First_Half } from "./First_Half";

export class Third extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <First_Half/>
                <h1>我是Third.</h1>
            </div>
        )
    }
}