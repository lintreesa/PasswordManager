import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {id, website, name, pass, showPass} = passwordDetails

  const initial = website ? website[0].toUpperCase() : ''
  return (
    <>
      <li className="comment-item">
        <p>{website}</p>
        <p>{name}</p>
        {showPass ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        ) : (
          <p>{pass}</p>
        )}
      </li>
    </>
  )
}

export default PasswordItem
