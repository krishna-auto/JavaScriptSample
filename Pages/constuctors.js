 let empDetails = function(name,age){
 this.name = name;
 this.age = age;

    this.getAge = function() {
        return this.age;
    }
}
empDetails.prototype.getName = function() {
    return this.name;
}

let empdetailsobj = new empDetails('krishna','28');
console.log(empdetailsobj.getName());
console.log(empdetailsobj.getAge());