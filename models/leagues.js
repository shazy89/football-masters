class Leagues {
    static all =[];

    constructor(id, name, country, country_code, logo, flag){
       this.id = id
       this.name = name
       this.country = country
       this.country_code = country_code
       this.logo = logo
       this.flag = flag
    }

static createLeague(id, name, country, country_code, logo, flag) {
    let league = new League(id, name, country, country_code, logo, flag)
    Leagues.all.push(league)
    return league
}

static createLeagues(data){}

}