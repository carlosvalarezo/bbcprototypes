/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require ( 'react' );
var Link = require('react-router' ).Link;
import MediaContainer from './MediaContainer';
import SharingButton from './SharingButton';
import FullStory from './FullStory';



var Story = React.createClass ( {
    render: function () {

        var story = this.props.story.map((item) => {
            /*console.log("id story = " + this.props.id)*/
            /*console.log("assetUri = " + item.assetUri);*/
            //TODO:the string www.bbc.co.uk should be a parameter from container as it might change in the future
            //TODO: It can also come directly from the json file
            let completeURL = "http://www.bbc.co.uk" + item.assetUri;
            return(
                <div>
                    <article>
                        <Link to={"fullStory/"+"88"}>
                            <div>
                                <div className={this.props.id + "-title"}>
                                    {item.headline} {item.title}
                                </div>
                                <div>
                                    {item.summary}
                                </div>
                                <MediaContainer id={this.props.id} media={item.media} />

                            </div>
                        </Link>
                        <SharingButton shareLink={completeURL} />
                    </article>
                </div>

            );
        })
        return(<div> <div> {story} <div>{this.props.children}</div> </div> </div>);
    }
} );
export default Story;