
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

     static createFromCard(e, userName, favPlayers) {
        e.preventDefault();
        const strongParams = {
            team: {
                username: userName,
                players: favPlayers
            }
        }
        fetch("http://localhost:3000/teams", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
          })
          .then(resp => resp.json())
          .then(data => {
           debugger
          })
         }

         static loadFavoriteTeams() {

            fetch("http://localhost:3000/teams")
              .then(resp => {
                if (resp.status !== 200) {
                  throw new Error(resp.statusText);
                }
                return resp.json()
              })
              .then(data => {
                    debugger
              })
              .catch(errors => console.log(errors))
          }

           
 }
          
          




       

