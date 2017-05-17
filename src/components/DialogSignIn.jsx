import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class DialogSignIn extends Component {
    handleClose = () => {
        const { onClose } = this.props;
        if(onClose){
            onClose();
        }
    };


    render() {
        const { isOpen} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
            />,
        ];

        return (
                <Dialog
                    actions={actions}
                    modal={false}
                    open={isOpen}
                    onRequestClose={this.handleClose}
                    contentStyle={{maxWidth: '30%', textAlign: 'center'}}
                >
                    <form className="regForm">
                        <h5>Введiть данi для авторизацiї</h5>
                        <TextField
                            hintText="you@example@org"
                            floatingLabelText="E-mail"
                            type="email"

                        />
                        <Divider />
                        <TextField
                            hintText="******"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </form>
                </Dialog>
        );
    }
}
export default DialogSignIn;