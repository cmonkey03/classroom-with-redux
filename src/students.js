import React, {Fragment} from 'react'

export default ({students}) => {
    return (
    <Fragment>
        <h3>Students directory</h3>
        <ul>
            {
                students.map( student => <li key={student.id}>{student.name}</li> )  
            }
        </ul>
    </Fragment>
    )
}