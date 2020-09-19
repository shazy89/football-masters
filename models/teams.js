class Teams {
    
      static allTeams = []
      static topTenTeams = []

    constructor(league_id, team_id, name, logo, country, displayed) {
        this.league_id = league_id
        this.team_id = team_id
        this.name = name
        this.logo = logo
        this.country = country
        this.displayed = displayed
    }
    static createTeams(teamsData, league_id){
        let team = teamsData.api.teams.forEach(data => Teams.createTeam(league_id, data.team_id, data.name, data.logo, data.country))
        return team
     }
     
     static createTeam(league_id, team_id, name, logo, country, displayed=false) {
      let tHeadTr = document.getElementById('teams-table-head')
      let tBody = document.getElementById('table-body')
      let team = new Teams(league_id, team_id, name, logo, country ,displayed)
      const checkLeagueId = Teams.allTeams.map(e => {return e.league_id}).includes(team.league_id)
      if (Teams.allTeams.length === 0){
          Teams.allTeams.push(team)
          tHeadTr.innerHTML = ""
          tBody.innerHTML = ""
          team.displayTeams()
          return team
      } else if (checkLeagueId === true && team.displayed == false ){
          Teams.allTeams.push(team)
          team.displayTeams()
          return team    
         } else if (!checkLeagueId) {
             Teams.allTeams = []
             tHeadTr.innerHTML = ""
             tBody.innerHTML = ""
             team.createTableHead()
             team.displayTeams()
              return team    
         } 
     }

     static createTopTenTeams(teamsData, league_id=0){
         let team = teamsData.api.teams.forEach(data => Teams.createTopTenTeam(league_id, data.team_id, data.name, data.logo, data.country))
         return team
     }
       

     static createTopTenTeam(league_id, team_id, name, logo, country, displayed=false){
         let team = new Teams(league_id, team_id, name, logo, country ,displayed)
         Teams.topTenTeams.push(team)
         team.displayTopTen()
         return team
      }

      findTeamByCountry() {
       let find = Teams.allTeams.find(element => element.country === this.country) 
       return find
      }
      
      findTeamByLeagueId() {
       let find = Teams.allTeams.find(element => element.league_id === this.league_id)
       return find
      }   
      
      findTeamByDisplayed () {
       let find = Teams.allTeams.find(element => element.displayed === false)
       return find
      }
    
      displayTeams() {
      
        const tBody = document.getElementById('table-body')
        const tHeadTr = document.getElementById('teams-table-head')
      
        let tableTr = document.createElement('tr')
        let teamName = document.createElement('td')
        let teamLogo = document.createElement('td')
        let teamLogoImg = document.createElement('img')
    
        tBody.appendChild(tableTr)
        tableTr.appendChild(teamName)
    
        tableTr.style = "cursor: pointer;"
        tableTr.className = this.league_id
        tableTr.id = this.team_id
        tableTr.appendChild(teamLogo)
        teamLogo.appendChild(teamLogoImg)
        
        teamName.innerText = this.name
        teamLogoImg.src = this.logo
        teamLogoImg.style = "width: 30px;"
        
        this.displayed = true
        tableTr.addEventListener('click', function(){
            tHeadTr.innerHTML = ""
            tBody.innerHTML = ""
               Api.players(this.id, this.className)
            })
        }
        createTableHead() {
           const tr = document.getElementById('teams-table-head')
           let th1 = document.createElement('th')
           let th2 = document.createElement('th')      
           tr.appendChild(th1)
           tr.appendChild(th2)      
           th1.innerText = "Name"
           th2.innerText = "Logo"
    
        }
    
          displayTopTen(){
            const topTen = document.getElementById('top-ten-teams')
            let div = document.createElement('div')
            let img = document.createElement('img')
            let favoriteTeamsColabsable = document.getElementById("favorite-teams-collapsible")
            let teamsTable = document.getElementById('teams-table')
    
            topTen.appendChild(div)
            div.appendChild(img)
    
            div.id = this.team_id
            
            img.style = 'width: 70px;margin-left: 40px; margin-top: 10px;cursor: pointer; '
            img.src = this.logo
            img.addEventListener('click', function(){
                favoriteTeamsColabsable.className = "favorite-teams-collapsible hide"
                teamsTable.className = "striped"
                tBody().innerHTML = ""
                tHeadTr().innerHTML = ""
                Api.players(this.parentNode.id)
            })
        }
          
   }    
 
 
        
            
            
      
     
     

   
        

    
        

        



 

    
           
   
   
   
     


  

        




        
      
     






  

    




         

        




       







       




 



    
