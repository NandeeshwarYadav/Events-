// Write your code here

import './index.css'

const EventItem = props => {
  const {items, onClickImage} = props
  const {imageUrl, name, location, registrationStatus} = items

  const clickImage = () => {
    onClickImage(registrationStatus)
  }
  return (
    <li>
      <button type="submit" className="btn">
        <img src={imageUrl} className="img" alt="event" onClick={clickImage} />
      </button>
      <p className="name"> {name} </p>
      <p>{location} </p>
    </li>
  )
}

export default EventItem
