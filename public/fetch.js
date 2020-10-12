//this code will make fetch requests
const Data = {

    getSingleUser : function(){
        const data = fetch('https://reqres.in/api/users/2')
        return data
    }
}

export default Data