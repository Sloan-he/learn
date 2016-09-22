function FancyCheckbox(props){
    var {checked,title,...other} = props;
    //使用同一个属性checked
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    //other包含了{onclick:console.log} 但checked属性除外
    return (
        <label>
            <input {...other} checked={checked} className={fancyClass}  type="checkbox" />{fancyTitle}
        </label>
    );

    //var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
    // 反模式：`checked` 会被传到里面的组件里
    //return (
    //    <div {...props} className={fancyClass} />
    //);
}

ReactDOM.render(<FancyCheckbox title={'less'} checked={true} onClick={console.log.bind(console)} />,document.getElementById('container'));