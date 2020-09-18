class Api {

static allCountrieNames = []



 static loadCountries(){
    fetch(`${rapidApiBaseUrl}/v2/countries`,{
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
    fetch(`${rapidApiBaseUrl}/v2/leagues/country/${countryName.country}/2020`,{
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
    fetch(`${rapidApiBaseUrl}/v2/teams/league/${id}`,{
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
    fetch(`${rapidApiBaseUrl}/v2/players/squad/${id}/2019`,{
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

   static loadFavoriteTeams() {

    fetch(`${BaseUrl}teams`)
      .then(resp => {
        if (resp.status !== 200) {
          throw new Error(resp.statusText);
        }
        return resp.json()
      })
      .then(data => {
        FavoriteTeam.createFavTeams(data)
        FavoriteTeam.displayFavoriteTeams()
        FavoriteTeam.favoriteTeamsTrigger()

      })
      .catch(errors => console.log(errors))
  }
  static favoriteLeagues() {
    const leagueIDs = [2790, 2755, 2664, 2857, 2673, 2833, 2816, 1264]
     leagueIDs.forEach(lgId => {
       fetch(`${rapidApiBaseUrl}/v2/leagues/league/${lgId}`,{
         method: "GET",
         headers: {
             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
             "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
             "useQueryString": true
         }
       })
         .then(resp => resp.json())
         .then(data => Leagues.createFavoriteLeagues(data) )
       })
  }
  static topTenTeams(){
    const teamIDs = [85, 33, 42, 40, 49, 496, 529, 541, 165, 157];
      teamIDs.forEach(teamId => {
        fetch(`${rapidApiBaseUrl}/v2/teams/team/${teamId}`,{
          method: "GET",
          headers: {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key": "145adf9b47msh8117898cad08650p129e6bjsn989da873df13",
              "useQueryString": true
          }
        })
          .then(resp => resp.json())
          .then(data => {
            Teams.createTopTenTeams(data)} )

          })
      }
   }


  
       


   



  



        
     


