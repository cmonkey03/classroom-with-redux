import React from 'react'

const fetchResourceAttributeByResourceId = (collection, id, attribute) => collection.find( element => element.id ===id )[attribute]

export default ({students, modules, registration}) => {
    const studentName = fetchResourceAttributeByResourceId( students, registration.student_id, 'name' )
    const moduleName = fetchResourceAttributeByResourceId( modules, registration.module_id, 'name' )
    const registrationString = `${studentName} is registered for the ${moduleName} Module`
    
    return <li key={registration.id}>{registrationString}</li>
}