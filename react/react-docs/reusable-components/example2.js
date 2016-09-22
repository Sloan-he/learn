var SetIntervalMixin = {
    componentWillMount:function(){
        console.log('第一个WillMount');
        this.intervals = [];
    },
    setInterval:function(){
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnmount:function(){
        this.intervals.forEach(clearInterval);
    }
};

var SetIntervalMixinTwo = {
    componentWillMount:function(){
        console.log('第二个WillMount');
    }
}

var TickTock = React.createClass({
    mixins:[SetIntervalMixinTwo,SetIntervalMixin],
    getInitialState:function(){
        return {seconds:0};
    },
    componentWillMount:function(){
        console.log('第三个WillMount');
    },
    componentDidMount:function(){
        this.setInterval(this.tick,1000);
    },
    tick:function(){
        this.setState({seconds:this.state.seconds + 1});
    },
    render:function(){
        return <p>React has been running for {this.state.seconds} seconds.</p>
    }
});

ReactDOM.render(<TickTock />,document.getElementById('example'));