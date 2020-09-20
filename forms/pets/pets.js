var petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', ]

var withMaraduke = petNames.push('Marmaduke')

let pos = petNames.indexOf('Sam')


var userAction = prompt("Select one of the following options: 1. Remove Vinny 2. Remove Marty 3. Add Nancy 4. Add Your Name 5. Display Riley's Location 6. Display's Cindy Location 7. Show the withMarmaduke Array")

if (userAction == "1") {

  let removedVinny = petNames.splice(5,1)

  alert("The action taken was: Remove Vinny \nThe remaining array data are: \n" + petNames)
  
} else if (userAction == "2") {
  
        let removedMarty = petNames.splice(3, 1)
        alert("The action taken was: Remove Marty \nThe remaining array data are: \n" + petNames)
  
} else if (userAction == "3") {
        let newNancy = petNames.unshift('Nancy')
        alert("The action taken was: Add Nancy \nThe remaining array data are: \n" + petNames)


} else if (userAction == "4") {
        let yourName = prompt("Please enter your name")
        let addName = petNames.push(yourName)
        alert("The action taken was: Add user name \nThe remaining array data are: \n" + petNames)
  
} else if (userAction == "5") {
        let posRiley = petNames.indexOf('Riley')
        alert("The index of Riley is:" + "  " + posRiley)
        alert("The action taken was: Index of Riley \n The remaining array data are: \n" + petNames)


} else if (userAction == "6") {
        let posCindy = petNames.indexOf('Cindy')
        alert("The index of Cindy is:" + "  " + posCindy)
        alert("The action taken was: Index of Cindy \n The remaining array data are: \n" + petNames)


} else if (userAction == "7") {
        alert(withMarmaduke)
        alert("The action taken was: Show withMarmaduke arrary data \n The remaining array data are: \n" + petNames)

}



