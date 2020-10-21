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
        const players = playersData.forEach(data => {
            Players.createPlayer(teamId, data.player_name, data.position, league_id)
        });
        return players
    }

    static createPlayer(teamId, playerName, position, league_id) {
        const player = new Players(teamId, playerName, position, league_id)
        const checkTeamId = Players.allPlayers.map(e => {return e.teamId}).includes(player.teamId)
        if(Players.allPlayers.length === 0){
            Players.allPlayers.push(player)
             tHeadTr().innerHTML = ""
             tBody().innerHTML = ""
             player.createTableHead()
             player.displayPlayers()
           return player
        } else if (checkTeamId === true){
             Players.allPlayers.push(player)
             player.displayPlayers()
            return player
        } else if (checkTeamId === false) {
             Players.allTeams = []
             tHeadTr().innerHTML = ""
             tBody().innerHTML = ""
             Players.allPlayers.push(player)
             player.createTableHead()
             player.displayPlayers()
            return player
        }
    }

    displayPlayers() {

        const tBody = document.getElementById('table-body')
    
        const tableTr = document.createElement('tr')
        const playerName = document.createElement('td')
        const playerPosition = document.createElement('td')
        const addPlayerButtonTd = document.createElement('td')
        const addPlayerButton = document.createElement('button')


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

    const cardHideDiv = document.getElementById('card')
    const removeCard = document.getElementById('remove-card')
    const userName = document.getElementById('icon_prefix')
    const cardDiv = document.getElementById('fav-team')
    const liDiv = document.createElement('div')
    const li = document.createElement('li')
    const removeButton = document.createElement('button')

      cardHideDiv.className = "row"
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
    removeCard.addEventListener('click', function(){
        userName.value = ""
        cardHideDiv.className = "row hide"
        cardDiv.innerHTML = ""
        Players.favoritePlayers = []
    })
    if (Players.favoritePlayers.length === 5 ){
        const submitBtn = document.createElement('button')
        submitBtn.id = 'submit-favplayers-btn'
        cardDiv.appendChild(submitBtn)
        submitBtn.className = "waves-effect waves-light btn-small right red"
        submitBtn.innerText = "Submit"
       
        submitBtn.addEventListener('click', function(e){
    
        let favPlayers = Players.favoritePlayers
          FavoriteTeam.createFromCard(e, userName.value , favPlayers)
           userName.value = ""
           cardHideDiv.className = "row hide"
           cardDiv.innerHTML = ""
           Players.favoritePlayers = []
     })
    }
       }
   createTableHead() {
       const tr = document.getElementById('teams-table-head')
       const th1 = document.createElement('th')
       const th2 = document.createElement('th')
       const th3 = document.createElement('th')
       const backButton = document.createElement('button')
   
       tr.appendChild(th1)
       tr.appendChild(th2)
       tr.appendChild(th3)
       th3.appendChild(backButton)
   
       th1.innerText = "Player"
       th2.innerText = "Position"
       backButton.id = this.league_id
       backButton.innerText = "BacK"   
       backButton.addEventListener('click', function(){
           tHeadTr().innerHTML = ""
           tBody().innerHTML = ""
           Api.teams(this.id)
       })
   }
     }

             
    
             
                  
       



    
   
  

              
              
           
           
         
          
        
  
  
            


   

            


        
         
            
     






        

          




        

    



        








      




            
