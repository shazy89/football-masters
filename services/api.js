class Api {

static allCountrieNames = []



 static loadCountries(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/countries",{
        method: "GET",
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
            "useQueryString": true
        }
      })
        .then(resp => resp.json())
        .then(data => {
          Api.getCountries(data)
          Api.leagues()
        })
}
   static getCountries(data) {
       data.api.countries.map(element => {Api.allCountrieNames.push({country: element.country}) 
     })
   }

  static leagues() {
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

   static players(id, league_id) {
    fetch(`https://api-football-v1.p.rapidapi.com/v2/players/squad/${id}/2019`,{
      method: "GET",
      headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
          "useQueryString": true
      }
    })
    .then(resp => resp.json())
    .then(data => Players.createPlayers(data.api.players.slice(0, 20), id, league_id)) 
  
   }
  }

  
       


   



  



        
     


