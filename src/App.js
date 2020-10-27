import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";




function App() {
//   //URL Variable - NEEDS TO BE UPDATED
  const url = "http://localhost:3003"  //Update to a herokuapp.com
  console.log('Current Base URL:', url);

  fetch(url + '/costumes')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
    err => console.log(err))

  //state to hold API  
  const emptyCostume = {
    name: '',
    price: '',
    img: '',
    type: []
  };

  //selected dog state to edit
  const [costume, setCostume] = React.useState(emptyCostume)

  // Function to get dogs via API
  const getCostumes = () => {
    fetch(url + "/costumes")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCostume(data)
    })
  }

  
  //useEffect to do initial call
  React.useEffect(() => {
    getCostumes()
  }, [])

// //handle to create dogs
// const handleCreate = (newDog) => {
//   fetch(url + "/dog", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newDog)
//   }).then(response => {
//     getDogs()
//   })
// }
// //handleUpdate function for Edit
// const handleUpdate = (dog) => {
//   fetch(url + "/dog/" + dog._id, {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json"
//     }, body: JSON.stringify(dog)
//   }).then(response => getDogs())
// }
// //set state when you select dog to edit
// const selectDog = (dog) => {
//   setSelectedDog(dog);
// }

// const deleteDog = (dog) => {
//   fetch(url + '/dog/' + dog._id, {
//     method: 'delete'
//   }).then(respnse => getDogs())
// }
  return (
    <div className="App">
      <h1>HALLOWEEN COSTUMES</h1>
       <hr />


       {/* <Link to="/create">
//         <button>Add Dog</button>
//       </Link>
//       <main>
//         <Switch>
//           <Route exact path="/" render={(rp) => <Display selectDog={selectDog}{...rp} dogs = {dogs} deleteDog={deleteDog}/>} />
//           <Route
//             exact
//             path="/create"
//             render={(rp) => (
//               <Form {...rp} label="create" dog={emptyDog} handleSubmit={handleCreate} />
//             )}
//           />
//           <Route
//             exact
//             path="/edit"
//             render={(rp) => (
//               <Form {...rp} label="update" dog={selectedDog} handleSubmit={handleUpdate} />
//             )}
//           />
//         </Switch> 
//       </main> */}
     </div>
  );
}

export default App;
