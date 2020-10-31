import React from 'react'

const Candy = (props) => {
    const {candy} = props

    const loaded = () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px', paddingTop: '5px', paddingBottom: '5px' }}>
            {candy.map((candy) => (
            <div style={{ margin: '10px'}}>
                <div className='crop'>
                    <img className='image2' src={candy.img} />
                </div>                        
                <h3>{candy.name}</h3>
            </div>
            
            ))}
        </div>

    )

    const loading = <h1>...Loading</h1> 

    return(candy.length > 0 ? loaded(): loading)

}

export default Candy
