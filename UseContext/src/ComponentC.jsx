import ComponentD from './ComponentD.jsx'
function ComponentC(Props) {
    return (
      <div className='box'>
          <h1>ComponentC</h1>
          <ComponentD user={Props.user}/>
      </div>
    )
  }
  
  export default ComponentC
  