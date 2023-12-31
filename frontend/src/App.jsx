import React from 'react'
import'./App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import NotFound from './components/NotFound';
import StateManagement from './components/StateManagement';
import TodoApp from './components/TodoApp';
import SocialMediaPost from './components/SocialMediaPost';
import ChatPage from './components/ChatPage';
import Listpost from './components/Listpost';
import {Toaster} from 'react-hot-toast';
import CreatePost from './components/CreatePost';
import{SnackbarProvider} from 'notistack';
import ManageUser from './components/Manageuser';
// import StateManagement from './components/StateManagement';

const App = () => {
  return (
    
    <div>
      {/* after writing home tap enter to extension and it will be imprted automatically make component page and then import it on app.jsx */}
      {/* tag is written with small leteer and component is started with capital letter */}
      {/* <Home></Home> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <SnackbarProvider anchorOrigin={{horizontal:'right',vertical:'top'}}maxSnack={3}>
      <Toaster position='top-center'/>
      <BrowserRouter>
         <Navbar/>
         {/* <Link to='/'>Home Page</Link>
            
         <Link to='/login'>Login Page</Link>
         <Link  to='/signup'>Signup Page</Link> */}
           <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/contactus' element={<Contactus />}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/event' element={<EventHandling/>}/>
            <Route path='/state' element={<StateManagement/>}/>
            {/* <Route path='/state' element={<StateManagement/>}/> */}
            <Route path='/todo' element={<TodoApp/>}/>
            <Route path='/post' element={<SocialMediaPost/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path='/listpost' element={<Listpost/>}/>
            <Route path='/createpost' element={<CreatePost/>}/>
            <Route path='/manageuser' element={<ManageUser/>}/>
            <Route path='*' element={<NotFound/>}/>

           </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
    
  )
}

export default App;