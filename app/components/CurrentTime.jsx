var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var CurrentTime = React.createClass({
    getInitialState: function () {
        return {
            hour: "",
            minute: "",
            month: "",
            date: "",
            day: ""
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
        var month = ["Jan","Feb","Mar","Apr","May","Jun",
            "Jul","Aug","Sep","Oct","Nov","Dec"];
        var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        this.timer = setInterval(() => {
            var raw = new Date();
            this.setState({
                hour: this.formatNum(raw.getHours()),
                minute: this.formatNum(raw.getMinutes()),
                month:month[raw.getMonth()],
                date:raw.getDate().toString(),
                day: day[raw.getDay()]
            });
        }, 1000);
    },
    render: function () {
        var {hour, minute, month, date, day} = this.state;
        return (
            <div className="time-container">
                <h1 className="time-title">Current Time</h1>
                <div className="time-box">
                    <span className="time-text">
                        {hour}:{minute}
                    </span>
                    <span className="date-text">
                        {month}-{date}-{day}
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = CurrentTime;