import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Search from './components/Search';
import Alert from './components/Alert';
import './scss/custom.scss'
import  UserContextProvider  from './contexts/usersContext';
import AlertContextProvider from './contexts/aletContext';

const App = () => {

 
    return (
    <UserContextProvider>
    <AlertContextProvider>
        <Navbar />
        <Search/>
        <Alert />
          <UserList/>
      </AlertContextProvider>
    </UserContextProvider>
  )
}

export default App