let flavors = ['vanilla', 'chocolate'];
let vessels = ['cone', 'bowl'];
let toppings = ['sprinkles', 'peanuts'];

let flavor = flavors[1];
let vessel = vessels[0];
let topping = toppings[0];

if (flavor === 'vanilla' && vessel === 'cone' && topping === 'sprinkles') {
  console.log(
    `I'd like two scoops of ${flavors[0]} icream in a ${vessels[0]} with ${toppings[0]}`
  );
} else if (
  flavor === 'vanilla' &&
  vessel === 'bowl' &&
  topping === 'sprinkles'
) {
  console.log(
    `I'd like two scoops of ${flavors[0]} icream in a ${vessels[1]} with ${toppings[0]}`
  );
} else if (flavor === 'vanilla' && vessel === 'cone' && topping === 'peanuts') {
  console.log(
    `I'd like two scoops of ${flavors[0]} icream in a ${vessels[0]} with ${toppings[1]}`
  );
} else if (flavor === 'vanilla' && vessel === 'bowl' && topping === 'peanuts') {
  console.log(
    `I'd like two scoops of ${flavors[0]} icream in a ${vessels[1]} with ${toppings[1]}`
  );
} else if (
  flavor === 'chocolate' &&
  vessel === 'cone' &&
  topping === 'sprinkles'
) {
  console.log(
    `I'd like two scoops of ${flavors[1]} icream in a ${vessels[0]} with ${toppings[0]}`
  );
} else if (
  flavor === 'chocolate' &&
  vessel === 'cone' &&
  topping === 'peanuts'
) {
  console.log(
    `I'd like two scoops of ${flavors[1]} icream in a ${vessels[0]} with ${toppings[1]}`
  );
} else if (
  flavor === 'chocolate' &&
  vessel === 'bowl' &&
  topping === 'peanuts'
) {
  console.log(
    `I'd like two scoops of ${flavors[1]} icream in a ${vessels[1]} with ${toppings[1]}`
  );
} else if (
  flavor === 'chocolate' &&
  vessel === 'bowl' &&
  topping === 'sprinkles'
) {
  console.log(
    `I'd like two scoops of ${flavors[1]} icream in a ${vessels[1]} with ${toppings[0]}`
  );
} else {
  console.log('you have not made a valid order');
}
