import React, {Component} from "react";
import PropTypes from "prop-types";
import DefaultImg from "../../img/defaultImg.jpg";

import Avatar from "material-ui/Avatar";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import FlatButton from "material-ui/FlatButton";

const style = {
    paper: {
        float: 'left',
        margin: '5px',
        textAlign: 'center',
        width: '99%',
        padding: '5px',
    },
    toolbar: {
        marginTop: '5px',
        height: '120px',
    },
    colorCity:{
        color: '#16a085',
    },
};


class PeopleInfoBlock extends Component {
    render(){
        return(
            <Toolbar style={style.toolbar}>
                <ToolbarGroup firstChild={true} style={{width: '360px'}}>
                    <Avatar src={this.props.img} size={100}/><br/>
                    <div style={{marginLeft: '15px'}}>
                        {this.props.name}
                        <br/>
                        <span style={style.colorCity}>{this.props.country}, {this.props.city}</span>
                    </div>
                </ToolbarGroup>
                <ToolbarGroup style={{marginLeft: '20px'}}>
                    <div style={{fontSize:'12px', lineHeight: '1.1', textAlign: 'left'}}>
                        <div style={{overflow:'hidden',height:'27px',width: '800px'}}>
                            {this.props.description}
                        </div>
                        <ToolbarTitle text={this.props.skill}/>
                    </div>
                </ToolbarGroup>
                <div>
                    <FlatButton style={{marginTop:'20px'}} disabled={!this.props.user} primary label="Запросити до проекту"/>
                    <FlatButton style={{marginTop:'10px'}} disabled={!this.props.user} label="Написати повідомлення"/>
                </div>
            </Toolbar>
        );
    }
}

PeopleInfoBlock.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    user: PropTypes.bool.isRequired,
};

PeopleInfoBlock.defaultProps = {
  img: DefaultImg
};

export default PeopleInfoBlock;