/**
 * Created by carlos-valarezo on 27/04/2016.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router' ).Router;
var Route = require('react-router' ).Route;
//In Cordova BrowserHistory does not work, but both work perfect in browser and cordova
var history = require('react-router' ).hashHistory;
var IndexRoute = require('react-router').IndexRoute;

import Home from './Home';
import Football from './Football';
import Formula1 from './Formula1';
import Cricket from './Cricket';
import Story from './Story';
import FullStory from './FullStory';
import SportsContainer from './SportsContainer';

var App = React.createClass({

    render:function(){
        console.log("en App");
        return (
            null
        );
    }
});
ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={SportsContainer}>
                <IndexRoute component={Home} />
                <Route path="football" component={Football}/>
                <Route path="formula1" component={Formula1}/>
                <Route path="cricket" component={Cricket}/>
                <Route path="fullStory/:assetUri" component={FullStory}>

                </Route>
        </Route>
    </Router>), document.getElementById("root"));

