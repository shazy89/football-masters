class Leagues {
    static all =[];
    
 constructor(league_id, name, country, country_code, logo, flag){
       this.league_id = league_id;
       this.name = name;
       this.country = country;
       this.country_code = country_code;
       this.logo = logo;
       this.flag = flag;
    }
   //sort leagues - for each league getting same name and logo
static createLeague(league_id, name, country, country_code, logo, flag) {
    let league = new Leagues(league_id, name, country, country_code, logo, flag)
         if(Leagues.all.map(element => {return element.country}).includes(country) === false){
             Leagues.all.push(league)
             league.displayLeagues()
             return league
         } else {
             let obj = Leagues.all.find(element => {return element.country === league.country})
             league.updateLeagues()
              return obj
       }
    }

    static createLeagues(leaguesData){
       let league = leaguesData.api.leagues.forEach(data => Leagues.createLeague(data.league_id, data.name, data.country, data.country_code, data.logo, data.flag))
       return league
    }
 
    static createFavoriteLeague(league_id, name, country, country_code, logo, flag){
 
        let league = new Leagues(league_id, name, country, country_code, logo, flag)
            league.displayFavoriteLeague()
            return league
       }
 
       static createFavoriteLeagues(leaguesData){
        let league = leaguesData.api.leagues.forEach(data => Leagues.createFavoriteLeague(data.league_id, data.name, data.country, data.country_code, data.logo, data.flag))
        return league
       }
           
       displayLeagues() {
           const collapsableUl = () => document.getElementById('collapsible-leagues')
 
           const li = document.createElement('li')
           const div1 = document.createElement('div')
           const flag = document.createElement('img')
           const div2 = document.createElement('div')
           const span = document.createElement('span')
           const logo = document.createElement('img')
           let favoriteTeamsColabsable = document.getElementById("favorite-teams-collapsible")
           let teamsTableHeader = document.getElementById('teams-table-head')
           let teamsTableBody = document.getElementById('table-body')
       
           collapsableUl().appendChild(li)
       
           li.appendChild(div1)
           li.appendChild(div2)
           li.id = this.country
            
           div1.className = "collapsible-header"
           flag.src = this.flag
           flag.style= "width: 30px; height: 20px; margin: 15px;"
           div1.innerText = this.country
           div1.appendChild(flag)
          
           div2.id = this.league_id
           div2.style = "cursor: pointer;"
           div2.className = "collapsible-body"
           div2.innerText = this.name
           div2.style = "margin-left: 7px; background-color: #eceff1; cursor: pointer;"
       
           div2.appendChild(span)
           span.appendChild(logo)
       
           logo.src = this.logo
           logo.style= "width: 30px; margin-left: 10px;  "
 
           div2.addEventListener('click', function(){
               favoriteTeamsColabsable.className = "collapsible popout hide"
               teamsTableHeader.innerHTML = ""
               teamsTableBody.innerHTML =""
               Api.teams(this.id)
           })
 
       }
       updateLeagues() {

           const favoriteTeamsColabsable = document.getElementById("favorite-teams-collapsible")
           const teamsTableHeader = document.getElementById('teams-table-head')
           const teamsTableBody = document.getElementById('table-body')
           let li = document.getElementById(this.country)      
           let newDiv2 = document.createElement('div')
           let newSpan = document.createElement('span')
           let newLogo = document.createElement('img')
              
           li.appendChild(newDiv2)
 
           newDiv2.className = "collapsible-body"
           newDiv2.style = "margin-left: 7px; background-color: #eceff1; cursor: pointer;"
           newDiv2.innerText = this.name
           newDiv2.id = this.league_id
 
           newDiv2.appendChild(newSpan)
           newSpan.appendChild(newLogo)
 
           newLogo.src = this.logo
           newLogo.style= "width: 30px; margin-left: 10px; "
 
           newDiv2.addEventListener('click', function(){
            favoriteTeamsColabsable.className = "collapsible popout hide"
            teamsTableHeader.innerHTML = ""
            teamsTableBody.innerHTML =""
               Api.teams(this.id)
            })
  
      }
               
      displayFavoriteLeague() {
          const modalFavLeagues = document.getElementById('favorite-lgs')
          const img = document.createElement('img')
          let favoriteTeamsColabsable = document.getElementById("favorite-teams-collapsible")
          let teamsTableHead = document.getElementById('teams-table-head')
          let teamsTableBody = document.getElementById('table-body')
  
          modalFavLeagues.appendChild(img)
          img.src = this.logo
          img.id = this.league_id
          img.style = "width: 80px; margin: 30px; cursor: pointer; "
          img.addEventListener('click', function(){
           favoriteTeamsColabsable.className = "collapsible popout hide"
           teamsTableHead.innerHTML = ""
           teamsTableBody.innerHTML = ""
            Api.teams(this.id)
          })
       }
  
    }
           
       
 
 
    
   
  
        




           
              



           
             
             
            
   




           
        
              
                
     
      
       


 
       
  



    





 