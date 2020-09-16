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
   
        const cardDiv = document.getElementById('fav-team')
        let li = document.createElement('li')

        cardDiv.appendChild(li)
        li.innerText = `${playerName} - ${playerPosition}`
        li.style = 'color: black;'

        if (Players.favoritePlayers.length === 5 ){
            const submitBtn = document.createElement('button')
            cardDiv.appendChild(submitBtn)
            submitBtn.className = "waves-effect waves-light btn-small right red"
            submitBtn.innerText = "Submit"
            submitBtn.addEventListener('click', function(e){
                debugger
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
 
     






        

          




        

    



        








      




            
