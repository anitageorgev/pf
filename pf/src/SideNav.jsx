import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import './Navbar.css';
import { likeAdd } from 'react-icons-kit/metrize/likeAdd';
import { iosSettings } from 'react-icons-kit/ionicons/iosSettings';       
import { happyOutline } from 'react-icons-kit/ionicons/happyOutline';
import { iosGlassesOutline  } from 'react-icons-kit/ionicons/iosGlassesOutline';  
import { iosPersonOutline } from 'react-icons-kit/ionicons/iosPersonOutline'; 
import { iosHelpOutline } from 'react-icons-kit/ionicons/iosHelpOutline'; 
import { socialUsdOutline } from 'react-icons-kit/ionicons/socialUsdOutline';  

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar' style={{background: '#2c3e50', color: '#FFF', width: 180}}> 
                <SideNav highlightColor='#FFF' highlightBgColor='#f5380b' defaultSelected=''>       
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={iosGlassesOutline }/></NavIcon>    
                        <NavText> Keep Looking </NavText>
                    </Nav>
                    <Nav id='matches'>
                        <NavIcon><SvgIcon size={20} icon={happyOutline}/></NavIcon>
                        <NavText> Matches </NavText>
                    </Nav>                   
                    <Nav id='preferences'>
                        <NavIcon><SvgIcon size={20} icon={iosSettings}/></NavIcon>
                        <NavText>   Preferences </NavText>
                    </Nav>
                     <Nav id='yourInfo'>
                        <NavIcon><SvgIcon size={20} icon={iosPersonOutline}/></NavIcon>
                        <NavText> Your Info </NavText>
                    </Nav>
                    <Nav id='payment'>
                        <NavIcon><SvgIcon size={20} icon={socialUsdOutline}/></NavIcon>
                        <NavText> Payment </NavText>
                    </Nav>
                    <Nav id='help'>
                        <NavIcon><SvgIcon size={20} icon={iosHelpOutline}/></NavIcon>
                        <NavText> Help </NavText>
                    </Nav>                    
                </SideNav>
            </div>
        )
    }
};