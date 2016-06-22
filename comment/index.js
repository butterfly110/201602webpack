import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {CommentBox} from './components';

var data = [
    {author:'张三',date:'10分钟前',msg:'今天天气真好啊'},
    {author:'李四',date:'5分钟前',msg:'是啊，好大的雨呀'}
]

ReactDOM.render(
    <CommentBox data={data}/>,
    document.querySelector('#app')
);