const AdoptionService ={
    fetchDog(){
        const url = "http://localhost:8080/api";
        return fetch(url+'/dog')
            .then(res => {
            if (!res){
                return "No More Dogs"      
            }
            return res.json()
            })
    },
    fetchCat(){
        const url = "http://localhost:8080/api";
        return fetch(url+'/cat').then(res => {
            if (res){
                return res.json()
            }
            return "No More Cats"
        })
    },
    fetchNextDog(){
        const url = "http://localhost:8080/api/dog"
        return fetch(url+'/next')
            .then(res =>res.json())
    },
    fetchNextCat(){
        const url = "http://localhost:8080/api/cat"
        return fetch(url+'/next')
            .then(res =>res.json())
    },
    fetchAdoptDog(){
        const url = "http://localhost:8080/api/dog"
        return fetch(url, ({
            method:"DELETE"
        })).then(res => {
            if(res){
                return res.json
            }
            return "No More Dogs"
        })
    },
    fetchAdoptCat(){
        const url = "http://localhost:8080/api/cat"
        return fetch(url, ({
            method:"DELETE"
        })).then(res => {
            if(res){
                return res.json
            }
            return "No More Cats"
        })
    }

}
module.exports=AdoptionService;