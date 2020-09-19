const BaseUrl = 'http://localhost:3000/'
const rapidApiBaseUrl = `https://api-football-v1.p.rapidapi.com`
const tBody = () => document.getElementById('table-body')
const tHeadTr = () => document.getElementById('teams-table-head')
document.addEventListener('DOMContentLoaded', callbacks)

function callbacks() {
  Api.topTenTeams()
  Api.favoriteLeagues()
  Api.loadCountries()
  Api.loadFavoriteTeams()
  Materialize.materialize()
}
  








 




