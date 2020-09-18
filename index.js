document.addEventListener('DOMContentLoaded', callbacks)


function callbacks() {
  favoriteLeagues()
  Api.loadCountries()
  Materialize.materialize()
  FavoriteTeam.loadFavoriteTeams()
}
  



  function favoriteLeagues() {
   const leagueIDs = [2790, 2755, 2664, 2857, 2673, 2833, 2816, 1264]
    leagueIDs.forEach(lgId => {
      fetch(`https://api-football-v1.p.rapidapi.com/v2/leagues/league/${lgId}`,{
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



 




