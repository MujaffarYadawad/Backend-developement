 // 1.product of two numbers

const product = (a, b) =>{
  return a*b
}
 console.log(product(2,10));

 // 2. student class 
 class Student{
  constructor(name, age, marks){
    this.name = name ;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge){
    console.log(this)
    return (minMarks) => {
      if(this.age > minPlacementAge && this.marks > minMarks){
        console.log(this.name + " is ready for placements");
      }
      else{
        console.log(this.name + " is not ready for placements");
      }
    }
  }

 }
 // objects
 const  mujaffar = new Student('Mujaffar', 23, 80);
 const aj = new Student('Aj', 15, 30);
// calling objects and passing argumnets minPlacementAge and minMarks
 mujaffar.setPlacementAge(18)(40);
 aj.setPlacementAge(18)(40);