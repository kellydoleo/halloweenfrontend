import React from 'react'

const Candy = (props) => {
    const {candy} = props

    const loaded = () => (
        <div>
            {candy.map((candy) => (
                <h1>{candy.name}</h1>
            ))}
        </div>

    )

    const loading = <h1>...Loading</h1> 

    return candy.length > 0 ? loaded(): loading

}

export default Candy
