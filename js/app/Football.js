/**
 * Created by carlos-valarezo on 27/06/2016.
 */
var React = require ( 'react' );
var ReactDOM = require('react-dom');

var Football = React.createClass({


    getInitialState:function()
    {
        return {storiesList:[]}
    },
    componentDidMount: function()
    {
        fetch('./db/football28040255.json')
            .then((response) => response.json())
            .then((responseData) => {
                var story1 = responseData.results[0].groups[0].groups[0].groups[0].groups[0];
                var story2 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[0];
                var story3 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[1];
                var moreStories = responseData.results[0].groups[0].groups[0].groups[1].groups[0];
                var storiesListTemp = [story1,story2,story3,moreStories];
                this.setState({storiesList:storiesListTemp});
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render:function(){
        console.log("EN HOME");
        return (
            <div>
                <StoriesContainer storiesList={this.state.storiesList}/>
                {this.props.children}
            </div>
        );
    }

});
export default Football;
