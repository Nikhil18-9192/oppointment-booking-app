import { useContext } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import ShowOppointements from './components/ShowOppointments.js/ShowOppointements';
import GlobalContext from './components/context/CreateContext';
import {  CSSTransition } from "react-transition-group";
import Phonenav from './components/Phonenav/Phonenav';
import Phonetoolbar from './components/PhoneToolbar/PhoneToolbar';

function App() {
  const {state} = useContext(GlobalContext)
  return (
    <div className="app_container">
      <Phonetoolbar />
      {state.toggle ? 
         <CSSTransition
         in={true}
         timeout={300}
         classNames="phone-navbar"
         unmountOnExit
       >
        <Phonenav />
        </CSSTransition>
        : null}
      <Header />
      <ShowOppointements />
    </div>
  );
}

export default App;
