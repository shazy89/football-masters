class Teams {
  
    constructor(team_id, name, logo) {
        this.team_id = team_id
        this.name = name
        this.logo = logo
    }

    static createTeams(team_id, name, logo) {
        let team = new Teams(team_id, name, logo)
      team.displayTeam()
        return team
    }
     

    static createTeams(teamsData){
        let team = teamsData.api.teams.forEach(data => Teams.createTeam(data.team_id, data.name, data.logo))
        return team
     }

     displayTeams() {
        

     }
    
}