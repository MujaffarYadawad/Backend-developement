
var name = 'Mujaffar';
var age = 23;
var hasHobbies = true;
const  summerizeUser =(userName , userAge, userHasHobby) =>{
  return (
    'Name is ' + 
     userName + 
    ' age is ' + 
    userAge + 
    ' and user has hobbies: ' + 
    userHasHobby
  );
}
console.log(summerizeUser(name, age, hasHobbies));


