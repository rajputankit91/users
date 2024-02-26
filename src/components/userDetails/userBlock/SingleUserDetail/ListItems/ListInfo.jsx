import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { IoIosGlobe } from "react-icons/io"


const ListInfo = ({userData})=>{
    return(
      <div className='user-detail-content'>
        <h3>{userData.name}</h3>
        <div className='contact-info-item'><span><AiOutlineMail /></span><p>{userData.email}</p></div>
        <div className='contact-info-item'><span><AiOutlinePhone /></span><p>{userData.phone}</p></div>
        <div className='contact-info-item'><span><IoIosGlobe /></span><p>{userData.website}</p></div>
      </div>
    )
}
export default ListInfo