var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit : function(e){
        e.preventDefault();

        var updates = {};

        var msg = this.refs.msg.value;
        var name = this.refs.name.value;
        


        if (name.length > 0 ) {
            this.refs.name.value = '';
            updates.name = name;
             
        }

        if (msg.length > 0) {
            this.refs.msg.value = '';
            updates.msg = msg;
        }

        this.props.onNewData(updates);

    }
    ,
    render : function(){
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <input type = "text" placeholder = "Enter a name.. " ref = "name" />
                    <br/>
                     <textarea placeholder = "Enter a msg.. " ref = "msg"> </textarea>
                    <button>Set name</button>
                </form>
            </div>
        );
    }
});

module.exports = GreeterForm;