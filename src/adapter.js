const baseApiAddress = 'http://localhost:3000'
const Students = 'students'
const Modules = 'modules'
const Registrations = 'registrations'

export default class Adapter {
    parseHeaders = response => response.json()

    fetchEndpoint = endPoint => fetch(`${baseApiAddress}/${endPoint}`).then(this.parseHeaders)

    getStudents = () => this.fetchEndpoint(Students)

    getModules = () => this.fetchEndpoint(Modules)

    getRegistrations = () => this.fetchEndpoint(Registrations)

    getApiData = () => (Promise.all([
        this.getStudents(),
        this.getModules(),
        this.getRegistrations(),
    ]))
}