import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role, uniqueId} = userDetails

  return (
    <li className="profile-container">
      <img src={imageUrl} className="image" alt={imageUrl} />
      <div className="profile-content">
        <h1 className="user-name">{name}</h1>
        <p className="user-description">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
