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
// connect function https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
export default connect(mapStateToProps)(Students)