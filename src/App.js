import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import FormOne from "./Form";
import { Button } from 'reactstrap'


function App() {
  //   //URL Variable - NEEDS TO BE UPDATED
  const url = "http://localhost:3003"  //Update to a herokuapp.com
  console.log('Current Base URL:', url);


  //state to hold API  
   const [state, setState] = React.useState({
    costumes: []
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

  //useEffect to do initial call
  React.useEffect(() => {
    getCostumes()
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
  }).then(respnse => getCostumes())
}

  return (
    <div className="App flex" >
      <header className='topBar'>
        <div>
          <h1 className='logo'>SPIRIT</h1>
          <h4>Halloween Costume Ideas</h4>
        </div>
        <div>
          <Link to="/create">
          <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Add Costume</Button>
          </Link>
          <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Get Party Ideas</Button>
          <Button style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '130px' }} >Get Candy Ideas</Button>
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
        </Switch> 
      </main>
     </div>
  );
}

export default App;
