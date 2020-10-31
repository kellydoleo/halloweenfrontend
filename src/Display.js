import React from "react";
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const Display = (props) => {
  const {costumes} = props
  
  const loaded = () => {
    // <div style={{textAlign: 'center', display: 'inline-flex'}}>
    <div style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap'}}>
      {costumes.map((costume) => (
        <Card body inverse style={{ backgroundColor: 'white', borderColor: '#333', margin: '10px', paddingTop: '5px', paddingBottom: '5px'}} key={costume._id}>
        <article key={costume._id}>
          <div className='crop'>
            <CardImg className="image" src={costume.img}/>
          </div>
          <CardBody>
          <CardTitle style={{color: 'black'}} tag='h1'> {costume.name} </CardTitle>
          <h3 style={{color: 'black'}} >Cost: ${costume.price}</h3>
          <Button style={{backgroundColor: 'black', border: 'none', margin: '5px', width: '70px' }} onClick ={() => {
            props.selectCostume(costume)
            props.history.push('/edit')
            }}>Edit</Button>
            <Button color='danger' style={{backgroundColor: '#FF9A00', border: 'none', margin: '5px', width: '70px' }} onClick ={() => {
            props.deleteCostume(costume)
            }}>Delete</Button>
        </CardBody>
        </article>
        </Card>
      ))}
    </div>
  }

   const loading = <h1>Loading...</h1>

   return(costumes.length > 0 ? loaded(): loading)
};

export default Display;
