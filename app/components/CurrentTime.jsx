var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            hours: 0,
            minutes: 0
        }
    },
    componentWillMount: function () {
        this.timer = setInterval(() => {
            var d = new Date();
            var t = d.getTime();
            var hour = d.getHours(); 
            var minute = d.getMinutes();
            console.log(hour);
            this.setState({
                hours: hour,
                minutes: minute
            });
        }, 10000);
    },
    render: function () {
        var {hours, minutes} = this.state;
        return (
            <div className="clock">
                <h1 className="page-title">Current Time</h1>
                <span className="clock-text">
                    {hours}:{minutes}
                </span>
            </div>
        )
    }
});

module.exports = Timer;