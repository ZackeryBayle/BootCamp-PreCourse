const prettyPrice = (grossPrice, extension) => {
    return Math.floor(grossPrice) + extension;
};



console.log(prettyPrice(3.42, 0.99));