var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountDown = require('CountDown');

describe('CountDown', () => {
    it('should exist', () => {
        expect(CountDown).toExist();
    });

    describe('hendleSetCountdown', () => {
        it('should set state to started and countdown', (done) =>{
            var countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountdown(10);
            
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not countdown to negative', (done) =>{
            var countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});