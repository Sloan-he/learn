/**
 * Created by Administrator on 2016/10/25 0025.
 */

var str3 = 'Benjamin Franklin is on the 100 bill';
var str4 = 'it’s is worth about €90';
console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'))