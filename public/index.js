//this code will manipulate DOM
import Data from './fetch.js'

const Load = {

    SingleUserData : function(){
        const response = Data.getSingleUser()
        response.then(res => res.json())
        .then(data => {
            const user = data.data 
            console.log(user)

            //set profile image
            document.getElementById("avatar")
            .src = user.avatar

            //set fullname
            document.getElementById("full_name")
            .innerHTML = user.first_name + " " + user.last_name

            //set email
            document.getElementById("email_address")
            .innerHTML = user.email
        })
    }
}

Load.SingleUserData()