import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const Modules =  ({modules}) => {
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

const mapStateToProps = state => {
    return {
        modules: state.modules
    }
}

export default connect(mapStateToProps)(Modules)