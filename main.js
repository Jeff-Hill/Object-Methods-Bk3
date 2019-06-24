const mustang = {
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
}
// Writing loops to iterate over an object to access it's properties(key:value pairs)
// foo is the key of the object and a variable you need to pass. Must use [] notation to access it
let mustangKeys = []
for (let foo in mustang) {
    // console.log(mustang[foo])
    mustangKeys.push(foo)


}
// With the methods below you don't have to write Loops to iterate over an object to access the properties(key:value pairs)
// The above is the same as this

// Object.keys generates an array of the mustang keys
let mustangKeysNew = Object.keys(mustang)

// Object.values pulls the values out of the object mustang
let mustangValues = Object.values(mustang)

// Object.entries pulls out both keys and values
let mustangProps = Object.entries(mustang)

// For of loops
for (let foo of Object.keys(mustang)) {
    console.log(foo)
}


// Chapter 10 work

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

// Since you just need the values of each object, you can use the Object.values() method. Here is how you would start.

// Iterate the array of cars with forEach().
allCars.forEach(element => {
    console.log(element)
    // Use Object.values() to iterate the values of each car.
    let carValues = Object.values(element)
    console.log(carValues)
})

// Created html element in index.html to insert the values and access it with queryselector
const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

// Iterate all of the values of the current car and display in the div element with id of app
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

// Lightning Exercise 1:
// Create an object that represents a bill from your doctor's office.
// It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate.
// You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const drBill = {
    officeName: "Dentist",
    streetAddress: "123 Main St.",
    doctorName: "Dr. Roach",
    patientName: "Jeff",
    visitDate:"6/20/19",
    amountBilled: "$50",
    dueDate: "7/20/19"
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log("date visited", drBill[dateVisited])
console.log("amount owed", drBill[owed])
console.log("patient name", drBill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

const drBillValues = Object.values(drBill)
console.log(drBillValues)

// It's time for you to list all of the properties at the top of the page so that Randall
// knows the labels for all of the values on each of the objects.
// Just get a reference to the first object since they all have the same properties

const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

// Lightning Exercises
// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

let drBillKeys = Object.keys(drBill)
console.log(drBillKeys)
// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent
// <section> element. Wrap each one in a <span> element.

const outputDrElement = document.querySelector("#drBillKeys")
let drBillKeysArr = []
let billKey = drBillKeysArr[0]


for (let key in drBill) {
console.log(`${key}`)
outputDrElement.innerHTML += `<span> ${key} </span>`
}

for (const key of Object.keys(drBill)) {
    outputElement.innerHTML += `<span> ${key} </span>`
  }

  outputElement.innerHTML += "<h1>Car List</h1>"

  allCars.forEach(car => {
      outputElement.innerHTML += "<hr/>"

      for (const entry of Object.entries(car)) {
          outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
      }
  })

// Lightning Exercise 1: Create an object to represent your favorite dinner item
// (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property,
// but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favDinner = {
    name: "prime rib",
    temp: "medium rare",
    app: "salad",
    side: "broccoli",
    vegetarian: true
}

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
let outputDinner = document.querySelector(".food")
outputDinner.innerHTML = "<h1>My Favorite Dinner</h1>"
for (const item of Object.entries(favDinner)) {
    outputDinner.innerHTML += `<div>${item[0]}: ${item[1]}</div>`
}


// Randall has come back with a new job for you. Each week, he wants to see a report of how many
// cars each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

// Here's your first data structure for the sales made last week. You will need to start off
// by iterating the array of sales with a forEach() method.
// Then iterate the entries of the vehicle property of each sale.

const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]
// define the variable to become the html element you want to interst the data into
outputWeeklySales = document.querySelector(".carSales")
// Run a forEach loop on the entire array. "element" now becomes the array and you can use dot notation to access it's properties
salesByWeek.forEach(element => {
// Use dot notation to access the properties of the object you want to insert into the DOM.
    outputWeeklySales.innerHTML += `<h3>${element.sales_agent.first_name} ${element.sales_agent.last_name}</h3>`
    // Use a for loop to loop over the object of vehicles and use the .entries object method to print out the vehicle
    // key/value pairs
for (const salesByWeek of Object.entries(element.vehicle)) {
    outputWeeklySales.innerHTML += `<div>${salesByWeek[0]}: ${salesByWeek[1]}</div>`
    console.log(salesByWeek)


}
outputWeeklySales.innerHTML += `<h3>Profit: $${element.gross_profit}</h3>`

})


