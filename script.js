//complete this code
class Person {
 constructor(name,age){
	 this.name=name;
	 this.age=age;
 }
	get name(){
		return this.name;
	}
	set age(number){
		this.age=number;
	}
}

class Student extends Person {
	contructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	contructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${name} is teachinf`);
	}

	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
