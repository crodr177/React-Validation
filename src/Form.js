import React, { Component } from 'react'
import validator from 'validator';

class Form extends Component {

  state = {
    name: '',
    email: '',
    user: '',
    psswrd: '',
    psswrdCon: '',
    url: '',
    nameError: "Name",
    emailError: "Email",
    userError: 'Username',
    psswrdError: "Password",
    psswrdConError: "Confirm Password",
    urlError: "Website",
    addClasslabelName: '',
    addClassinputName: "name",
    addClasslabelEmail: '',
    addClassinputEmail: "name",
    addClasslabelUser: '',
    addClassinputUser: "name",
    addClasslabelPsswrd: '',
    addClassinputPsswrd: "name",
    addClasslabelPsswrdCon: '',
    addClassinputPsswrdCon: "name",
    addClasslabelUrl: '',
    addClassinputUrl: "name",
    psswrdArr: [],
    psswrdConArr: [],
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    let valid = true

    const {name, email, user, psswrd, psswrdArr, psswrdCon, psswrdConArr, url} = this.state

    if(name == ''){
      valid = false
      this.setState({
        addClasslabelName: "validator",
        nameError: "Name - Cannot be blank",
        addClassinputName: "input-validator"
      })
    }
    else {
      this.setState({
        addClasslabelName: "",
        nameError: "Name",
        addClassinputName: "name",
      })
    }

    if(validator.isEmail(email) == false){
      valid = false
      this.setState({
        addClasslabelEmail: "validator",
        emailError: "Email - Enter a valid email",
        addClassinputEmail: "input-validator"
      })
    }
    else {
      this.setState({
        addClasslabelEmail: "",
        emailError: "Email",
        addClassinputEmail: "name",
      })
    }

    if(user == ''){
      valid = false
      this.setState({
        addClasslabelUser: "validator",
        userError: "Username - Cannot be blank",
        addClassinputUser: "input-validator"
      })
    }
    else {
      this.setState({
        addClasslabelUser: "",
        userError: "Username",
        addClassinputUser: "name",
      })
    }

    if(psswrd == ''){
      valid = false
      this.setState({
        addClasslabelPsswrd: "validator",
        psswrdError: "Password - Cannot be blank",
        addClassinputPsswrd: "input-validator"
      })
    }
    else {
      this.setState({
        addClasslabelPsswrd: "",
        psswrdError: "Password",
        addClassinputPsswrd: "name",
      })
      if(psswrdArr.length >= 1){
        psswrdArr.splice(0, 1, psswrd);
        console.log(psswrdArr);
      }
      psswrdArr.push(psswrd);
      console.log(psswrdArr);
    }

    if(psswrdCon == ''){
      valid = false
      this.setState({
        addClasslabelPsswrdCon: "validator",
        psswrdConError: "Confirm Password - Cannot be blank",
        addClassinputPsswrdCon: "input-validator"
      })
    }
    else {
      if(psswrdConArr.length >= 1){
        psswrdConArr.splice(0, 1, psswrdCon);
        console.log(psswrdArr);
      }
      psswrdConArr.push(psswrdCon);
      console.log(psswrdConArr);
      if(psswrdArr[0] == psswrdConArr[0]){
        this.setState({
          addClasslabelPsswrdCon: "",
          psswrdConError: "Confirm Password",
          addClassinputPsswrdCon: "name",
        })
      }
      else{
        this.setState({
          addClasslabelPsswrdCon: "validator",
          psswrdConError: "Confirm Password - Must match password",
          addClassinputPsswrdCon: "input-validator"
        })
      }
    }

    if(validator.isURL(url) == false){
      valid = false
      this.setState({
        addClasslabelUrl: "validator",
        urlError: "Website - Please enter a valid url",
        addClassinputUrl: "input-validator"
      })
    }
    else {
      this.setState({
        addClasslabelUrl: "",
        urlError: "Website",
        addClassinputUrl: "name",
      })
    }

    if (valid) {
      this.props.history.push('/submitted')
      //this allows you to go to a specific path with props.history
    }
  }
  render(){
    return(
      <form onSubmit={this.submitHandler} id="form-container">
        <h1>Profile Form - All fields required</h1>
        <label className={this.state.addClasslabelName}>{this.state.nameError}</label><input name="name" onChange={this.changeHandler} className={this.state.addClassinputName} type="text" value={this.state.name} placeholder="Name"/>
        <label className={this.state.addClasslabelEmail}>{this.state.emailError}</label><input name="email" onChange={this.changeHandler} className={this.state.addClassinputEmail} type="text" value={this.state.email} placeholder="Email"/>
        <label className={this.state.addClasslabelUser}>{this.state.userError}</label><input name="user" onChange={this.changeHandler} className={this.state.addClassinputUser} type="text" value={this.state.user} placeholder="Username"/>
        <label className={this.state.addClasslabelPsswrd}>{this.state.psswrdError}</label><input name="psswrd" onChange={this.changeHandler} className={this.state.addClassinputPsswrd} type="password" value={this.state.psswrd} placeholder="Password"/>
        <label className={this.state.addClasslabelPsswrdCon}>{this.state.psswrdConError}</label><input name="psswrdCon" onChange={this.changeHandler} className={this.state.addClassinputPsswrdCon} type="password" value={this.state.psswrdCon} placeholder="Confirm Password - Cannot be blank"/>
        <label className={this.state.addClasslabelUrl}>{this.state.urlError}</label><input name="url" onChange={this.changeHandler} className={this.state.addClassinputUrl} type="text" value={this.state.url} placeholder="Website - Please enter a valid url"/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form 