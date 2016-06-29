/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
var Link = require('react-router' ).Link;

import StoriesContainer from './StoriesContainer';

var SportsContainer = React.createClass({
    render:function(){
        console.log("En sportscontainer");
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/football">Football</Link></li>
                    <li><Link to="/formula1">Formula1</Link></li>
                    <li><Link to="/cricket">Cricket</Link></li>
                </ul>
                {this.props.children}


            </div>
        );
    }
});
export default SportsContainer;


