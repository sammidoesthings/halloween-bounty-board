import './App.css';
import { monsters, topBounties} from './components/monsters';
import { Photo, Card, BountyCard, BountyPhoto, TopBountyTitle, SubTitle } from './styles'


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

    </Card>
  </div> /*master Div*/
  )
})

let topBountyCards = topBounties.map((bounty) => {
  // console.log(bounty.name)
  return (
    <div className="masterDiv">
      <BountyCard>
        <div>
          <BountyPhoto src={`${bounty.image}`} alt="bounty profile"/>
        </div>
        <div className="bounty-info">
          <h2>{bounty.bounty} | {bounty.name}</h2>
          <p>{bounty.info}</p>
        </div>
      </BountyCard>
    </div>
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
          <div className="top-bounty">
            <TopBountyTitle>TOP BOUNTY!</TopBountyTitle>
            <SubTitle>HAVE YOU SEEN THIS MONSTER?</SubTitle>
            {topBountyCards}
          </div>

          <div className="sightings">
          <button>Submit a Sighting</button>
          </div>
        </div>
      </section>
    </div> 
  );
}

export default App;
