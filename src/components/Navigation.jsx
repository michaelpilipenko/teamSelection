import React, {Component} from "react";
import {Link} from "react-router-dom";
import DialogSignIn from "./DialogSignIn";

import logo from "../img/logo.svg";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

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
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <Link  to="/profile/userinfo"><MenuItem primaryText="Профiль" /></Link>
        <Link className='link' to='/help'><MenuItem primaryText="Допомога" /></Link>
        <MenuItem primaryText="Вихiд" onTouchTap={props.onHandleClick}/>
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
        title: 'Проекти',
        link: '/projects'
    },
    {
        title: 'Допомога',
        link: '/help'
    },
    {
        title: 'Про нас',
        link: '/about'
    }
];

class Navigation extends Component {
    state = {
        logged: true,
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

    handleLoggedOf = () => {
        this.setState({logged: false});
    };

    menuItem = item => {
        return (
            <div className="blockMenu">
                <ul className="blockMenu_ul">
                    {item.map((item, key) => {
                    return (
                        <li className="menuItem" key={key}>
                            <Link className="link" to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
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
                    iconElementRight={this.state.logged ? <Logged onHandleClick={this.handleLoggedOf}/> : <Login onTouchTap={this.handleOpenDialog} />}
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
