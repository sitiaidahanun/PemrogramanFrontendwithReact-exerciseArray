function splitToArr(nama) {
    if (typeof nama === 'undefined') {
        return "Invalid input";
    }
    
    if (nama === "") {
        return "Data not available";
    }

    const regex = /[^a-zA-Z.]+/;
    const splitNama = nama.split(regex);
    const capitalizedNames = splitNama.map(name => {
        if (name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name;
    }).filter(name => name !== ""); 

    return capitalizedNames;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr