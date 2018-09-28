import React, {Fragment} from 'react'

export default ({modules}) => {
    return (
    <Fragment>
        <h3>Modules</h3>
        <ul>
            {
                modules.map( module => <li key={module.id}>{module.name}</li> )  
            }
        </ul>
    </Fragment>
    )
}