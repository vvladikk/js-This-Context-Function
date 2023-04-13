let students = [
    { name: "Андрій", age: 20, rating: 80 },
    { name: "Олексій", age: 19, rating: 90 },
    { name: "Ірина", age: 21, rating: 75 }
  ];
  
  students.forEach(function(student) {
    student.greet = function() {
      return "Привіт, я " + this.name + "!";
    }
  });

  let greetings = students.map(function(student) {
    return student.greet();
  });
  
  console.log(greetings);
  
  let topStudents = students.filter(function(student) {
    return student.rating > 80;
  });
  
  console.log(topStudents);
  
  function addRating(points) {
    this.rating += points;
  }

  students.forEach(function(student) {
    addRating.call(student, 10);
  });
  
  console.log(students);
  