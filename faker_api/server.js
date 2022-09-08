const express = require("express");
const { faker } = require('@faker-js/faker')
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const user = [];
const company = [];

class User {
    constructor() {
        this.password = faker.internet.password(),
        this.email= faker.internet.email(),
        this.phoneNumber= faker.phone.number(),
        this.lastName= faker.name.lastName(),
        this.firstName= faker.name.firstName(),
        this._id= faker.datatype.uuid()
    }
}

class Company {
    constructor() {
        this._id= faker.datatype.uuid(),
        this.name= faker.company.companyName(),
        this.address= {
            street: faker.address.street(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


const newUser = new User();
const newCompany = new Company();


// USERS
app.get("/api/users", (req, res) => {
    res.json(newUser);
});

// COMPANIES
app.get("/api/company", (req, res) => {
    res.json(newCompany);
});


app.get("/api/users/company/", (req, res) => {
res.json( {newUser, newCompany} );
});





const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );


// export function createRandomUser(): User {
//     return {
//         password: faker.internet.password(),
//         email: faker.internet.email(),
//         phoneNumber: faker.date.phoneNumber(),
//         lastName: faker.internet.lastName(),
//         firstName: faker.image.firstName(),
//         _id: faker.datatype.uuid()
//     };
// }

// export function createRandomCompany(): Company {
//     return {
//         _id: faker.datatype.uuid(),
//         name: faker.internet.name(),
//         address: faker.internet.address(),
//         street: faker.internet.street(),
//         city: faker.date.city(),
//         zipCode: faker.image.zipCode(),
//         country: faker.image.country(),
//     };
// }