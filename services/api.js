class Api {

static allCountrieNames = []

 static loadLeagues(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/countries",{
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
            "useQueryString": true
        }
      })
        .then(resp => resp.json())
        .then(data => Api.getCountries(data) )
}
   static getCountries(data) {
       data.api.countries.map(element => {Api.allCountrieNames.push({country: element.country}) 
     })
   }

     //${countryName.country}
  static  leagues() {
      for (let countryName of Api.allCountrieNames) {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${countryName.country}/2020`,{
      method: "GET",
      headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
          "useQueryString": true
      }
    })
      .then(resp => resp.json())
      .then(data => {
        let league = Leagues.createLeagues(data)
      })
    }
   }

  
}


        
     



// data.api.leagues.slice(0, 5)