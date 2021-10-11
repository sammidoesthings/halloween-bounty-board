import './App.css';
import monsters from './components/monsters';
import { Photo, Card } from './styles'


let monsterCards = monsters.map((monster) => {
  // console.log(monster.name)
  return (
  <div className="masterDiv">
    <Card>
      <div className="imageDiv">
        <Photo src={`${monster.image}`} alt="monster profile"/>
      </div>

      <div>
        {monster.name} | {monster.bounty}
      </div>
    
      {/* <div>
        {monster.type}. {monster.weakness}
      </div> */}

    </Card>
  </div> /*master Div*/
  )
})


function App() {


//useEffect + useState would be here


  return (
    <div className="App">

       <h1>Monster Hunter Job Board</h1>

      <section className="section">
        <div className="job-listings">
            {monsterCards}
        </div>

        <div className="sightings-container">
          <div className="sightings-app">
            <h2>TOP BOUNTY!</h2>
            <p>HAVE YOU SEEN THIS MONSTER?</p>
            <p>Submission Form</p>
          </div>

          <div className="sightings-posted">
            MAKE SIGHTINGS SHOW UP HERE WHEN SUBMITTED
          </div>
        </div>
      </section>
    </div> 
  );
}

export default App;
