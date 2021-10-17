import './App.css';
import { TopBountyTitle, SubTitle, Button } from './styles'
import { monsterCards, topBountyCards } from './Cards';
import SightingForm from './SightingForm';
import SightingPopUp from './components/SightingPopUp';
import { useState, useEffect } from 'react';
import axios from 'axios';
import schema from './ValidationSchema';
import * as yup from 'yup';


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

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
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


          <div className="sightings">
            <Button>
              <SubTitle>Submit a Sighting</SubTitle>
            </Button>
          </div>


      <SightingForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      
      <SightingPopUp/>

        </div>
      </section>
    </div> 
  );
}

export default App;
