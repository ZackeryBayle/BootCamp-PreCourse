const prettyPrice = (grossPrice, extension) => {

    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }

    return Math.floor(grossPrice) + extension;
};

console.log(prettyPrice(4.51, 99));