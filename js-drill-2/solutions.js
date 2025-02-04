
function getInterest(data) {

    if (!data) {
        return "No arguments passed";
    }
    if (typeof data !== "object") {
        return "Data is not valid";
    }
    let n = data.length;
    if (n == 0) {
        return "Array is empty";
    }
    const ans = [];
    for (let user in data) {
        if (data[user]) {
            let interest = data[user].interests;
            for (let i = 0; i < interest.length; i++) {
                if (interest[i].toLowerCase().indexOf("video game") !== -1) {
                    ans.push(user);
                    break;
                }
            }
        }
    }
    return ans;

}

function getCountry(data) {

    if (!data) {
        return "No arguments passed";
    }
    if (typeof data !== "object") {
        return "Data is not valid";
    }
    let n = data.length;
    if (n == 0) {
        return "Array is empty";
    }
    const ans = [];
    for (let user in data) {
        if (data[user]) {
            let staying = data[user].nationality;

            if (staying === "Germany") {
                ans.push(user);

            }

        }
    }
    return ans;

}

function getMD(data) {

    if (!data) {
        return "No arguments passed";
    }
    if (typeof data !== "object") {
        return "Data is not valid";
    }
    let n = data.length;
    if (n == 0) {
        return "Array is empty";
    }
    const ans = [];
    for (let user in data) {
        if (data[user]) {
            let md = data[user].qualification;

            if (md === "Masters") {
                ans.push(user);

            }

        }
    }
    return ans;
}


function getLang(data) {

    if (!data) {
        return "No arguments passed";
    }
    if (typeof data !== "object") {
        return "Data is not valid";
    }
    let n = data.length;
    if (n == 0) {
        return "Array is empty";
    }
    let ans = [];
    for (let user in data) {
        if (data[user]) {
            let lang = data[user].desgination;
            let pLang = "";
            if (lang.toLowerCase().includes("javascript")) {
                pLang = "javascipt"
            }
            if (lang.toLowerCase().includes("golang")) {
                pLang = "golang"
            }
            if (lang.toLowerCase().includes("python")) {
                pLang = "python"
            }
            if (!ans[pLang]) {
                ans[pLang] = [];
            }
            ans[pLang].push(user);
        }
    }
    return ans;

}
export {
    getInterest,
    getCountry,
    getMD,
    getLang
}