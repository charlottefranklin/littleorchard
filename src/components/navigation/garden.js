import React, {Component} from "react"
import {HashLink as Link} from "react-router-hash-link"

class Garden extends Component {
    render() {
        return <>
            <li><Link to="/pages/garden/sowing-calendar/">Sowing calendar</Link></li>
            <li><Link to="/pages/garden/links/">Gardening links</Link></li>
        </>
    }
}

export default Garden
