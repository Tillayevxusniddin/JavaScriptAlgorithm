// const user = {
//     key: value
// }

const user = {
    name: 'Behruz',
    age: 25,
    isMarried: true,
    address: {
        city: 'Tehran',
        country: 'Iran'
    },
    // hello: () => {
    //     return 'Hello my name is ' + this.name   // global contextga murojat qiladi
    // }
    hello() {
        return 'Hello my name is ' + this.name 
    }
}

// console.log(user['address']);
// console.log(user.hello());



// const copyUser = {...user};
// // console.log(copyUser);

// const fruits = ['olma', 'anor', 'nok'];

// // spread operator  array yoki objectlardan copy qilish uchun ishlatilinadi
// const copyArr = [...fruits];   // copy qilish uchun 

// // console.log(copyArr);

// // const copyArr = fruits.slice();

// // copyArr.push('uzum');

// // console.log(fruits);
// // console.log(copyArr);





// // Rest operator functionlarda ishlatilinadi

// const returnArray = (...args) => {   // rest operator berilgan barcha argumentlarni array sifatida qaytaradi
//     return args;
// };


// console.log(returnArray(1,2,3,4));




// bu birinchi yo'li 

// function getName(data){
//     return data.name;
// }

// console.log(getName(user));


// bu ikkinchi yo'li destrukturizatsiya qilishimiz mumkin


// function getNameDestruct({ name }){
//     return name
// }

// console.log(getNameDestruct(user));


// const sports = ['voleybol', 'futbol', 'basketbol'];

// const { name, age } = user;
// console.log(name, age);

// const [sport1, sport2, sport3] = sports;    // arraylarda ham destructuring qilish mumkin
// console.log(sport1, sport2, sport3);


