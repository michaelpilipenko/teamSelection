import React, {Component} from "react";
import {Link} from "react-router-dom";

import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Subheader from "material-ui/Subheader";
import People from "material-ui/svg-icons/social/group";
import Divider from "material-ui/Divider";
import Collections from "material-ui/svg-icons/image/collections";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import RemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import MessageIcon from "material-ui/svg-icons/content/mail";
import ProgectList from "material-ui/svg-icons/action/receipt";

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
};

class ProfileMenu extends Component {
  render(){
    return(
      <div>
        <Paper style={style.paper}>
          <Menu>
            <Subheader inset>ХОЧУ ЗНАЙТИ:</Subheader>
            <Link to="/people"><MenuItem primaryText="Учасникiв" leftIcon={<People />}/></Link>
            <Link to="/projects"><MenuItem primaryText="Проект" leftIcon={<Collections />}/></Link>
            <Divider />
            <MenuItem
              primaryText="Моя сторiнка"
              leftIcon={<RemoveRedEye />}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Особиста інформація" />,
                <MenuItem primaryText="Профісіональні дані" />,
                <MenuItem primaryText="Регістраційні дані" />,
              ]}
            />
            <MenuItem
              primaryText="Повiдомлення"
              leftIcon={<MessageIcon />}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Написати повідомлення" />,
                <MenuItem primaryText="Особиста переписка" />,
              ]}
            />
            <MenuItem
              primaryText="Мої проекти"
              leftIcon={<ProgectList />}
              rightIcon={<ArrowDropRight />}
            />
          </Menu>
        </Paper>
      </div>
    )
  }
};

export default ProfileMenu;
