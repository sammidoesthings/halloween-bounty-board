import react from 'react';
import './App.css';
import { monsters, topBounties} from './components/monsters';
import { Photo, Card, BountyCard, BountyPhoto} from './styles';


let monsterCards = monsters.map((monster) => {
    // console.log(monster.name)
    return (
    <div className="masterDiv">
      <Card>
        <div className="imageDiv">
          <Photo src={`${monster.image}`} alt="monster profile"/>
        </div>
  
        <div className="bounty-text">
          {monster.bounty}
        </div>
  
        <div>
          {monster.name}
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
            <h2>{bounty.bounty}</h2>
            <h2>{bounty.name}</h2>
            <p>{bounty.info}</p>
          </div>
        </BountyCard>
      </div>
    )
  })

  export {monsterCards, topBountyCards };