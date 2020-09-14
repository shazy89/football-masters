class Teams {
      static allTeams = []
    constructor(team_id, name, logo) {
        this.team_id = team_id
        this.name = name
        this.logo = logo
    }

    static createTeam(team_id, name, logo) {
     let team = new Teams(team_id, name, logo)
        if (Teams.allTeams.length === 0){
          Teams.allTeams.push(team)
           team.displayTeams()
           return team
    }   else {
        Teams.allTeams = []
        Teams.allTeams.push(team)
        return team
    }
         
}
        
     

    static createTeams(teamsData){
        let team = teamsData.api.teams.forEach(data => Teams.createTeam(data.team_id, data.name, data.logo))
        return team
     }

     displayTeams() {
      
       const tBody = document.getElementById('table-body')
       const tableTr = document.querySelector('tr#table-tr')
       
       let teamName = document.createElement('td')
       let teamLogo = document.createElement('td')
       let teamLogoImg = document.createElement('img')

       tBody.appendChild(tableTr)
       tableTr.appendChild(teamName)
       tableTr.appendChild(teamLogo)
       teamLogo.appendChild(teamLogoImg)

       teamName.innerText = this.name
       teamLogoImg.src = this.logo
       teamLogoImg.style
    }

}    

       







       




 



    
