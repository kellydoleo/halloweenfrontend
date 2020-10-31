import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import FormOne from "./Form";
import Candy from './Candy'
import Party from './Party'

import { Button } from 'reactstrap'


function App() {
  //   //URL Variable - NEEDS TO BE UPDATED
  const url = "https://halloweenbackend.herokuapp.com"  //Update to a herokuapp.com
  console.log('Current Base URL:', url);


  //state to hold costume API  
   const [state, setState] = React.useState({
    costumes: []
  })
//State to hold candy API
  const [candy, setCandy] = React.useState({
    candy: []
  })

//state to hold party API
  const [party, setParty] = React.useState({
    parties: []
})

  // Function to get dogs via API
  const getCostumes = () => {
    fetch(url + "/costumes")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
    })
  }

  const getCandy = () => {
    fetch(url + "/candy")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCandy(data)
    })
  }

  const getParty = () => {
    fetch(url + "/party")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setParty(data)
    })
  }

  //useEffect to do initial call
  React.useEffect(() => {
    getCostumes()
    getCandy()
    getParty()
    // console.log(state)
  }, [])


const emptyCostume = {
  name: "",
  price: 0,
  img: ""
};

//selected dog state to edit
const [selectedCostume, setSelectedCostume] = React.useState(emptyCostume)


//handle to create new costumes
const handleCreate = (newCostume) => {
  fetch(url + "/costumes", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCostume)
  }).then(response => {
    getCostumes()
  })
}
//handleUpdate function for Edit
const handleUpdate = (costume) => {
  fetch(url + "/costumes/" + costume._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(costume)
  }).then(response => getCostumes())
}
//set state when you select dog to edit
const selectCostume = (costume) => {
  setSelectedCostume(costume);
}

const deleteCostume = (costume) => {
  fetch(url + '/costumes/' + costume._id, {
    method: 'delete'
  }).then(response => getCostumes())
}




  return(
    <div className="App flex" >
      <header className='topBar'>
        <div>
          <Link to="/"><h1 className='logo'>SPIRIT</h1></Link>
          <h4>Halloween Costume Ideas</h4>
        </div>
        <div>
          <Link to="/create">
            <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Add Costume</Button>
          </Link>
          <Link to='/party'>
            <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Get Party Ideas</Button>
          </Link>
          <Link to="/candy">
            <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Get Candy Ideas</Button>
          </Link>
        </div>
      </header>
      
      {/* <hr /> */}

       
       <main>
       
         <Switch>
          <Route exact path="/" render={ (rp) => 
            <Display 
              costumes = {state} 
              selectCostume={selectCostume}{...rp} 
              deleteCostume={deleteCostume}
            />} 
          />
           <Route
            exact
            path="/create"
            render={(rp) => (
              <FormOne {...rp} label="create" costume={emptyCostume} handleSubmit={handleCreate} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <FormOne {...rp} label="update" costume={selectedCostume} handleSubmit={handleUpdate} />
            )}
          />
          <Route
            exact path='/candy'
            render={(rp) => (
              <Candy {...rp} candy={candy}/>
            )}
            />
            <Route
            exact path='/party'
            render={(rp) => (
              <Party {...rp} parties={party}/>
            )}
            />

          


            
        </Switch> 
      </main>
     </div>
  );

            }
export default App;
