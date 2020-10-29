import React from 'react'

const Party = (props) => {
    const {parties} = props

    const loaded = () => (
        <div>
            {parties.map((party) => (
                <h1>{party.name}</h1>
            ))}
        </div>

    )

    const loading = <h1>...Loading</h1> 

    return parties.length > 0 ? loaded(): loading

}

export default Party;