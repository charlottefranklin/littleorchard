import React from "react"
import {HashLink as Link} from "react-router-hash-link"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/blog/">Garden</Link></li>
                {/*<li><Link to="/shop/">Shop</Link></li>*/}
                {/*<li><Link to="/garden/">Garden</Link></li>*/}
                <li><Link to="/kitchen/">Kitchen</Link></li>
                <li><Link to="/security">Security</Link></li>
                <li><Link to="/mathematics">Mathematics</Link></li>
                <li><Link to="/algorithms">Algorithms</Link></li>
                <li><Link to="/data-science">Data</Link></li>
                {/*<li><Link to="/interaction-design">Interaction design</Link></li>*/}
                {/*<li><Link to="/writing">Writing</Link></li>*/}
            </ul>
        </nav>
    );
}

export default Navigation
