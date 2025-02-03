
function getEmailAddress(data) {
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }
    if (!data) {
        return "No arguments passed";
    }

    var n = data.length;
    const emails = new Array(n);
    if (n == 0) {
        return "No data available"
    }
    for (var i = 0; i < n; i++) {
        if (!data[i].email) {
            emails[i] = "Email not found for " + data[i].name;
        } else {
            emails[i] = data[i].email;
        }
    }
    return emails;
}

function getHobbies(data) {
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }
    if (!data) {
        return "No arguments passed";
    }

    var n = data.length;
    // const hobbies = new Array(n);
    const hobbies = [];
    if (n == 0) {
        return "No data available"
    }
    for (var i = 0; i < n; i++) {

        if (data[i].age === 35) {
            hobbies.push(data[i].hobbies);
        }

    }
    return hobbies;
}

function getStudentAustralia(data) {
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }
    if (!data) {
        return "No arguments passed";
    }

    var n = data.length;
    // const hobbies = new Array(n);
    const studAust = [];
    if (n == 0) {
        return "No data available"
    }
    for (let i = 0; i < n; i++) {

        if ((data[i].isStudent) && (data[i].country === "Australia")) {
            studAust.push(data[i].name);
        }

    }
    return studAust;
}

function getNameAndCity(data) {
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }
    if (!data) {
        return "No arguments passed";
    }

    var n = data.length;
    const NameAndCity = [];
    if (n == 0) {
        return "No data available"
    }

    NameAndCity.push(data[3].name, data[3].city);


    return NameAndCity;
}

function getAge(data) {
    if (!data) {
        return "No arguments passed";
    }
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    var n = data.length;
    // const hobbies = new Array(n);
    const age = [];
    if (n == 0) {
        return "No data available"
    }
    for (let i = 0; i < n; i++) {
        age.push(data[i].age);

    }
    return age;
}

function getFirstHobbies(data) {
    if (!Array.isArray(data)) {
        return "Data is not valid"
    }
    if (!data) {
        return "No arguments passed";
    }

    var n = data.length;
    // const hobbies = new Array(n);
    const firstHobbies = [];
    if (n == 0) {
        return "No data available"
    }
    for (var i = 0; i < n; i++) {


        firstHobbies.push(data[i].hobbies[0]);


    }
    return firstHobbies;
}

function getNameAndEmail(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }

    var n = data.length;

    const nameAndEmail = [];
    if (n == 0) {
        return "No data available"
    }
    for (var i = 0; i < n; i++) {

        if (data[i].age === 25) {
            nameAndEmail.push(data[i].name && data[i].email);
        }

    }
    return nameAndEmail;
}

function getCityandCountry(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }

    var n = data.length;

    const CityandCountry = [];
    if (n == 0) {
        return "No data available"
    }
    for (var i = 0; i < n; i++) {

        CityandCountry.push(data[i].city && data[i].country);


    }
    return CityandCountry;
}

export {
    getEmailAddress,
    getHobbies,
    getStudentAustralia,
    getNameAndCity,
    getAge,
    getFirstHobbies,
    getNameAndEmail,
    getCityandCountry
}