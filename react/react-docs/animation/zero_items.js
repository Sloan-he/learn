/**
 * Created by hesy on 2016/9/26.
 */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({
  propTypes:{
    imageSrc:React.PropTypes.string.isRequired
  },
  render:function(){
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

ReactDOM.render(<ImageCarousel imageSrc="http://h.hiphotos.baidu.com/image/h%3D200/sign=fc55a740f303918fc8d13aca613c264b/9213b07eca80653893a554b393dda144ac3482c7.jpg" />,document.getElementById('container'));


