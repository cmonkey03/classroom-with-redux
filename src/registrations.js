import React, {Fragment} from 'react'
import Registartion from './registration'

export default ({students,modules,registrations}) => {
    return (
    <Fragment>
        <h3>Registartions</h3>
        <ul>
            {
            registrations.map( registration => <Registartion key={registration.id} registration={registration} students={students} modules={modules} /> )  
            }
        </ul>
    </Fragment>
    )
}