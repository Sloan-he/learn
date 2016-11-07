/**
 * Created by hesy on 2016/9/19.
 */

//创建表格分类行组件
var ProductCategoryRow = React.createClass({
    render:function(){
        return <tr><th colSpan="2">{this.props.category}</th></tr>
    }
});


//创建每行显示数据组件
var ProductRow = React.createClass({
    render:function(){
        //判断库存
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color:'red'}}>{this.props.product.name}</span>;
        return <tr><td>{name}</td><td>{this.props.product.price}</td></tr>
    }
});


//创建表格组件
var ProductTable = React.createClass({
    render:function(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product){
            //判断文本框的值和是否勾选了仅显示有库存并且该货品是否有库存
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return;
            }
            //判断分类
            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            //修改当前分类
            lastCategory = product.category;
        }.bind(this));
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

//创建搜索组件
var SearchBar = React.createClass({
    //表单变化改变时修改state
    handleChange:function(){
        this.props.onUserInput(
            'Football',
            this.refs.inStockOnlyInput.checked
        );
    },
    render:function(){
        return (
            <form action="">
                <p onClick={this.handleChange}>11111</p>
                <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
                <p><input type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput" onChange={this.handleChange} />{' '}Only show products in stock</p>
            </form>
        );
    }
});

//创建整体组件
var FilterableProductTable = React.createClass({
    getInitialState:function(){
        return {
            filterText:'',
            inStockOnly:false
        }
    },
    //表单变化时事件
    handleUserInput:function(filterText,inStockOnly){
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },
    render:function(){
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserInput={this.handleUserInput}  />
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
});

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
   <FilterableProductTable products={PRODUCTS}/>,
   document.getElementById('container')
);