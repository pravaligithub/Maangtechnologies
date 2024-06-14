
import propTypes from 'prop-types'
function Student(Props) {
  return (
    <div className="student">
      <p>Name: {Props.name}</p>
      <p>Age: {Props.age}</p>
      <p>Student: {Props.isStudent ? "Yes":"No"}</p>
    </div>
  );
}
Student.propTypes={
  name:propTypes.string,
  age:propTypes.number,
  isStudent:propTypes.Bool,
}
Student.defaultProps={
  name:"Guest",
  age:0,
  isStudent:false,
}
export default Student
