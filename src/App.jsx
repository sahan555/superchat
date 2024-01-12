import "./App.css";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="app">
        <header>
          <h1>Global Chat</h1>
          <SignOut/>
        </header>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </>
  );
}


export default App;
