const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (a) => {
    return a * 1.07;
}

const fromDollarToYen = (a) => {
    return a * 144.74;
}

const fromYenToPound = (a) => {
    return a * .0050;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };