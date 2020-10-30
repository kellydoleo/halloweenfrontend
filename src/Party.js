import React from 'react'

const Party = (props) => {
    const {parties} = props

    const loaded = () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px', paddingTop: '5px', paddingBottom: '5px' }}>
            {parties.map((party) => (
                <div style={{ margin: '10px'}}>
                    <div className='crop'>
                        <img className='image2' src={party.img} />
                    </div>                        
                    <h3>{party.name}</h3>
                </div>
            ))}
        </div>

    )

    const loading = <h1>...Loading</h1> 

    return parties.length > 0 ? loaded(): loading

}

export default Party;