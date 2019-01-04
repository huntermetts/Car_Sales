const outputElement = document.querySelector("#app")

// /*
//     Just get a reference to the first object since
//     they all have the same properties
// */
// // const firstCar = allCars[0]

// // // Now iterate its keys
// // outputElement.innerHTML += "<h1>Properties</h1>"
// // for (const key of Object.keys(allCars[0])) {
// //   outputElement.innerHTML += `<div>${key}</div>`
// // }

// // // Iterate the array of cars. Individual objects stored in `car`.
// // outputElement.innerHTML += "<h1>Car List</h1>"
// // allCars.forEach(car => {

// //     // Iterate all of the values of the current car
// //     for (const value of Object.values(car)) {
// //       outputElement.innerHTML += `<div>${value}</div>`
// //     }
// // })




// // Lighting
// doctorBill.forEach(key => {
//         // Iterate all of the values of the current car
//         for (const value of Object.values(key)) {
//           console.log(value);
//         }
//     })

// doctorBill.forEach(value => {
//     // Iterate all of the values of the current car
//     for (const key of Object.keys(value)) {
//         console.log(key);
//     }
// })


// outputElement.innerHTML += `<h1>Bill Keys</h1>`
// for (const key of Object.keys(doctorBill[0])) {
//     outputElement.innerHTML += `<span>${key}</span> <br>`
// }

// outputElement.innerHTML += "<h1>Car List</h1>"

// allCars.forEach(car => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(car)) {
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })


// // lightning FOOD
// favFoods.forEach(food => {
//     outputElement.innerHTML += "<hr/>"
//     let stringOfHtml = '<article class="food">';
//     for (const entry of Object.entries(food)) {
//         stringOfHtml += `<div>${entry[0]}: ${entry[1]}<div>`
//     }
//     outputElement.innerHTML += stringOfHtml + "</article>"
// })


// Practice from chapter
outputElement.innerHTML += "<h1>Weekly Sales Report</h1>"

salesByWeek.forEach(sale => {
    let agentFirst = sale.sales_agent.first_name
    let agentLast = sale.sales_agent.last_name
    let year = sale.vehicle.year
    let model = sale.vehicle.model
    let make = sale.vehicle.make
    let color = sale.vehicle.color
    let profit = sale.gross_profit
    outputElement.innerHTML += "<hr/>"
    outputElement.innerHTML += 
    `<h2>${agentFirst} ${agentLast}</h2>
     <p>year: ${year}</p>
     <p>model: ${model}</p>
     <p>make: ${make}</p>
     <p>color: ${color}</p>
     <h3>Profit: $${profit}<h3>
    `
})