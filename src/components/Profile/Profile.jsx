import React, {Component} from "react";

import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Img from "../../img/2.jpg";

const style = {
  paper: {
    float: 'left',
    margin: '16px 32px 16px 0',
    width: '65%',
    textAlign: 'center',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

class Profile extends Component {
  render(){
    return(
      <div>
        <Paper style={style.paper}>
          <Avatar src={Img} size='300'/>
          <label for="fileInput">
            <span>Змінити аватар:</span><br/>
            <input id='fileInput' type="file"/>
          </label><br />
          <TextField
            defaultValue="Михайло"
            floatingLabelText="Ваше і'мя"
          /><br />
          <TextField
            defaultValue="Грушевський"
            floatingLabelText="Ваше прізвище"
          /><br />
          <TextField
            defaultValue="1995"
            floatingLabelText="Рік народження"
          /><br />
          <TextField
            defaultValue="Україна"
            floatingLabelText="Країна проживання"
          /><br />
          <TextField
            defaultValue="Київ"
            floatingLabelText="Місто проживання"
          /><br />
        <RaisedButton label="Зберегти інформацію" primary fullWidth/>
      </Paper>
      </div>
    )
  }
}

export default Profile;
