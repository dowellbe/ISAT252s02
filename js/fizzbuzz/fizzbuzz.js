// The Problem:
 	// Write a program that prints the numbers from 1 to 100. 
	// For multiples of 3, print "Fizz" instead of the number
	// For multiples of 5, print "Buzz" instead of the number
	// For multiples of 3 and 5, print "FizzBuzz" 

// The Solution:
	// Write a loop that checks each number for multiples of 3 and 5

countXToY = function (x,y) {
	for (var i = x; i <= y; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log('FizzBuzz');
	}	
	else if (i % 3 == 0) {
 		console.log('Fizz');
	}
 	else if (i % 5 == 0) {
 		console.log('Buzz');
 	}
 	else {
 		console.log(i);
 	}
}
}

countXToY (1,100);

// const count = x => {
  let output = [];
  for ( let i = 1; i <= x; i += 1 ) {
    output.push(i);
  }
  return output;
//};

// const fizz = x => x %  3 === 0 ? "Fizz"     : x;
// const buzz = x => x %  5 === 0 ? "Buzz"     : x;
// const fibu = x => x % 15 === 0 ? "FizzBuzz" : x;

// const play = x => {
//   // let list_of_numbers = count(x);

//   // for ( let i = list_of_numbers.length - 1; i >= 0 ; i -= 1 ) {
//   //   list_of_numbers[ i ] = buzz(fizz(fibu(list_of_numbers[i])));
//   // }

//   return count(x).map(y => buzz(fizz(fibu(y))));
// };

// const play = x => count(x).map(y => buzz(fizz(fibu(y))));

// module.exports = {
  count,
  fizz,
  buzz,
  fibu,
  play
// };