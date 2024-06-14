
/*props=read-only properties that are shared between components
A parent component can send data to a child component.
<Component key=value/>

propTypes=a mechanism that ensures that the passed value is of the correct datatype.
          age:PropTypes.number
*/
import Student from './Student.jsx'
function App() {
  return(
    <>
    <Student name="Vamsideva" age={24} isStudent={true} />
    <Student name="pravallika" age={20} isStudent={true} />
    <Student name="Bhargavi" age={18} isStudent={false} />
    <Student name="Priyanka" age={16} isStudent={false} />
    <Student name="dheeraj" age={13} isStudent={true} />
    <Student/>
    </>
  ); 
}

export default App
