import React from "react";

const Display = (props) => {
  const {costumes} = props
  
  const loaded = () => (
    <div style={{textAlign: 'center'}}>
      {costumes.map((costume) => (
        <article key={costume._id}>
          <img src={costume.img}/>
          <h1>{costume.name}</h1>
          <h3>{costume.price}</h3>
          {/* <button onClick ={() => {
            props.selectDog(dog)
            props.history.push('/edit')
            }}>Edit</button>
            <button onClick ={() => {
            props.deleteDog(dog)
            }}>Delete</button> */}
        </article>
      ))}
    </div>
  )

   const loading = <h1>Loading...</h1>

   return costumes.length > 0 ? loaded(): loading
};

export default Display;
