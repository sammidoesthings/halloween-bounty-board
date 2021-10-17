import './App.css';
import { TopBountyTitle, SubTitle, Button } from './styles'
import { Route, Link } from 'react-router-dom';
import { monsterCards, topBountyCards } from './Cards';
import { useState, useEffect } from 'react';
import axios from 'axios';


const initialFormValues = {
  name: '',
  phone: '',
  email: '',
  address: '',
  extraInfo: '',
}

const initialFormErrors = {
  name: '',
  phone: '',
  email: '',
  address: '',
  extraInfo: '',
}

const initialSightings = []; //I don't know if we need this since we aren't posting the info anywhere?
const initialDisabled = true; //this is for our report-button, makes input required before submitting



function App() {

//useEffect + useState would be here

const [sighting, addSighting] = useState(initialSightings);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

//IDK IF THIS API WORKS??? BUT I THINK IT DOES FOR NOW??

const postSighting = () => {
  axios.post('https://reqres.in/api/sightings')
      .then(res => {
        addSighting([res.data, ...sighting])
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
}

const formSubmit = () => {
  const newSighting = {
    name: formValues.name,
    size: formValues.phone,
    topping1: formValues.email,
    topping2: formValues.address,
    topping3: formValues.extraInfo,
  }
  postSighting(newSighting);
}


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

      {/* <Route> */}
        {/* <Link exact path to="/sightings"> */}
          <div className="sightings">
            <Button>
              <SubTitle>Submit a Sighting</SubTitle>
            </Button>
          </div>
        {/* </Link> */}
      {/* </Route> */}

        </div>
      </section>
    </div> 
  );
}

export default App;
