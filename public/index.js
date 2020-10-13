//this code will manipulate DOM
import Data from './fetch.js'

const Load = {

    SingleUserData : function(){
        const response = Data.getSingleUser()
        response.then(res => res.json())
        .then(data => {
            const user = data.data 
            console.log(user.id)
        })
    }
}

Load.SingleUserData()