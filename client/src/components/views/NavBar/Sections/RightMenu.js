/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{backgroundColor:'grey' }}>
        <Menu.Item key="mail">
          <a href="/login" style={{color:'white'}}>Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register" style={{color:'white'}}>Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode} style={{backgroundColor:'grey' }}>
        <Menu.Item key="logout">
          <a onClick={logoutHandler} style={{color:'white'}}>Logout</a>
        </Menu.Item>
        <Menu.Item key="myRecorded">
          <a href="/myRecorded" style={{color:'white'}}>myRecorded</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

