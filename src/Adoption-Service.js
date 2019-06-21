const AdoptionService ={
    fetchDog(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api";
        return fetch(url+'/dog')
            .then(res => {
            if (!res){
                return "No More Dogs"      
            }
            return res.json()
            })
    },
    fetchCat(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api";
        return fetch(url+'/cat').then(res => {
            if (res){
                return res.json()
            }
            return "No More Cats"
        })
    },
    fetchNextDog(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api/dog"
        return fetch(url+'/next')
            .then(res =>res.json())
    },
    fetchNextCat(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api/cat"
        return fetch(url+'/next')
            .then(res =>res.json())
    },
    fetchAdoptDog(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api/dog"
        return fetch(url, ({
            method:"DELETE"
        })).then(res => {
            if(res){
                return res.json()
            }
            return "No More Dogs"
        })
    },
    fetchAdoptCat(){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api/cat"
        return fetch(url, ({
            method:"DELETE"
        })).then(res => {
            if(res){
                return res.json()
            }
            return "No More Cats"
        })
    },
    fetchUser(username){
        const url = "https://petful-server-adam-harrison.herokuapp.com/api/users"
        return fetch(url, ({
            method:"POST",
            headers: {
                'content-type': 'application/json'
              },
            body:JSON.stringify({
                name:username
            })
        })).then(res => res.json())
    },
    deleteUser(username){
        const url="https://petful-server-adam-harrison.herokuapp.com/api/users"
        return fetch(url, ({
            method:"DELETE"
        })).then(res => res.json())
    }

}
module.exports=AdoptionService;