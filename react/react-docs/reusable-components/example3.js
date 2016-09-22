//ES6 Classes
class HelloMessage extends React.Component{
    render(){
        return <div>Hello {this.props.name}</div>;
    }
}
ReactDOM.render(<HelloMessage name='hesy' />,document.getElementById('example'));


class Counter extends React.Component{
    //自动执行创建State
    constructor(props){
        super(props);
        this.state = {count:props.initialCount};
        this.tick = this.tick.bind(this);
    }
    tick(){
        this.setState({count:this.state.count + 1});
    }
    render(){
        return (
            <div onClick={this.tick}>
                Click:{this.state.count}
            </div>
        );
    }
};

Counter.propTypes = {initialCount:React.PropTypes.number};
Counter.defaultProps = {initialCount:0};

ReactDOM.render(<Counter/>,document.getElementById('example2'));

//无状态函数
function HelloMessages(props){
    return <div>Hello {props.name},{props.age}</div>;
}
HelloMessages.defaultProps = {age:22};
ReactDOM.render(<HelloMessages name="Sebastian" />, document.getElementById('example3'));