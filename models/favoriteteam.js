const baseUrl = 'http://localhost:3000'
class FavoriteTeam {
static allTeams = []
    constructor(id, userName, players){
        this.id = id;
        this.userName = userName;
        this.players = players;
     }

     static createFavTeam(id, userName, players) {
        let newFavTeam = new FavoriteTeam(id, userName, players);
        FavoriteTeam.allTeams.push(newFavTeam);
     }

}




       

