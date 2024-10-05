// // задание показать только те машины тем кому не больше двух лет
/*let cars = [{
    model: 'cobalt',
    company: 'general motors',
    engine: 1.5,
    price: 15000,
    beatan: true,
    year: 2022,
    mileage: 13000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "malibu",
    company: "general motors",
    color: "dry asphalt",
    engine: 2.4,
    price: 30000,
    beaten: false,
    year: 2022,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "tracker",
    company: "general motors",
    color: "black",
    engine: "2.2",
    price: 22000,
    beaten: false,
    year: 2021,
    mileage: 2000,
    tech_passport: {
        date: 2021,
        exp_date: 3031
    }
},
{
    model: "gentra",
    company: "general motors",
    color: "black",
    engine: 1.5,
    price: 17000,
    beaten: false,
    year: 2021,
    mileage: 6000,
    tech_passport: {
        date: 2021,
        exp_date: 2031,
    }
},
{
    model: 'Damas',
    company: 'Chevrolet',
    color: 'White',
    engine: 2.4,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 100,
    tech_pasport: {
        date: 2023,
        exp_date: 2033
    }
},
{
    model: "Spark",
    company: "general motors",
    color: "dirtygreen",
    engine: 1.250,
    price: 7000,
    beaten: true,
    year: 2008,
    mileage: 328000,
    tech_passport: {
        date: 2008,
        exp_date: 2023,
    }
},
{
    model: "Labo",
    company: "GM ",
    color: "white",
    engine: 0.8,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 0,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    model: "tico",
    company: "daewoo",
    color: "black",
    engine: 1.5,
    price: 10000,
    beaten: true,
    year: 2010,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2025,
    }
}, {
    model: 'traverse',
    company: 'chevrolet',
    color: 'black',
    engine: 3.6,
    price: 60000,
    beaten: false,
    year: 2023,
    mileage: 500,
    tech_passport: {
        date: 2023,
        exp_date: 2033
    }
}, {
    model: "volga",
    company: "uaz",
    color: "white",
    engine: 0.4,
    price: 700000,
    beaten: true,
    year: 1964,
    mileage: 3000000,
    tech_passport: {
        date: 1964,
        exp_date: 2023,
    }
}, {
    model: "velik",
    company: "Philips",
    color: "red",
    engine: "v12",
    price: 12000,
    beaten: false,
    year: 2009,
    mileage: 0,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
}, {
    model: "Porter",
    company: "Hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: 'Tahoe',
    company: 'CHEVROLET',
    color: 'black',
    engine: {
        capacity: '5.3',
        horsePower: '343hp'
    },
    price: 110000,
    beaten: false,
    year: 2022,
    mileage: 0,
    tech_passport: {
        date: 2022,
        expDate: 2032
    }
}, {
    model: "Mercedes-Benz CLS",
    company: "Mercedes-Benz",
    color: "black",
    engine: 3.0,
    price: 110000,
    beaten: false,
    year: 2023,
    mileage: 200,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: "malibu",
    company: "Chevrolet",
    color: "sky rim",
    engine: 2.4,
    price: 15000,
    year: 2022,
    clash: false,
    mileage: 1500,
    tech_passport: {
        date: 2022,
        exp_date: 2054
    }
}, {
    model: "matiz",
    company: "general motors",
    color: "yellow",
    engine: 0.8,
    price: 4000,
    beaten: false,
    year: 2018,
    mileage: 5000,
    tech_passport: {
        date: 2018,
        exp_date: 2028,
    }
}, {
    model: "porter",
    company: "hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: 'bmw_x7',
    year: 2023,
    price: 85000,
    engine: 6.5,
    Drivetrain: "All Wheel Drive",
    Transmission_Order_Code: "2TB",
    engine: "3000cc",
    power: "375Bhp",
    Seating_Capacity: 6,
    Mileage: "11.29 - 14 kmpl",
    Fuel: "diesel",
    horsepower: 1000,
    beaten: false,
    color: "black"
}
]


let currYear = 2024

let newcars = []

let companies = [
  {
   chevrolet:[]
  },
  {
    hyundai:[]
  }

]


for (const car of cars) {
    if (car.year <= currYear && car.year >=2023) {
        newcars.push(car)
    }
    for (const company of companies) {
        
        if (car.company === companies.company) {
            company.push(car)
        }
    }
    
}

  
  
  
  // Проход по массиву автомобилей
  for (const car of cars) {
      // Добавляем машины в newcars, если год в нужном диапазоне
      if (car.year <= currYear && car.year >= 2023) {
          newcars.push(car);
      }
  
      // Проверяем, есть ли компания в объекте companies и добавляем автомобиль
      let companyName = car.company.toLowerCase();
      if (companies.hasOwnProperty(companyName)) {
          companies[companyName].push(car);
      }
  }
  
  console.log('Новые автомобили:', newcars);
  console.log('Автомобили по компаниям:', companies);

console.log(newcars,companies);*/


