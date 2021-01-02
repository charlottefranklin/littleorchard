import React from "react";
import {HashRouter} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";

export default function BlogNavigation() {
    return (
        <aside>
            <nav>
                <ul>
                    <HashRouter basename={"/blog"}>
                        <li><Link to="/2020-10-27/">Post</Link></li>
                        <li><Link to="/2020-11-02/">Post</Link></li>
                    </HashRouter>
                </ul>
            </nav>
        </aside>
    )
}
