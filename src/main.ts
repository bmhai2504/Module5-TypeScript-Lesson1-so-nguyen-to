function isPrime(number: number):boolean{
      if(number < 2){
            return false;
      }else{
            for(let i:number = 2; i < number; i++){
                  if(number % i == 0){
                        return false;
                  }
            }
      }
      return true;
}

let array:number[] = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
for(let index = 0; index < array.length; index++){
      if(isPrime(array[index])){
            console.log(array[index] + " is a prime");
      }else{
            console.log(`${array[index]} is not a prime`);
      }
}