
import UserGreeting from './UserGreeting.jsx'
function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} username="pravallika"/>
    <br/>
    <UserGreeting/>
    </>
  );
 
}

export default App
