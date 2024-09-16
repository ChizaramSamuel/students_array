const students = [
  {name: 'Jessica',
   age: 15,
   Grade: 'A'
  },
  {name: 'Femi',
    age: 17,
    Grade: 'E'
   },
   {name: 'Abdul',
    age: 16,
    Grade: 'F'
   },
   {name: 'Emeka',
    age: 15,
    Grade: 'B'
   },
   {name: 'Iniobong',
    age: 18,
    Grade: 'C'
   }
]


const filterByGrade = (students, Grade) => {
  return students.filter(student => student.Grade === Grade);
}

console.log(filterByGrade(students, 'C'))



const averageAge = (students) => {
  const sum = students.reduce((acc, student) => acc + student.age, 0);
   return sum / students.length;
 }

console.log(averageAge(students));

