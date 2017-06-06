import React, {Component} from "react";


import TextField from "material-ui/TextField";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const style = {
    paper: {
        margin: "10px 30px 30px 30px",
        padding: 10
  },
    regForm: {
      margin: '0 auto'
    },
    checkBox: {
        display: 'flex'
    }
};

const RadioButtonSimple = () => (
    <div className="radioButtonSex">
        <h5>Стать</h5>
        <RadioButtonGroup name="sex" defaultSelected="male">
            <RadioButton
                value="female"
                label="Жiнка"
            />
            <RadioButton
                value="male"
                label="Чоловiк"
            />
        </RadioButtonGroup>
    </div>
);

const CheckboxSimple = () => (
    <div>
        <h5>Вкажiть мови програмування якими ви володiєте</h5>
        <div className="checkBoxBlock" style={style.checkBox}>
            <div>
                <Checkbox
                    name="csharp"
                    className="checkBoxLang"
                    label="С#"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="ruby"
                    className="checkBoxLang"
                    label="Ruby"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="java"
                    className="checkBoxLang"
                    label="Java"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="python"
                    className="checkBoxLang"
                    label="Python"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="php"
                    className="checkBoxLang"
                    label="PHP"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="javaScript"
                    className="checkBoxLang"
                    label="JavaScript"
                    labelPosition="left"
                />
            </div>
            <div>
                <Checkbox
                    name="swift"
                    className="checkBoxLang"
                    label="Swift"
                    labelPosition="left"
                />
            </div>
        </div>
    </div>
);

class SelectFieldSimple extends Component {
    state = {
     value: 0,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
    return (
        <div>
            <SelectField
                floatingLabelText="Опит роботи"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <MenuItem value={0} primaryText="Вiдсутнiй" />
                <MenuItem value={1} primaryText="менше 1го року" />
                <MenuItem value={2} primaryText="1 рiк" />
                <MenuItem value={3} primaryText="2 роки" />
                <MenuItem value={4} primaryText="3 роки" />
                <MenuItem value={5} primaryText="4 роки" />
                <MenuItem value={6} primaryText="5 рокiв" />
                <MenuItem value={7} primaryText="бiльше 5 рокiв" />
            </SelectField>
            <br />

        </div>
        );
    }
}

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
                <div className="regBlock" style={{display: 'flex'}}>
                    <form className="regForm" style={style.regForm}>
                        <Paper style={style.paper} zDepth={3}>
                            <h4 style={{textAlign: 'center'}}>Введiть будь-ласка свої данi</h4>
                            <Divider />
                            <TextField
                                name="userName"
                                hintText="Михайло Грушевський"
                                floatingLabelText="I`мя"
                                type="text"
                            />
                            <br/>
                            <TextField
                                name="userEmail"
                                hintText="you@example@org"
                                floatingLabelText="E-mail"
                                type="email"
                            />
                            <Divider/>
                            <TextField
                                name="userPassword"
                                hintText="******"
                                floatingLabelText="Пароль"
                                type="password"
                            />
                            <br/>
                            <TextField
                                hintText="******"
                                floatingLabelText="Повторiть пароль"
                                type="password"
                            />
                            <br/>
                            <TextField
                                name="userCountry"
                                hintText="Україна"
                                floatingLabelText="Країна проживання"
                            />
                            <br/>
                            <TextField
                                name="userCity"
                                hintText="Київ"
                                floatingLabelText="Місто проживання"
                            />
                            <br/>
                            <RadioButtonSimple />
                            <CheckboxSimple />
                            <br/>
                            <SelectFieldSimple />
                            <DatePicker
                                hintText="Дата народження"
                                container="inline"
                                mode="landscape"
                            />
                            <Divider/>
                            <RaisedButton
                                label="Регiстрацiя"
                                primary={true}
                                fullWidth={true}
                            />
                        </Paper>
                    </form>
                </div>
        );
    }
}

export default RegistrationForm;
