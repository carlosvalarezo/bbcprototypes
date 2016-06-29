/**
 * Created by carlos-valarezo on 22/06/2016.
 */

var React = require ( 'react' );
var FullStory = React.createClass({
    getInitialState:function()
    {
        return {parame:null}
    },
    componentDidMount:function()
    {
        let uriTemp = this.props.params.assetUri;
        this.setState({parame:uriTemp});

    },
    componentWillReceiveProps:function(nextProps)
    {
        let anotherUriTemp = nextProps.params.assetUri;
        this.setState({parame:anotherUriTemp});
    },
    render:function()
    {
        console.log("Hi fullStory");
        return <div>FullStory, {this.state.parame}</div>
    }

});
export default FullStory;
