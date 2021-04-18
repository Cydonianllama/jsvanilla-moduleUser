/**
 * 
 *  BACK END
 * 
 */

//only backend has permission for this data model
const userData = {
    codeUser : 'user-1',
    SALT : 'tecreibuena',
    registerFrom : '12/08/12',
    username : 'erick123',
    password : 'esunsecretoquetansoloquierocompartir',
    personalInformation : {
        email : 'erick@gmail.com',
        fullname : 'erick erickon erickin eris',
        birthdate : '06/06/06'
    },
    stateAccount : 'state-account-1',
    friends : [
        // forever alone
    ],
    blockedUsers : [
        // all about you
    ],
    recuperation : {
        recuperationTypeId : 'recuperation-1',
        recuperationResponse : 'un poio' 
    },
    ubication : {
        postalCode : '15222',
        country : 'PE',
        department : 'asd',
        province : 'asd',
        district : 'asd',
    },
    logs : [
        // is empty for now 
    ]
}

const friendItemFake = {
    codeUser : 'user-2', // friend code 
    stateFriendShip : 'friendchip-code-1',
    friendSince : '12/12/12'
}

const blockedUser = {
    codeUser: 'user-3',
    bockedSince : '12/12/12'
}

const logoItemFake = {
    codeLog : 'log-1',
    conceptLog : 'concept-log-1',
    description : 'this is a description about the log for the managers'
}


//  
    var usersDB = []
// USER REPOSITORY

function getUser(userId){
    let report = usersDB.find(user => user.codeUser === userId)
    return report
}

function getUsersByPage(page){
    let report = usersDB.slice(page,page*20)
    return report
}

function deleteUser(userId){
    let newArr = usersDB.filter(user => user.codeUser !== userId )
    usersDB = newArr
    return true
}

function updateUser(user){
    let newArr = usersDB.map(user_ => {
        if (user_.codeUser === user.codeUser){
            return user
        }else{
            return user_
        }
    })
    usersDB = newArr
    return true
}

function getBlockedUsers(userId){
    let report = usersDB.find(userId)
    return report.bockedUsers
}

function getFriends(userId){
    let report = usersDB.find(userId)
    return report.friends
}

function getResponseRecuperation(userId){
    let report = usersDB.find(userId)
    return report.recuperation
}

//UTILS FOR THE DATA MODEL IN USER 

const statesAccount = [
    {
        id : 'state-account-1',
        name : 'active'
    },
    {
        id : 'state-account-2',
        name : 'inactive'
    },
    {
        id : 'state-account-3',
        name : 'deleted'
    }
]

function getStateAccount (stateId){
    let state = statesAccount.find(state => state.id === stateId)
    return state
}

const requestsRecuperation = [
    {
        id : 'recuperation-1',
        request : 'best friend'
    },
    {
        id : 'recuperation-2',
        request : 'favorite song'
    },
    {
        id : 'recuperation-3',
        request : 'write something'
    }
]

function getRequestRecuperation(recuperationId){
    let request = requestsRecuperation.find(recuperation => recuperation.id === recuperationId)
    return request
}

const conceptsLog = [
    {
        id : 'concept-log-1',
        name : 'update current user data'
    },
    {
        id : 'concept-log-2',
        name : 'friend added'
    },
    {
        id : 'concept-log-3',
        name : 'user blocked'
    },
    {
        id : 'concept-log-4',
        name : 'current account deleted '
    }
]

function getConceptLog(conceptLogId){
    let concept = conceptsLog.find(concept => concept.id === conceptLogId )
    return concept
}

// USER SERVICES

function signOutUser(){

}

function signinUser(dataform){

}

function registerUser(dataform){

}


/*

    FRONT END

*/ 

const userFrontEnd = {
    codeUser: 'user-1',
    registerFrom: '12/08/12',
    username: 'erick123',
    personalInformation: {
        email: 'erick@gmail.com',
        fullname: 'erick erickon erickin eris',
        birthdate: '06/06/06'
    },
    stateAccount: 'state-account-1',
}

const stateLoginForm = {
    username : '',
    password : ''
}

const stateRegisterForm = {
    password : '',
    passwordAgain : '',
    postalCode : '',
    email : '',
    form : {
        username: '',
        password: '',
        personalInformation: {
            email: '',
            fullname: '',
            birthdate: ''
        },
        ubication: {
            postalCode: '',
            country: '',
            department: '',
            province: '',
            district: '',
        },
    }
}

class UserCard {
    constructor(){

    }
    listeners(){

    }
    getTemplate(){
        let div = document.createElement('div')
        let template = `
        
        `
        div.innerHTML = template
        return div
    }
    render(container){
        let component = this.getTemplate()
        container.append(component)
        this.listeners()
    }
}

class LoginFrom {
    constructor() {

    }
    listeners() {

    }
    getTemplate() {
        let div = document.createElement('div')
        let template = `
        
        `
        div.innerHTML = template
        return div
    }
    render(container) {
        let component = this.getTemplate()
        container.append(component)
        this.listeners()
    }
}

class RegisterFrom {
    constructor() {

    }
    listeners() {

    }
    getTemplate() {
        let div = document.createElement('div')
        let template = `
        
        `
        div.innerHTML = template
        return div
    }
    render(container) {
        let component = this.getTemplate()
        container.append(component)
        this.listeners()
    }
}

const app = () => {

}

app()