import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Checkbox, DatePicker, RadioButtonGroup, TextField} from "redux-form-material-ui";
import RadioButton from "material-ui/RadioButton";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
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
        <Field name="gender" defaultSelected="male" component={RadioButtonGroup}>
            <RadioButton value="male" label="Чоловiк"/>
            <RadioButton value="female" label="Жiнка"/>
        </Field>
    </div>
);

const CheckboxSimple = () => (
    <div>
        <h5>Вкажiть мови програмування якими ви володiєте</h5>
        <div className="checkBoxBlock" style={style.checkBox}>
            <div>
                <Field
                    name="c#"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="С#"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="ruby"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="Ruby"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="java"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="Java"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="python"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="Python"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="php"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="PHP"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="javascript"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="JavaScript"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="swift"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="Swift"
                    labelPosition="left"
                />
            </div>
            <div>
                <Field
                    name="c++"
                    component={Checkbox}
                    className="checkBoxLang"
                    label="С++"
                    labelPosition="left"
                />
            </div>
        </div>
    </div>
);

class SelectFieldSimple extends Component {
    render() {
        return (
            <div>
                <Field name="experience" floatingLabelText="Опит роботи">
                    <MenuItem value={0} primaryText="Вiдсутнiй" />
                    <MenuItem value={1} primaryText="менше 1го року" />
                    <MenuItem value={2} primaryText="1 рiк" />
                    <MenuItem value={3} primaryText="2 роки" />
                    <MenuItem value={4} primaryText="3 роки" />
                    <MenuItem value={5} primaryText="4 роки" />
                    <MenuItem value={6} primaryText="5 рокiв" />
                    <MenuItem value={7} primaryText="бiльше 5 рокiв" />
                </Field>
                <br />
            </div>
        );
    }
}

const required = value => (value === null ? 'Required' : undefined);
const email = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined);
const password = value => (
    value && value.length < 6
        ? 'В паролi повинно будти бiльше 6 символiв'
        : !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)
        ? 'Пароль повинен складатися тiльки з латинських лiтер i чисел'
        : undefined
);

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this._input.getRenderedComponent().getRenderedComponent().focus()
    }

    render(){
        return (
            <div className="regBlock" style={{display: 'flex'}}>
                <form className="regForm" style={style.regForm}>
                    <Paper style={style.paper} zDepth={3}>
                        <h4 style={{textAlign: 'center'}}>Введiть будь-ласка свої данi</h4>
                        <Divider />
                        <Field
                            name="name"
                            component={TextField}
                            validation={required}
                            hintText="Михайло Грушевський"
                            floatingLabelText="I`мя"
                            ref={c => this._input = c}
                            withRef
                        />
                        <br/>
                        <Field
                            name="email"
                            hintText="you@example@org"
                            floatingLabelText="E-mail"
                            type="email"
                            component={TextField}
                            validation={[required, email]}
                        />
                        <Divider/>
                        <Field
                            name="password"
                            component={TextField}
                            hintText="******"
                            floatingLabelText="Пароль"
                            type="password"
                            validation={[required, password]}
                        />
                        <br/>
                        <Field
                            name="tryPassword"
                            component={TextField}
                            hintText="******"
                            floatingLabelText="Повторiть пароль"
                            type="password"
                            validation={[required, password]}
                        />
                        <RadioButtonSimple />
                        <CheckboxSimple />
                        <br/>
                        <SelectFieldSimple />
                        <Field
                            name="dateBirthday"
                            component={DatePicker}
                            format={null}
                            validate={required}
                            hintText="Дата народження"
                            container="inline"
                            mode="landscape"
                        />
                        <Divider/>
                        <RaisedButton
                            label="Регiстрацiя"
                            primary={true}
                            fullWidth={true}
                            type="submit"
                        />
                    </Paper>
                </form>
            </div>
        );
    }
}

RegistrationForm = reduxForm({
    form: 'registration'
})(RegistrationForm);

export default RegistrationForm;