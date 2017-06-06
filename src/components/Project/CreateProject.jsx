import React, {Component} from "react";

import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";

const style = {
    paper: {
        float: 'left',
        margin: '10px',
        width: '99%',
        textAlign: 'center',
    },
};

class SelectType extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <SelectField
                    name="projectType"
                    floatingLabelText="Тип"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={0} primaryText="Проект" />
                    <MenuItem value={1} primaryText="Стартап" />
                </SelectField>
                <br />
            </div>
        );
    }
}

class SelectNeed extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <SelectField
                    name="projectNeed"
                    floatingLabelText="Потрібен"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={0} primaryText="Front-end інженер" />
                    <MenuItem value={1} primaryText="Back-end інженер" />
                    <MenuItem value={2} primaryText="Full-stack інженер" />
                </SelectField>
                <br />
            </div>
        );
    }
}

class SelectStep extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <SelectField
                    name="projectStep"
                    floatingLabelText="Находиться на стадії"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={0} primaryText="Ідея" />
                    <MenuItem value={1} primaryText="Задокументована ідея" />
                    <MenuItem value={2} primaryText="Проектування" />
                    <MenuItem value={3} primaryText="Розробка" />
                    <MenuItem value={4} primaryText="Тестування" />
                    <MenuItem value={4} primaryText="Пошук інвесторів" />
                    <MenuItem value={4} primaryText="Пошук команди" />
                </SelectField>
                <br />
            </div>
        );
    }
}

class CreateProject extends Component{
    render(){
        return(
            <div>
                <Paper zDepth={3} style={style.paper}>
                    <Subheader style={{fontSize:'24px'}}>Створення нового проекту</Subheader>
                    <form>
                        <TextField
                            name="projectName"
                            floatingLabelText="Назва проекту"
                        />
                        <br/>
                        <TextField
                            style={{width:'700px'}}
                            name="projectDescription"
                            floatingLabelText="Опис"
                            multiLine
                            hintStyle={{color:"gray"}}
                            rows={5}
                            rowsMax={10}
                        />
                        <br/>
                        <TextField
                            name="projectWebSite"
                            floatingLabelText="Веб-сайт"
                        />
                        <SelectNeed/>
                        <SelectType/>
                        <SelectStep/>
                        <TextField
                            style={{width:'700px'}}
                            name="projectRoleAuthor"
                            floatingLabelText="Роль творця проекту"
                            multiLine
                            hintStyle={{color:"gray"}}
                            rows={3}
                            rowsMax={5}
                        />
                        <RaisedButton
                            label="Створити проект"
                            primary={true}
                            fullWidth={true}
                        />
                    </form>
                </Paper>
            </div>
        );
    }
}

export default CreateProject;