class Players {
    constructor(player_name, position ){
      this.playerName = player_name
      this.position = position
    }

    static createPlayers(playersData){
        let players = playersData.forEach(data => {
            Players.createPlayer(data.player_name, data.position)
        });
        return players
    }

    static createPlayer(player_name, position) {
        let tHeadTr = document.getElementById('teams-table-head')
        let tBody = document.getElementById('table-body')
        let player = new Players(player_name, position)
        debugger
        tHeadTr.innerHTML = ""
        tBody.innerHTML = ""

        player.createTableHead()
        player.displayPlayers()
        return player
    }

    displayPlayers() {
        let tBody = document.getElementById('table-body')
    
        let tableTr = document.createElement('tr')
        let playerName = document.createElement('td')
        let playerPosition = document.createElement('td')

        tBody.appendChild(tableTr)
        tableTr.appendChild(playerName)
        tableTr.appendChild(playerPosition)

        playerName.innerText = this.playerName
        playerPosition.innerText = this.position
    }

    createTableHead() {
        const tr = document.getElementById('teams-table-head')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
  
        tr.appendChild(th1)
        tr.appendChild(th2)
  
        th1.innerText = "Player"
        th2.innerText = "Position"
    }




}