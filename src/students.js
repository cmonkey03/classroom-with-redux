import React, {Fragment} from 'react'
import { connect } from 'react-redux'

const Students =  ({students}) => {
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

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

const mapReduxStudentsStateToStudentsProps = connect(mapStateToProps)
const StudentsConnectedToStore = mapReduxStudentsStateToStudentsProps(Students)

export default StudentsConnectedToStore