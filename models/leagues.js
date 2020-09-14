class Leagues {
    static all =[];
    static sortedAll =[]

    constructor(league_id, name, country, country_code, logo, flag){
       this.league_id = league_id
       this.name = name
       this.country = country
       this.country_code = country_code
       this.logo = logo
       this.flag = flag
    }

static createLeague(league_id, name, country, country_code, logo, flag) {
    
     let league = new Leagues(league_id, name, country, country_code, logo, flag)
     if(Leagues.all.map(element => {return element.country}).includes(country) === false){
         Leagues.all.push(league)
         league.display()
         return league
         } else {
             let obj = Leagues.all.find(element => {return element.country === league.country})
          
            obj[league.league_id] = {league_id: league.league_id, name: league.name, logo:league.logo}
            return obj
        }
          

        }
            
      
       

 
       
  

static createLeagues(leaguesData){
   let league = leaguesData.api.leagues.forEach(data => Leagues.createLeague(data.league_id, data.name, data.country, data.country_code, data.logo, data.flag))
   return league
}

display() {
    const collapsableUl = () => document.querySelector('.collapsible')
    const li = document.createElement('li')
    const div1 = document.createElement('div')
    const flag = document.createElement('img')

    const div2 = document.createElement('div')
    const span = document.createElement('span')
    const logo = document.createElement('img')

    collapsableUl().appendChild(li)

    li.appendChild(div1)
    li.appendChild(div2)

    
    div1.className = "collapsible-header"
    flag.src = this.flag
    flag.style= "width: 30px; height: 20px; margin: 15px;"
    div1.innerText = this.country
    div1.appendChild(flag)

    div2.className = "collapsible-body"
    div2.innerText = this.name
    div2.style = "margin-left: 7px;"

    div2.appendChild(span)
    span.appendChild(logo)

    logo.src = this.logo
    logo.style= "width: 30px; margin-left: 10px; "
   

}


    



//Leagues.all.map(element => {return element.country}).includes("Turkey")

//Object.create({}, { p: { value: 42 } })

 
}