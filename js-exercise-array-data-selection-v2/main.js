function dataSelection(data, amount, start) {
    if (data.length === 0) {
        return 'Data not found';
    }

    if (typeof amount === 'string' || typeof start === 'string') {
        return 'Invalid command';
    }

    //jika kurang dr 1 
    if (amount < 1 ) {
        return "Minimum amount is 1";
    }

    //jika start kurang dr 0 
    if (start < 0) {
        return 'Starting number cannot be below 0';
    }

    return data.slice (start - 1, start - 1 + amount) ;
}

console.log(dataSelection(["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3));
console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection
