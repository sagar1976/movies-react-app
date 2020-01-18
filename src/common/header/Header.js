import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer =  function(props) {
    return(
        <Typography component="div" style={{padding: 0, textAlign:"center"}} >
            {props.children}   
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            userName: "",
            usernameRequired: "dispNone",
            password: "",
            passwordRequired: "dispNone",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contactno: "",
            contactnoRequired: "dispNone",
            passwordregister: "",
            passwordregisterRequired: "dispNone"
        }

    }

    openModalHandler =() => {
        this.setState({
            modalIsOpen: true,
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            contactnoRequired: "dispNone",
            passwordregisterRequired: "dispNone",
            value: 0,
            userName:""
        });
    }

    closeModalHandler =() => {
        this.setState({modalIsOpen: false});
    }

    tabChangeHandler =(event, value) => {
        this.setState({value});
        this.setState({usernameRequired: "dispBlock"});
        this.setState({passwordRequired: "dispBlock"});
        this.setState({firstnameRequired: "dispBlock"});
        this.setState({lastnameRequired: "dispBlock"});
        this.setState({emailRequired: "dispBlock"});
        this.setState({contactnoRequired: "dispBlock"});
        this.setState({passwordregisterRequired: "dispBlock"})
    }

    onClickHandler =() => {
        this.state.userName === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
        
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"});
        this.state.contactno === "" ? this.setState({contactnoRequired: "dispBlock"}) : this.setState({contactnoRequired: "dispNone"});
        this.state.passwordregister === "" ? this.setState({passwordregisterRequired: "dispBlock"}) : this.setState({passwordregisterRequired: "dispNone"})
    }

    userFieldChangeHandler = (e) => {
        this.setState({userName: e.target.value});
    }

    passwordFieldChangeHandler = (e) => {
        this.setState({password: e.target.value});
    }

    firstnameFieldChangeHandler = (e) => {
        this.setState({firstname: e.target.value});
    }

    
    lastnameFieldChangeHandler = (e) => {
        this.setState({lastname: e.target.value});
    }

    emailFieldChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    contactnoFieldChangeHandler = (e) => {
        this.setState({contactno: e.target.value});
    }

    passwordregisterFieldChangeHandler = (e) => {
        this.setState({passwordregister: e.target.value});
    }



    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                    <Modal
                     ariaAppHide={false}
                     isOpen={this.state.modalIsOpen}
                     contentLabel="Login"
                     onRequestClose={this.closeModalHandler}
                     style={customStyles}
                    >
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />           
                        <Tab label="Register" />
                    </Tabs>

                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" onChange={this.userFieldChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.passwordFieldChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <Button variant="contained" color="primary" onClick={this.onClickHandler}>LOGIN</Button>
                    </TabContainer>
                    }     

                    {this.state.value === 1 && 
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" onChange={this.firstnameFieldChangeHandler}/>
                            <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" onChange={this.lastnameFieldChangeHandler}/>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" onChange={this.emailFieldChangeHandler}/>
                            <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="passwordregister">Password</InputLabel>
                            <Input id="passwordregister" type="password" onChange={this.passwordregisterFieldChangeHandler}/>
                            <FormHelperText className={this.state.passwordregisterRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="contactno">Contact No</InputLabel>
                            <Input id="contactno" type="text" onChange={this.contactnoFieldChangeHandler}/>
                            <FormHelperText className={this.state.contactnoRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                    }
                    </Modal>
                </header>
            </div>
        )
    }
}

export default Header;