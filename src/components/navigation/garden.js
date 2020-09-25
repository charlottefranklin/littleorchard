import React, {Component} from "react"
import {HashLink as Link} from "react-router-hash-link"

class Garden extends Component {
    render() {
        return <nav>
            <section className="flex-group flex-start">
                <article>
                    <h2>Garden</h2>
                    <nav>
                        <ul>
                            <li><Link to="/pages/garden/sowing-calendar/">Sowing calendar</Link></li>
                            <li><Link to="/pages/garden/links/">Links</Link></li>
                        </ul>
                    </nav>
                </article>
            </section>
        </nav>
    }
}

export default Garden
