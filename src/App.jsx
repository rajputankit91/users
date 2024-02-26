
import './App.css'
import { Provider } from 'react-redux'
import UsersDeatils from './components/userDetails/usersDetails'
import store from '../Redux/store'

function App() {
 
  return (
    <>
     <Provider store={store}>

    <UsersDeatils/>
 
    </Provider>
    </>
  )
}

export default App
