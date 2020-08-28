let width = {
  Small: 18,
  medium: 20,
  Large: 22,
  xLarge: 24,
  xxLarge: 26,
  xxxLarge: 28,
};
let length = {
  Small: 28,
  medium: 29,
  Large: 30,
  xLarge: 31,
  xxLarge: 33,
  xxxLarge: 34,
};
let sleeve = {
  Small: 8.13,
  medium: 8.38,
  Large: 8.63,
  xLarge: 8.88,
  xxLarge: 9.63,
  xxxLarge: 10.13,
};

let shirtWidth = 19;
let shirtLength = 28.7;
let shirtSleeve = 8.13;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log('small');
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log('medium');
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log('large');
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log('x-large');
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log('xx-large');
} else if (
  shirtWidth >= 28 &&
  shirtWidth < 30 &&
  shirtLength >= 34 &&
  shirtLength < 35 &&
  shirtSleeve >= 10.13 &&
  shirtSleeve < 10.63
) {
  console.log('xxx-large');
}else{
 console.log('NA')
}
