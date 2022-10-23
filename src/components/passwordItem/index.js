import './index.css'

const Item = props => {
  const {data, status, ondelete} = props
  const {username, password, website, id} = data

  const ondel = () => {
    ondelete(id)
  }

  const f = website.slice(0, 1)
  const btnimage =
    'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png '
  const stars =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png '
  const pass = status ? (
    password
  ) : (
    <img className="show-stars" src={stars} alt="stars" />
  )
  console.log(pass)

  return (
    <li className="item-cont">
      <div className="item-h-content">
        <h1 className="first-letter">{f}</h1>
        <div className="item-cont-content">
          <p className="para-items">{website}</p>
          <p className="para-items">{username}</p>
          <p className="para-items">{pass}</p>
        </div>
      </div>

      <button onClick={ondel} className="del-btn">
        <img className="del-img" src={btnimage} alt="delete" />
      </button>
    </li>
  )
}
export default Item
