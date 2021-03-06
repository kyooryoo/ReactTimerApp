var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');
var CurrentTime = require('CurrentTime');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countDown" component={CountDown} />
            <Route path="currentTime" component={CurrentTime} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);