/*let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },{
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.org",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.org",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232",
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

let emails = {
    org: [],
    net: [],
    info: []
};
let other = [];


for (let user of users) {
   

    for (const mail in emails) {
      if (user.email.includes(mail)) {
        emails[mail].push(user)
      } else {
        other.push(user)
      }
      }
}




console.table('Эмейлы с доменами:', emails);
console.log('Другие эмейлы:', other);*/


/*let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]



for (const course of arr) {

 {
    for (const category of categories) {
        {
           if (course.info.faculity.toLowerCase() === category.course.trim().toLowerCase()) {
           category.count++
            
           }
        }
    }
}

    
} console.log(categories);



/*for (let user of users) {
   

    for (const mail in emails) {
      if (user.email.includes(mail)) {
        emails[mail].push(user)
      } else {
        other.push(user)
      }
      }
}*/





// while (true) {
//     let mess = prompt("Как вас зовут?");

//     if (mess.toLowerCase().trim() === "alex") {
//         let money = prompt("Номер счета?")
//         if (money == 7777 ) {
//             let howMuch = prompt("Скок обналичить?")
//             let random = parseInt(Math.random() * 100000)
//             if (howMuch.trim() <= random) {
//                let owe = random - howMuch
//                alert (`Вот скок ты снял ${howMuch}. А вот скок осталось на твоем счету${owe}!`)
//                break
//             } else {
//                 alert("You have insufficient amount of money")
//             }
//         } else {
//             alert ("No such number found! Try again pall!")
//         }

//     } else (
//         alert("No such user found! Try again!")
//     )

// }

// let users = [
//     {
//         id: 1, 
//         name: "Samir",
//         tax: 12,
//          budget: 400,
//         expenses: [100, 120, 170]
//     },
//     { id: 2, name: "Safina", tax: 9, budget: 1700, expenses: [300, 200, 600] },
//     { id: 3, name: "Leyla", tax: 9, budget: 1500, expenses: [180, 240, 500] },
//     { id: 4, name: "Azim", tax: 12, budget: 180, expenses: [40, 30, 10] }
// ];





// let successfull = [];
// let unsuccessfull = [];


// let maxEx = users[0];
// let minEx = users[0];


// for (let user of users) {
//     let totalExpenses = 0;

//     for (let expense of user.expenses) {
//         totalExpenses += expense;
//     }

//     let taxSum = (user.tax * user.budget) / 100;
//     totalExpenses += taxSum;

//     console.log("Total expenses for " + user.name + ": " + totalExpenses);


//     if (totalExpenses > user.budget) {
//         unsuccessfull.push(user.name);
//     } else {
//         successfull.push(user.name);
//     }


//     let maxExpenses = maxEx.expenses.reduce((a, b) => a + b,);
//     let minExpenses = minEx.expenses.reduce((a, b) => a + b,);

//     if (totalExpenses > maxExpenses) {

//         maxEx = user;
//     }

//     if (totalExpenses < minExpenses) {
//         minEx = user;
//     }
// }

// console.log("Successful users:", successfull);
// console.log("Unsuccessful users:", unsuccessfull);



// console.warn("User with max expenses:", maxEx);
// console.warn("User with min expenses:", minEx);


// const userOne = {
//     name:"Alex",
//     age:29
// }

// const userTwo = {
//     name:"Bob",
//     age:17
// }


// function checkUser(user) {
//     if (user.age >= 18) {
//         return true
//     } else {
//         return false
//     }




// }

// console.log(checkUser(userOne),
// checkUser(userTwo)
// );

// function makeSomeProportion(total, amount) {
//     return (amount / total * 100).toFixed(2)
// }

// console.log(
//     makeSomeProportion(10000, 2698)
// );



// function getLongestName(p1, p2, p3) {
  
//      if (p1.length >= p2.length && p1.length >= p3.length) {
//         return p1;
//     } else if (p2.length >= p1.length && p2.length >= p3.length) {
//         return p2;
//     } else if (p3.length >= p1.length && p3.length >= p2.length) {
//         return p3;
//     }
// }

// console.log(
//     getLongestName('Alex', 'Michael', 'Jeorge'),
//     getLongestName('alisher', 'amir', 'bobur')
// );

const names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
const colors = ["red", "green", "blue", "black", "yellow", "red"];


const items = document.querySelectorAll('.item');


function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

items.forEach((item, index) => {
    const randomName = names[getRandomIndex(names.length)];
    const randomColor = colors[getRandomIndex(colors.length)];
  
    item.textContent = randomName;
    item.style.color = randomColor;
});


