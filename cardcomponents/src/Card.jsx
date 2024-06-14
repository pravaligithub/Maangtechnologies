import pravali from './assets/pravali.jpeg'

 function Card() {
  return (
    <div className="card">
        <img className="card-image" src={pravali} alt="pravali"></img>
        <h2 className="card-name">Pravallika</h2>
        <p className="card-text">I am studying computer Science at RGUKT-Nuzvid</p>
    </div>
  );
}
export default Card
