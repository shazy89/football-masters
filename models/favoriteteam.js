
class FavoriteTeam {
static allTeams = []
    constructor(id, userName, players){
        this.id = id;
        this.userName = userName;
        this.players = players;
     }

     static createFavTeams(formDAta){
         let favteams = formDAta.forEach(data => {
             FavoriteTeam.createFavTeam(data.id, data.username, data.players)
         });
         return favteams
     }
    
       

     static createFavTeam(id, userName, players) {
        let newFavTeam = new FavoriteTeam(id, userName, players);
        FavoriteTeam.allTeams.push(newFavTeam);
        return newFavTeam
     }
  


     static displayFavoriteTeams() {
        const colFavoriteTeams = document.getElementById('favorite-teams-collapsible');
        colFavoriteTeams.innerHTML = ''
        FavoriteTeam.allTeams.forEach(team => team.displayFavoriteTeam())

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
            let favTeam = FavoriteTeam.createFavTeam(data.id, data.username, data.players);
            favTeam.displayFavoriteTeam()
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
                FavoriteTeam.createFavTeams(data)
                FavoriteTeam.displayFavoriteTeams()

              })
              .catch(errors => console.log(errors))
          }

          displayFavoriteTeam(){
            const colFavoriteTeams = document.getElementById('favorite-teams-collapsible');
            const li = document.createElement('li');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div2');
            const span = document.createElement('span');
            const removeButton = document.createElement('button');
        
            colFavoriteTeams.appendChild(li);
            li.appendChild(div1)
            li.appendChild(div2)
            div2.appendChild(span)
    
            div1.className = "collapsible-header"
            div1.innerText = this.userName
            div1.id = this.id


            div1.appendChild(removeButton)
            div2.className = "collapsible-body"
            removeButton.innerText = "remove"
            removeButton.style = "color: red; margin-left: auto; border-radius: 20px;"
            removeButton.addEventListener('click', function(){
                this.parentNode.remove()
            })
           
            this.players.forEach((player, index) => {
                span.innerHTML += index + "  " + player.playername + `-` + player.position + `<br>`
              })
          }
        }
               

           
        
       
      

          
          




       

