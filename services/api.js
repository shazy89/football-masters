class Api {

static allCountrieNames = []

static leaguesdataRequest(){
let trigger = new Api
   trigger.loadCountries()
   trigger.leagues()
}

  loadCountries(){
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

   leagues() {
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
      .then(data =>  Leagues.createLeagues(data))
    }
   }

  static teams(id) {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`,{
      method: "GET",
      headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
          "useQueryString": true
      }
    })
    .then(resp => resp.json())
    .then(data => Teams.createTeams(data, id)) 
   }

   static players(id) {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/players/squad/${id}/2019`,{
      method: "GET",
      headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
          "useQueryString": true
      }
    })
    .then(resp => resp.json())
    .then(data => Players.createPlayers(data.api.players.slice(0, 20), id)) 
  
   }

  
  }
       


   



  



        
     


