
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route,Routes, HashRouter } from "react-router-dom";
import { useState, useContext } from 'react';
import ThemeContext from "./Context/ThemeContext";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import Tabs from './components/Tabs/Tabs';
import Chat from './components/Chatbox/ChatBox';
import Map from './components/Map/Map';
import Addevent from './components/Addevent/Addevent';
import Header from './components/Header/Header';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import Redirect from './components/Redirect/Redirect';
import CartePage from './pages/CartePage';
import WelcomePage from './pages/WelcomePage';
import Diplayevent from './components/Displayevent/Displayevent'
import EventpersoPage from './pages/EventpersoPage';
function App() {

  const [connect, setConnect] = useState(false);

  return (
    

      <BrowserRouter>
      <ThemeContext.Provider  value = { {connect, setConnect}}>
        <div className=''>
        <Header/>
        <Routes>

                <Route path="/login" element={ <LoginPage/>} />
                <Route path="/signupp" element= { <SignupPage/>} />
                <Route path="/home" element= {<HomePage/>}/>
                <Route path="/chat" element= {<Chat/>}/>

                <Route path="/carte" element= {<CartePage/>}/>
                <Route path="/addevent" element= {<Addevent/>}/>
                <Route path="/logout" element= {<Logout/>} />
                <Route path="/profile" element= {<Profile/>} />
               
                <Route path="/redirect" element= {<Redirect/>} />
                <Route path="/welcome" element= {<WelcomePage/>} />
                
                <Route path="/displayevent" element= {<Diplayevent/>} />

                <Route path="/evenementperso" element= { <EventpersoPage/>} /> 
                
        </Routes>

     
      <Tabs/>

      </div>
      
      </ThemeContext.Provider>
      </BrowserRouter>

    
  );
}

export default App;
