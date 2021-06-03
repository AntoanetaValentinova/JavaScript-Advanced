function solve () {
    class Person {
        constructor (name,email) {
            this.name=name;
            this.email=email;
        }

        toString () {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }


    class Teacher extends Person {
        constructor (name,email,subject) {
            super(name,email);
            this.subject=subject;
        }

        toString() {
            return `Teacher`+super.toString().slice(6,-1)+`, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name,email,course) {
            super(name,email);
            this.course=course;
        }

        toString() {
            return `Student`+super.toString().slice(6,-1)+`, course: ${this.course})`
        }
    }


    return {
        Person,
        Teacher,
        Student
    }
  
}

let result=solve();
let Teacher=result.Teacher;
let newInstance=new Teacher('name','email','course');
console.log(newInstance.toString())





