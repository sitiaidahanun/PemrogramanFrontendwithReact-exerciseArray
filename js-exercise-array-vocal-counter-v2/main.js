function vocalCounter(array) {
    const vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    let foundVowels = [];

    array.forEach(item => {
        if (typeof item === 'string' && vowels.includes(item)) {
            foundVowels.push(item);
        }
        
    });
    if (foundVowels.length > 0) {
        return `Jumlah vokal yang ditemukan sebanyak ${foundVowels.length} berupa ${foundVowels.join('')}`;
    } else {
        return "Tidak ada huruf vokal yang ditemukan";
    }
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
