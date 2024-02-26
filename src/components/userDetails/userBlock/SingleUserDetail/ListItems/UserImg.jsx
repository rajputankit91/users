

const UserImg = ({imgUrl})=>{
    return(
      <div className='user-img'>
        <img src={imgUrl} alt="User" style={{ width: '200px', height: '200px' }} />
      </div>
    )
}
export default UserImg