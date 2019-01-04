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

// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"


const doctorBill = [
        {
            officeName: "Reteef Skincare",
            streetAddress: "123 Bluebell Way",
            doctorName: "Lauren Reteef",
            patientName: "Jordan Rosas",
            visitDate: "1/3/19",
            amountBilled: "$120",
            dueDate:"1/21/19"
        }
    ]
    

    console.log(doctorBill[0][dateVisited])
    console.log(doctorBill[0][owed])
    console.log(doctorBill[0][patient])
   

    const favFoods = [
        {
            Food: "Pizza",
            Restaurant: "Dominoes",
            Type: "Carb",
            Cost: "$2.25 Per Slice"
        },
        {
            Food: "Grilled Chicken",
            Restaurant: "Home-made",
            Type: "Protein",
            Cost: "$5 Per lb"
        },
        {
            Food: "Sweet Potatoes",
            Restaurant: "Outback Steakhouse",
            Type: "Carb",
            Cost: "$2.99 Per potato"
        },
    ]