var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMsg = require('GreeterMsg');

var Greeter = React.createClass({
    
    getDefaultProps : function(){
        return{
            name : 'React',
            msg : "Default Message"
        };
    },

    getInitialState : function(){
        return {
            name : this.props.name,
            msg : this.props.msg
        };
    },

    handleNewData : function(updates){
        this.setState(updates);
    },

    render : function(){
        var name = this.state.name;
        var msg = this.state.msg;
        return(
            <div>
                <GreeterMsg name = {name}   msg = {msg}/>
                <GreeterForm onNewData = {this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;
