const data = [{
    companyName: "Suka maju",
    numberOfEmployee: 100,
    recieveNewEmployee: true,
    location: [{
        address: "Jalan Nangka",
        province: "DKI Jakarta",
    }],
    employeeList: [
        {
            name: "Employee 1",
            age: 25
        },
        {
            name: "Employee 2",
            age: 26
        }]
}];

const company = data[0].companyName;
console.log(company);

const numberemployee = data[0].numberOfEmployee;
console.log(numberemployee);

const provinsi = data[0].location[0].province;
console.log(provinsi);

const umur = data[0].employeeList[1].age;
console.log(umur);


const data1 = {
    companyName: "Suka maju",
    numberOfEmployee: 100,
    recieveNewEmployee: true,
    location: [{
        address: "Jalan Nangka",
        province: "DKI Jakarta",
    }],
    employeeList: [
        {
            name: "Employee 1",
            age: 25
        },
        {
            name: "Employee 2",
            age: 26
        }]

};

const company1 = data1.companyName;
console.log(company);

const numberemployee1 = data1.numberOfEmployee;
console.log(numberemployee1);

const provinsi1 = data1.location[0].province;
console.log(provinsi1);

const umur1 = data1.employeeList[1].age;
console.log(umur1);
