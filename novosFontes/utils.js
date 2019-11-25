

module.exports.getRandomInt = (minimo, maximo) => {
        minimo = Math.ceil(minimo);
        maximo = Math.floor(maximo);
        return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}