
import PropTypes from 'prop-types'
function UserGreeting(Props) {
/*  if(Props.isLoggedIn){
    return <h2>Welcome {Props.username}</h2>
  }
  else{
    return <h2>Please log in to continue</h2>
  }
}*/
/*return(
    Props.isLoggedIn ?
     <h2 className="welcome">Welcome      {Props.username}</h2>:<h2 className="login">Please log in to continue</h2>
)*/
const welcome=<h2 className="welcome">Welcome {Props.username}</h2>
const login=<h2 className="login">Please log in to continue</h2>
return(Props.isLoggedIn ? welcome : login);


}
UserGreeting.PropTypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:  false, 
     username: "Guest",
}
export default UserGreeting
