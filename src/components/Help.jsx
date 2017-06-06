import React, {Component} from "react";

import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class Help extends Component {
    render(){
        return(
          <div className="helpBlock">
            <Paper zDepth={3} style={{margin:5, padding: 15}}>
                <h4 style={{textAlign:'center'}}>Якщо у вас є якiсь запитання, будь-ласка напишiть нам</h4>
                <form action="false">
                    <TextField
                        style={{width:'700px'}}
                        name="username"
                        hintText="Михайло Грушевський"
                        floatingLabelText="Вкажiть iм`я"
                    />
                    <br/>
                    <TextField
                        style={{width:'700px'}}
                        name="helpEmail"
                        hintText="you@example@org"
                        floatingLabelText="E-mail"
                    />
                    <br/>
                    <TextField
                        style={{width:'700px'}}
                        name="helpText"
                        floatingLabelText="Опишiть вашу проблему"
                        hintText="Привiт, в мене виникла проблема, ..."
                        multiLine
                        hintStyle={{color:"gray"}}
                        rows={5}
                        rowsMax={10}
                    />
                    <br/>
                    <FlatButton
                        label="Вiдправити"
                        fullWidth
                    />
                </form>
            </Paper>
          </div>
        );
    }
}

export default Help;
