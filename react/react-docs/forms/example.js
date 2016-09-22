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
            <input type="text" /><br/>
            {/*设置一个默认值*/}
            <input type="text" defaultValue="hesy" /><br/>
            <select value="B">
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
            </select><br/>
            {/* 多选*/}
            <select multiple={true} value={['B','C']}>
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
            </select>
            </div>
        );
    }
});

ReactDOM.render(<From />,document.getElementById('container'));