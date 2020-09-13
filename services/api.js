class Api {
static countries = []

   loadLeagues(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/leagues",{
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
            "useQueryString": true
        }
      })
        .then(resp => resp.json())
        .then(data => {} )
}
   static getCountries() {
       
   }
        
     

    leagues() {
   // for (let everyCountry of countTry) {
   fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/current/england`,{
     method: "GET",
     headers: {
         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
         "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
         "useQueryString": true
     }
   })
     .then(resp => resp.json())
     .then(data => //addLeagues(data) 
     {debugger})
   }
}

 //}

// data.api.leagues.slice(0, 5)