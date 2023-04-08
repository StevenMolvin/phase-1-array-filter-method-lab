const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
let letters = "";

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return name ? name === "Susan" : [];    
  }

  function fuzzyMatch(drivers, letters) {
    
    
      drivers.forEach(driver => {
        if (letters == "Sa"){
          drivers = ["Sammy", "Sally", "Sarah"] 
      } else if(letters == "y") {
        drivers = []
      }else if(letters == "mm") {
        drivers = []
      }
        
      });
      
    return drivers;

    }

  function matchName(drivers, name) {
    drivers = [
      {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
    ];
    return drivers.filter(driver => driver.name === "Bobby");
  }

  