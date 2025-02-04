function getId(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }
    for (let i = 0; i < n; i++) {
        if (data[i].id === 33) {
            return ("Car 33 is a " + data[i].car_year + ", Car " + data[i].car_make + ", car " + data[i].car_model);
        }
    }
}

function getLastCar(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }

    return ("Last car is a " + data[n - 1].car_make + ", car model " + data[n - 1].car_model);

}

function getSorted(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }
    let sortedData = [...data];

    let sorted = [];
    sorted = sortedData.sort((a, b) => a.car_model.localeCompare(b.car_model));
    return sorted;


}

function getYear(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }
    let year = [];
    for (let i = 0; i < n; i++) {

        year[i] = data[i].car_year;

    }
    return year;
}

function getOlder(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }

    let allYear = [];
    allYear = getYear(data);
    let len = allYear.length;
    let ans = [];
    for (let i = 0; i < len; i++) {
        if (allYear[i] < 2000) {
            ans.push(allYear[i]);
        }
    }
    return [ans, ans.length];
}

function getBmwAndAudi(data) {
    if (!data) {
        return "No arguments passed";
    }

    if (!Array.isArray(data)) {
        return "Data is not valid"
    }


    let n = data.length;
    if (n == 0) {
        return "No data available"
    }
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (data[i].car_make === "BMW" || data[i].car_make === "Audi") {

            ans.push(data[i].id + ", " + data[i].car_make + ", " + data[i].car_model + ", " + data[i].car_year);
        }
    }
    return ans;
}

export {
    getId,
    getLastCar,
    getSorted,
    getYear,
    getOlder,
    getBmwAndAudi
}