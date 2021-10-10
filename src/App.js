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
        {monster.name}
      </div>
    
      <div>
        {monster.type}
      </div>

      <div>
        {monster.bounty}
      </div>
    </Card>
  </div> /*master Div*/
  )
})


function App() {


//useEffect + useState would be here


  return (
    <div className="App">

       <h1>Monster Hunter Job Board</h1>
       
        <div className="job-listings">
          {monsterCards}
        </div>

        <div className="sightings-app">
          HAVE YOU SEEN A MONSTER?
          Submission Form
        </div>

        <div className="sightings-posted">
          MAKE SIGHTINGS SHOW UP HERE WHEN SUBMITTED
        </div>

    </div> 
  );
}

export default App;
