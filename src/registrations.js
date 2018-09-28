import React, {Fragment} from 'react'
import Registartion from './registration'
import { connect } from 'react-redux'

const Registartions =  ({students,modules,registrations}) => {
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

const mapStateToProps = state => state
// connect function https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/

export default connect(mapStateToProps)(Registartions)