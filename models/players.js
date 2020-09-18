class Players {
    static allPlayers = []
    static favoritePlayers = []

    constructor(teamId, playerName, position, league_id ){
      this.teamId = teamId
      this.playerName = playerName
      this.position = position
      this.league_id = league_id
    }

    static createPlayers(playersData, teamId, league_id){
        let players = playersData.forEach(data => {
            Players.createPlayer(teamId, data.player_name, data.position, league_id)
        });
        return players
    }

    static createPlayer(teamId, playerName, position, league_id) {
        let player = new Players(teamId, playerName, position, league_id)
        let tHeadTr = document.getElementById('teams-table-head')
        let tBody = document.getElementById('table-body')
        const checkTeamId = Players.allPlayers.map(e => {return e.teamId}).includes(player.teamId)
        if(Players.allPlayers.length === 0){
            Players.allPlayers.push(player)
           tHeadTr.innerHTML = ""
           tBody.innerHTML = ""
           player.createTableHead()
           player.displayPlayers()
           return player
        } else if (checkTeamId === true){
            Players.allPlayers.push(player)
            player.displayPlayers()
            return player
        } else if (checkTeamId === false) {
            Players.allTeams = []
            tHeadTr.innerHTML = ""
            tBody.innerHTML = ""
            Players.allPlayers.push(player)
            player.createTableHead()
            player.displayPlayers()
            return player
        }
    }

    displayPlayers() {

        const tBody = document.getElementById('table-body')
    
        let tableTr = document.createElement('tr')
        let playerName = document.createElement('td')
        let playerPosition = document.createElement('td')
        let addPlayerButtonTd = document.createElement('td')
        let addPlayerButton = document.createElement('button')


        tBody.appendChild(tableTr)
        tableTr.appendChild(playerName)
        tableTr.appendChild(playerPosition)
        tableTr.appendChild(addPlayerButtonTd)
        addPlayerButtonTd.appendChild(addPlayerButton)


        playerName.innerText = this.playerName
        playerPosition.innerText = this.position
        addPlayerButton.innerText = 'Add favorite player'
        addPlayerButton.style = 'color: green;'

        addPlayerButton.addEventListener('click', function(e){
            let playerN = e.path[2].childNodes[0].innerText 
            let playerP = e.path[2].childNodes[1].innerText 
            if (Players.favoritePlayers.length < 5) {
            Players.favoritePlayers.push({playerN, playerP})
            Players.addPlayerToFavorites(playerN, playerP)
        }
      })
  }


    static addPlayerToFavorites(playerName, playerPosition) {

        const userInputDiv = document.getElementById('user-input')
     
        if(Players.favoritePlayers.length > 0 && Players.favoritePlayers.length < 2) {
            let input = document.createElement('input')
            let label = document.createElement('label')

            userInputDiv.appendChild(input)
            userInputDiv.appendChild(label)

            input.type = "text"
            input.className = "validate"
            input.id = "icon_prefix"

            label.htmlFor = "icon_prefix"
            label.innerText = "Name"
        }
 
        const cardHideDiv = document.getElementById('card')
          cardHideDiv.className = "row"
          const cardDiv = document.getElementById('fav-team')
          let liDiv = document.createElement('div')
          let li = document.createElement('li')
          let removeButton = document.createElement('button')
          li.className = 'player'
       
          cardDiv.appendChild(liDiv)
          liDiv.appendChild(li)
          
          li.innerText = `${playerName} - ${playerPosition}`
          li.style = 'color: black;'
          li.id = playerName

          li.appendChild(removeButton)
          removeButton.innerText = "X"
          removeButton.style = "background-color: red; width: 25px; border-radius: 20px;"

          removeButton.addEventListener('click', function(e){
              let removePlayer = Players.favoritePlayers.map(e => e.playerN ).indexOf(this.parentNode.id)
              Players.favoritePlayers.splice(removePlayer, 1)
              this.parentNode.remove()
                  
            })

     if (Players.favoritePlayers.length === 5 ){
         const submitBtn = document.createElement('button')
         submitBtn.id = 'submit-favplayers-btn'
         cardDiv.appendChild(submitBtn)
         submitBtn.className = "waves-effect waves-light btn-small right red"
         submitBtn.innerText = "Submit"
        
         submitBtn.addEventListener('click', function(e){
         const userName = document.getElementById('icon_prefix')
         let favPlayers = Players.favoritePlayers
      
            FavoriteTeam.createFromCard(e, userName.value , favPlayers)
             userInputDiv.innerHTML = ""
             cardHideDiv.className = "row hide"
             cardDiv.innerHTML = ""
             Players.favoritePlayers = []
       })

     }

   }
   createTableHead() {
       const tr = document.getElementById('teams-table-head')
       let th1 = document.createElement('th')
       let th2 = document.createElement('th')
       let th3 = document.createElement('th')
       let backButton = document.createElement('button')
 
       tr.appendChild(th1)
       tr.appendChild(th2)
       tr.appendChild(th3)
       th3.appendChild(backButton)
 
       th1.innerText = "Player"
       th2.innerText = "Position"
       backButton.id = this.league_id
       backButton.innerText = "BacK"

       backButton.addEventListener('click', function(){
           let tHeadTr = document.getElementById('teams-table-head')
           let tBody = document.getElementById('table-body')

           tHeadTr.innerHTML = ""
           tBody.innerHTML = ""
           Api.teams(this.id)
       })
   }
 }
    
   
  

              
              
           
           
         
          
        
  
  
            


   

            


        
         
            
     






        

          




        

    



        








      




            
