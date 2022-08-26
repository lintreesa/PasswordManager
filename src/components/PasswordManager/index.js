import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    websiteName: '',
    userName: '',
    password: '',
    passwordCount: 0,
  }

  onChangesiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onIncrementCount = () => {
    this.setState(prevState => ({passwordCount: prevState.passwordCount + 1}))
  }

  onChangeuserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toggleIsLiked = () => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.map(eachItem => ({
        ...eachItem,
        showPass: !eachItem.showPass,
      })),
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const newItem = {
      id: v4(),
      website: websiteName,
      name: userName,
      pass: password,
      showPass: false,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  render() {
    const {
      websiteName,
      userName,
      password,
      passwordList,
      passwordCount,
    } = this.state
    console.log(passwordList)
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app-logo"
        />
        <div className="password-container">
          <div className="password-card">
            <form className="form" onSubmit={this.onAddPassword}>
              <p className="form-description">Add new password</p>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Website"
                value={websiteName}
                onChange={this.onChangesiteName}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Enter Username"
                value={userName}
                onChange={this.onChangeuserName}
              />
              <input
                type="password"
                className="form-input"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />

              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="image"
            alt="password manager"
          />
        </div>
        <div className="password-details-container">
          <div className="header-container">
            <p className="password-count">Your Passwords:{passwordCount}</p>
            <div className="search-input-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-icon"
                  alt="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
          <hr className="hr" />
          <input type="checkbox" onClick={this.toggleIsLiked} />
          <ul className="comments-list">
            {passwordList.map(eachItem => (
              <PasswordItem key={eachItem.id} passwordDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
