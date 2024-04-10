
import './App.css';
// import Contact from './Clientfolder/Contactlist';
// import ChatWindow from './Clientfolder/chatwindow';
import { BsChatHeartFill } from "react-icons/bs";
import {Routes,Route,Navigate} from "react-router-dom";
import ChatFormat from './Clientfolder/ChatFormat';
import Register from './Clientfolder/register';
import Login from './Clientfolder/login';
import { useContext } from 'react';
import { AutoContext } from './Clientfolder/Contextapi/contextapi';
function App() {
  const {user}=useContext(AutoContext);
  return (
    <div>
      <BsChatHeartFill  className='chaticon'/><h4>Chatterrs</h4>
  <Routes>
    <Route path="/" element={user ? <ChatFormat/>:<Register/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/' element={<Navigate to ="/"/>}/>
  </Routes>
    </div>
  );
}

export default App;
