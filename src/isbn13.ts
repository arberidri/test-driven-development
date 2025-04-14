export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) {
    return false; 
  }

  const digits = isbn13.split('').map(Number);
  const checksum = digits.pop(); 

  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * (index % 2 === 0 ? 1 : 3);
  }, 0);

  const calculatedChecksum = (10 - (sum % 10)) % 10;

  return checksum === calculatedChecksum;
}

//Wurde mit hilfe von KI gemacht. Steckte lange fest.