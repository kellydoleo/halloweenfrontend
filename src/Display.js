import React from "react";
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const Display = (props) => {
  const {costumes} = props
  
  const loaded = () => (
    <div style={{textAlign: 'center', display: 'inline-flex'}}>
      {costumes.map((costume) => (
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <article key={costume._id}>
          <CardTitle tag='h1'>{costume.name}</CardTitle>
          <CardImg src={costume.img}/>
          <CardBody>
          <h3>${costume.price}</h3>
          <Button onClick ={() => {
            props.selectCostume(costume)
            props.history.push('/edit')
            }}>Edit</Button>
            <Button color='danger' onClick ={() => {
            props.deleteCostume(costume)
            }}>Delete</Button>
        </CardBody>
        </article>
        </Card>
      ))}
    </div>
  )

   const loading = <h1>Loading...</h1>

   return costumes.length > 0 ? loaded(): loading
};

export default Display;
