/**
 * Created by hesy on 2016/9/21.
 */

// var propsType = React.createClass({
//     propTypes:{
//         //声明prop为指定的js类型.默认情况下,这么prop都是可以不传的.
//         optarray:React.PropTypes.array,
//         optbool:React.PropTypes.bool,
//         optnumber:React.PropTypes.number,
//         optfun:React.PropTypes.fun,
//         optobj:React.PropTypes.object,
//         optstring:React.PropTypes.string,
//         optsymbol:React.PropTypes.symbol,


//         //所有可以被渲染的对象：数字，字符串，DOM元素或包含这些类型的数组(or fragment) 。
//         optnode:React.PropTypes.node,

//         //React元素
//         optelement:React.PropTypes.element,

//         //同样可以判断一个prop是一个类的实例,用JS的instanceOf(Message)
//         optmessage:React.PropTypes.instanceOf(Message),

//         //可以用enum的方式,确保你的prop被限定为指定值.
//         optenum:React.PropTypes.oneOf(['new','Photos']),

//         //指定的多个对象类型中的一个
//         optunion:React.PropTypes.oneOfType([
//             React.PropTypes.string,
//             React.PropTypes.number,
//             React.PropTypes.instanceOf(Message)
//         ]),

//         //指定类型组成的数组
//         optarrayof:React.PropTypes.arrayOf(React.PropTypes.number),

//         //指定类型的属性构成的对象
//         optObjOf:React.PropTypes.objectOf(React.PropTypes.number),

//         //特定形状参数的对象
//         optObjWidthShape:React.PropTypes.shape({
//             color: React.PropTypes.string,
//             fontSize: React.PropTypes.number
//         }),

//         //在任意后面加上isRequired来确保如果prop没有提供就会显示一个警告.
//         requiredFunc:React.PropTypes.func.isRequired,

//         //不可空的任意类型
//         requiredAny:React.PropTypes.any.isRequired,

//         //自定义一个验证器.如果验证失败则需要返回一个错误对象,
//         // 不要直接使用 `console.warn` 或抛异常，
//         // 因为这在 `oneOfType` 里不起作用。

//         customProp:function(props,propName,componentName){
//             if(!/matchme/.test(props[propName])){
//                 return new Error('Validation failed!');
//             }
//         }
//     },
//     //设置默认props属性
//     getDefaultProps:function(){
//         return {
//             value:'detault value'
//         }
//     }
// });


var CheckLink = React.createClass({
    getDefaultProps:function(){
        return {
            value:'detault value',
            name:'detault name'
        };
    },
    render:function(){
        return <a {...this.props}>{'√ '}{this.props.children}</a>
    }
});

ReactDOM.render(
  <CheckLink href="/checked.html">
    Click here!
  </CheckLink>,
  document.getElementById('example')
);