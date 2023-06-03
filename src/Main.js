import { Component } from "react";
import React from "react";
import {Route} from "react-router-dom";
import WeatherSearch from './WeatherSearch';

export default class App extends Component{
render(){
    return(
        <div>
<Route
exact={true}
path="/"
render={() =>(
    <div className="App">
        <WeatherSearch city ="London" />
    </div>
)
}
/>

<Route
exact={true}
path="/"
render={() =>(
    <div className="App">
        <WeatherSearch city ="Singapore" />
    </div>
)
}
/>
<Route
exact={true}
path="/"
render={() =>(
    <div className="App">
        <WeatherSearch city ="Seoul" />
    </div>
)
}
/>
<Route
exact={true}
path="/"
render={() =>(
    <div className="App">
        <WeatherSearch city ="Hong Kong" />
    </div>
)
}
/>
<Route
exact={true}
path="/"
render={() =>(
    <div className="App">
        <WeatherSearch city ="New York" />
    </div>
)
}
/>
        </div>
    );
}
}