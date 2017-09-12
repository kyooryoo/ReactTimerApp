var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer</li>
                    <li>
                        <IndexLink 
                            to="/" 
                            activeClassName="active-link" 
                            activeStyle={{fontWeight: 'bold'}}
                        >
                            Timer
                        </IndexLink>
                    </li>
                    <li>
                        <Link 
                            to="/countDown" 
                            activeClassName="active-link" 
                            activeStyle={{fontWeight: 'bold'}}
                        >
                            CountDown
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/currentTime" 
                            activeClassName="active-link" 
                            activeStyle={{fontWeight: 'bold'}}
                        >
                            CurrentTime
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/kyooryoo" target="_blank">Ling</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;