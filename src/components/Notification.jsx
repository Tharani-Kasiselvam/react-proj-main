
import '../App.css'
import { NotifcationContext } from '../App'
import { useContext } from 'react'

const Notification = () => {
    const {notification} = useContext(NotifcationContext)

    if(!notification.visible){
        return null
    }

  return (
    <div className="notify">
        {notification.message}
    </div>
  )
}

export default Notification