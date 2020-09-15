class Teams {
      static allTeams = []
    constructor(team_id, name, logo, country, displayed) {
        this.team_id = team_id
        this.name = name
        this.logo = logo
        this.country = country
        this.displayed = displayed
    }
    static createTeams(teamsData){
        let team = teamsData.api.teams.forEach(data => Teams.createTeam(data.team_id, data.name, data.logo, data.country))
        return team
     }

    static createTeam(team_id, name, logo, country, displayed=false) {
     const tBody = document.getElementById('table-body')
     let team = new Teams(team_id, name, logo, country ,displayed)
     const checkCountry = Teams.allTeams.map(e => {return e.country}).includes(team.country)
     if (Teams.allTeams.length === 0){
         Teams.allTeams.push(team)
         team.displayTeams()
         return team
      } else if (checkCountry === true && team.findTeamByid() == undefined) {
          Teams.allTeams.push(team)
          team.displayTeams()
          return team
        }  else if (checkCountry === false && team.displayed === false){
          Teams.allTeams = []
          tBody.innerHTML = ""
          team.displayTeams()
          return team
        }
      }
     

      findTeamByCountry() {
       let find = Teams.allTeams.find(element => element.country === this.country) 
       return find
      }
      
      findTeamByid() {
       let find = Teams.allTeams.find(element => element.team_id === this.team_id)
       return find
      }   
      
      findTeamByDisplayed () {
       let find = Teams.allTeams.find(element => element.displayed === false)
       return find
      }


      displayTeams() {
      
        let tBody = document.getElementById('table-body')
        
        let tableTr = document.createElement('tr')
        let teamName = document.createElement('td')
        let teamLogo = document.createElement('td')
        let teamLogoImg = document.createElement('img')
      
        tBody.appendChild(tableTr)
        tableTr.appendChild(teamName)
        tableTr.style = "cursor: pointer;"
        tableTr.id = this.team_id
        tableTr.appendChild(teamLogo)
        teamLogo.appendChild(teamLogoImg)
      
        teamName.innerText = this.name
        teamLogoImg.src = this.logo
        teamLogoImg.style = "width: 40px;"
      
        this.displayed = true
      }
      
      }    





  

    




         

        




       







       




 



    
