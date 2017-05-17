import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DialogSignIn from './DialogSignIn'

import logo from '../img/logo.svg'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {
    render() {
        return (
            <div style={{marginTop: "5px"}} className="logButton">
                <FlatButton
                    style={{color: "white"}}
                    {...this.props}
                    label="Вхiд"
                />
                <Link to="/registration">
                    <FlatButton
                        style={{color: "#2980b9"}}
                        label="Регiстрацiя"
                    />
                </Link>
            </div>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Профiль" />
        <MenuItem primaryText="Допомога" />
        <MenuItem primaryText="Вихiд" />
    </IconMenu>
);

const Brand = () => (
    <div className="brandBlock">
        <img src={logo} alt="brand" className="App-logo"/>
        <div className="brand">TeamSelector</div>
    </div>
);

const menu = [
    {
        title: 'Головна',
        link: '/'
    },
    {
        title: 'Люди',
        link: '/people'
    },
    {
        title: 'Команди',
        link: '/teams'
    },
    {
        title: 'Допомога',
        link: '/help'
    },
    {
        title: 'Контакти',
        link: '/about'
    }
];
class Navigation extends Component {
    state = {
        logged: false,
        isOpen: false
    };

    handleClose = () => {
      this.setState({
        isOpen: false
      });
    };

    handleOpenDialog = () => {
      this.setState({
          isOpen: true
      })
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    menuItem = item => {
        return (
            <div className="blockMenu">
                <ul className="blockMenu_ul">
                    {item.map((item, key) => {
                    return (
                        <li className="menuItem" key={key}><Link className="link" to={item.link}>{item.title}</Link></li>
                    )
                })}
                <li className="menuItem">
                    <Toggle
                        label="Logged"
                        defaultToggled={false}
                        onToggle={this.handleChange}
                        labelPosition="left"
                        style={{margin: 20, width: 100}}
                    />
                </li>
                </ul>
            </div>
        )
    };
    render() {
        return (
            <div>
                <AppBar
                    className="appBar"
                    iconElementLeft={<Brand/>}
                    title={this.menuItem(menu)}
                    iconElementRight={this.state.logged ? <Logged /> : <Login onTouchTap={this.handleOpenDialog} />}
                    iconStyleLeft={{marginTop: 0, marginLeft: 0, marginRight: 0}}
                />
                <DialogSignIn
                    isOpen={this.state.isOpen}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

export default Navigation;