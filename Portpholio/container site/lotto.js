//object.keys  Object.keys(obj)
//bitwise operators


const weightedLotto = weights => {
    let constainerArray = [];

    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            constainerArray.push(key);
            //console.log(constainerArray);
        }
    });
    console.log(constainerArray[(Math.random() * constainerArray.length) | 0]);
    return constainerArray[(Math.random() * constainerArray.length) | 0];

};

const weights = { 
    winning: 1,
    loosing: 10
};


weightedLotto(weights);




