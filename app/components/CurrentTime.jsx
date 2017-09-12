var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            hours: "",
            minutes: ""
        }
    },
    formatNum: function (number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    },
    componentWillMount: function () {
        this.timer = setInterval(() => {
            var d = new Date();
            var t = d.getTime();
            var hour = this.formatNum(d.getHours()); 
            var minute = this.formatNum(d.getMinutes());
            console.log(hour);
            this.setState({
                hours: hour,
                minutes: minute
            });
        }, 1000);
    },
    render: function () {
        var {hours, minutes} = this.state;
        return (
            <div className="time-box">
                <h1 className="time-title">Current Time</h1>
                <span className="time-text">
                    {hours}:{minutes}
                </span>
            </div>
        )
    }
});

module.exports = Timer;