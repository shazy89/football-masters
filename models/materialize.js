class Materialize {
  
    static materialize(){
      const trigger = new Materialize
      trigger.modal()
      trigger.sideNav()
      trigger.collabsable()
    }

     modal(){
        var elems = document.querySelectorAll('.modal');
        return  M.Modal.init(elems, {});
   
      }
  
       sideNav() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
        return instances
      }
  
      collabsable() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
        return instances
      }
}