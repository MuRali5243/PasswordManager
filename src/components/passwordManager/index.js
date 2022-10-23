import {v4} from 'uuid'
import {Component} from 'react'
import Item from '../passwordItem'
import './index.css'

const noPassImg =
  'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    listItems: [],
    status: false,
    f: [],
    fstatus: false,
  }

  onchangeWeb = event => {
    this.setState({website: event.target.value})
  }

  onchangeUser = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeShowPassword = () => {
    this.setState(pre => ({status: !pre.status}))
  }

  onchangeSearch = event => {
    const {listItems} = this.state
    const val = event.target.value
    const filtItems = listItems.filter(each => each.website.includes(val))
    console.log(filtItems)
    if (val !== '') {
      this.setState(pre => ({f: filtItems, fstatus: !pre.fstatus}))
    }
  }

  ondelete = idvalue => {
    this.setState(pre => ({
      listItems: pre.listItems.filter(each => {
        if (each.id !== idvalue) {
          return each
        }
        return null
      }),
    }))
  }

  onsubmit = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const obj = {website, username, password, id: v4()}
    this.setState(pre => ({
      listItems: [...pre.listItems, obj],
      username: '',
      password: '',
      website: '',
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      listItems,
      status,
      f,
      fstatus,
    } = this.state
    const finalItems = fstatus ? f : listItems
    const count = finalItems.length

    console.log(listItems)
    return (
      <div className="bg-cont">
        <img
          className="website-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="inputs-img-main-cont">
          <img
            className="password-manager-img-small"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          />
          <form className="inputs-form-cont" onSubmit={this.onsubmit}>
            <h1>Add New Password</h1>
            <div className="web-input-cont">
              <img
                className="web-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.onchangeWeb}
                type="text"
                value={website}
                placeholder="Enter Website"
              />
            </div>
            <div className="web-input-cont">
              <img
                className="web-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.onchangeUser}
                type="text"
                value={username}
                placeholder="Enter Username"
              />
            </div>
            <div className="web-input-cont">
              <img
                className="web-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                onChange={this.onchangePassword}
                value={password}
                placeholder="Enter Password"
              />
            </div>
            <div className="add-btn-cont">
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            className="password-manager-img"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
          />
        </div>
        <div className="bottom-cont">
          <div className="bott-h-input">
            <div className="pass-count-cont">
              <h1>Your Passwords</h1>
              <p className="count-p">{count}</p>
            </div>
            <div className="search-cont">
              <img
                className="search-img"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="search-input"
                onChange={this.onchangeSearch}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="show-pass-cont">
            <div className="show-pass-content-cont">
              <input
                onChange={this.onchangeShowPassword}
                type="checkbox"
                className="search-input-pass"
                id="sh"
              />
              <label htmlFor="sh" className="show-pass-p">
                Show Passwords
              </label>
            </div>
          </div>
          {count !== 0 ? (
            <ul className="list-cont">
              {finalItems.map(each => (
                <Item
                  ondelete={this.ondelete}
                  status={status}
                  data={each}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <ul className="image-no-cont">
              <img
                className="no-items-image"
                src={noPassImg}
                alt="no passwords"
              />
              <p>No Passwords</p>
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
