//this code will manipulate DOM
import Data from './fetch.js'

const Load = {

    SingleUserData : function(){
        const response = Data.getSingleUser()
        response.then(res => res.json())
        .then(data => {
            const user = data.data 
            const userCard = document.getElementById("user_info")

            //set profile image
            userCard.innerHTML += `<img src="${user.avatar}"></img>`

            //set full name
            userCard.innerHTML += `<h1>${user.first_name}</h1>` 

            //set email
            userCard.innerHTML += `<p>${user.email}</p>`
        })
        .catch(error => console.log(error))
    },


    ListOfUsers : function(){
        const response = Data.getListOfUsers()
        response.then(res => res.json())
        .then(data => {
            const list = data.data
            list.map(user => {
                const userCard = document.getElementById("user_info")

                //load profile image 
                userCard.innerHTML += `<img src="${user.avatar}"></img>`
                
                //load full name
                userCard.innerHTML += `<h1>${user.first_name}</h1>`            
        
                //load email
                userCard.innerHTML += `<p>${user.email}</p>`
            })
        })
        .catch(error => console.log(error))
    }

}


Load.ListOfUsers() 
//Load.SingleUserData()