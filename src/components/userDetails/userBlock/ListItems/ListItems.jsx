
import "./listitems.css"
import { memo } from 'react';
import ListInfo from './ListInfo';
import UserImg from './UserImg';


const ListItems = memo(({ userData }) => {


  return (
    <div className='user-block'>
       {/* Component to display user image */}
          <UserImg imgUrl={userData.image}/>
       {/* Component to display user information */}
          <ListInfo userData={userData}/>
    </div>
  );
});

export default ListItems;