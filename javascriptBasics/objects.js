const person = {
    fname : 'Entu',
    lname : 'Babi',
    hobbies : ['ustaza', 'cook', 'read', 'learn_language'],
    siblings : {
        olders : ['tof', 'haba'],
        youngers : ['hanuna', 'abu','samu']
    },
    salamet: function() {
        console.log("princess says Asalamu alaykum!")
    },
    age : 20
}
delete person.siblings.olders[1];
person.siblings.olders.splice(1,1);
person.age = 21;
person.student = true;
console.log(person.siblings)
console.log(person.hobbies.slice(-2));
person.salamet();