function travelSeat(passengers, seatColumn) {
    if (seatColumn <= 0) {
        return "Invalid number";
    }

    if (passengers.length === 0) {
        return "Oops! tickets not sold!";
    }

    passengers.sort();

    const result = [];
    for (let i = 0; i < passengers.length; i += seatColumn) {
        // Ambil potongan array sesuai dengan jumlah kolom
        const row = passengers.slice(i, i + seatColumn);
        
        // Jika potongan kurang dari seatColumn, tambahkan "Seat available"
        while (row.length < seatColumn) {
            row.push("Seat available");
        }

        // Tambahkan baris ke hasil
        result.push(row);
    }

    return result;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat