import React from 'react'
import { Second } from "./second"
import { Third } from "./third"

export class First extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>我是First.</h1>
                <Second/>
                <Third/>
            </div>
        )
    }
}