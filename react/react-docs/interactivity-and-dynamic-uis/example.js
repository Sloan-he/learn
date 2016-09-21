/**
 * Created by hesy on 2016/9/21.
 */
var LikeButton = React.createClass({
    getInitialState:function(){
        return {like:false};
    },
    handleClick:function(){
        this.setState({like:!this.state.like});
    },
    render:function(){
        var text = this.state.like ? 'like' : 'havent\' like';
        return (<p onClick={this.handleClick}>You {text}</p>);
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('container')
);