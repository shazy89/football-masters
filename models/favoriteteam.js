
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
        fetch(`${BaseUrl}teams`, {
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
           removeButton.addEventListener('click',  FavoriteTeam.deleteFavTeam)

          
           this.players.forEach((player, index) => {
               span.innerHTML += index + "  " + player.playername + `-` + player.position + `<br>`
             })
         }

         static favoriteTeamsTrigger(){
           const triggerBtn = document.getElementById('fav-teams-trigger-btn')
           
           triggerBtn.addEventListener('click', function(){
               let favoriteTeamsColabsable = document.getElementById("favorite-teams-collapsible")
               let teamsTable = document.getElementById('teams-table')
               if (favoriteTeamsColabsable.className === "collapsible popout"){
                   favoriteTeamsColabsable.className = "collapsible popout hide"
                   teamsTable.className = "striped"
               } else {
                   favoriteTeamsColabsable.className = "collapsible popout"
                   teamsTable.className = "striped hide"
               }
                 
           })
       }

       static deleteFavTeam() {
           
           this.parentNode.remove()
          fetch(`${BaseUrl}teams/${this.parentElement.id}`,{
              method: "delete"
          })
          .then(resp => {
            return resp.json();
          })
          .then(data => {
           FavoriteTeam.allTeams = FavoriteTeam.allTeams.filter(team => team.id !== data.id);
           FavoriteTeam.displayFavoriteTeams();
         })
       }


     }

       





         
                
       
               


           
        
       
      

          
          




       

