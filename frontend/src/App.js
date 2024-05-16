import JoinForm from './components/JoinForm';
import './App.css';
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Conference from './components/Conference';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <Header />
      {isConnected ? (<>
        <Conference /> <Footer />
      </>) : (<JoinForm />)}
    </div>
  );
}

export default App;
