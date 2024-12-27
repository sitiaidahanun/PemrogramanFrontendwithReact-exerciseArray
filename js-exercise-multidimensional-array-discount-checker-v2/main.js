function discountChecker(costumers, date) {
    const day = parseInt(date.split('-')[0]);

    return costumers.filter(costumers => {
        const price = parseInt(costumers[0].replace('$ ', '')); 
        // "non-member"
        if (costumers[1] === 'non-member') {
            // Ganjil jika harga barang ganjil dan tanggal ganjil
            // Genap jika harga barang genap dan tanggal genap
            if ((price % 2 === 1 && day % 2 === 1) || (price % 2 === 0 && day % 2 === 0)) {
                return true; // Kembalikan true jika memenuhi syarat
            }
        }

        // kembalikan customer dengan status member
        return costumers[1] === 'member';
    });
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
