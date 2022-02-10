print=function(text){
    console.log(text);
}

const age=60;
let random='random-key';
const person = {
    name: 'John',
    age,
    isMarried: false,
    ['job' + 'Title']: 'developer',
    ['job' + 'Title' + '2']: 'developer',
    ['job' + 'Title' + '3']: 'developer',

    sibglings:['Jane', 'Mark', 'Bob'],

    greet : function(name){
        console.log('Hello ' + name);
    },
    sayhellow: function(name){
        console.log('Hello ' + name);
    },
    job:{
        title: 'developer',
        company: {
            name: 'Google',
            location: 'Mountain View'

        }
    },
    'random-key': 'random-value'

};
// print(person.name);
// print(person.age);

// const name =person.name;
// print(name);
// person.city='New York';
// print(person.city);
// // delete proprety
// delete person.sibglings;
// print(person)
print(person.job.title);
print(person.job.company.name);
print(person[random]);