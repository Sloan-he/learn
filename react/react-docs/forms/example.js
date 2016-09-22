var From = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <div>
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            /><br/>
            {/*一个没有value属性的<input>是一个不受控组件*/}
            <input type="text" />
            </div>
        );
    }
});

ReactDOM.render(<From />,document.getElementById('container'));