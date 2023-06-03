import React from "react";
import "./Navigation.css";

export default class Navigation extends Comment{
    render(){
        return(
            <header>
                <ul className="navigation-items">
                    <li className="navigation-item">
                        <link to ="/">New York</link>
                    </li>
                    <li className="navigation-item">
                        <link to ="/">London</link>
                    </li>
                    <li className="navigation-item">
                        <link to ="/">Singapore</link>
                    </li>
                    <li className="navigation-item">
                        <link to ="/">Seoul</link>
                    </li>
                    <li className="navigation-item">
                        <link to ="/">Hong Kong</link>
                    </li>
                </ul>
            </header>
        );
    }
    }