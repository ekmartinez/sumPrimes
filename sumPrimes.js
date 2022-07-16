
function sumPrimes(num) {

    const rng = [...Array(num+1).keys()].slice(1,);
    let primes = [];
    
    function primeChecker(num) {   
        let results = [];
        for (let x = 0; x < rng.length; x++) {
            if (num % rng[x] === 0){
                results.push(true);
            }
        } 
        if (results.length > 2) {
            return false;
        } else return true; 
    }

    for (let j = 1; j < rng.length; j++) {
        if (primeChecker(rng[j]) === true){
            primes.push(rng[j]);

        }
    }
    return primes.reduce((a, b) => a + b, 0);
}
  
console.log(sumPrimes(977));