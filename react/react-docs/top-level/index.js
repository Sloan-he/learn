/**
 * Created by hesy on 2016/9/27.
 */

//var Elem = React.createElement('div',{key:111,'name':'hesy'},'11111');
//
//ReactDOM.render(Elem,document.getElementById('container'));

var Factory = React.createFactory('div');
var root = Factory({custom:'prop'},'11111111');

ReactDOM.render(root,document.getElementById('container'));