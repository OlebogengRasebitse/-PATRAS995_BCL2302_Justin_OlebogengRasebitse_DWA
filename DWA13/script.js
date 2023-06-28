const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// forEach works! It allows us to go through each item in an array and perform a specific action with it
names.forEach((eachName) => {
  console.log(eachName);
});

//Name and province
names.forEach((eachName, index) => {
  console.log(`${eachName}, ${provinces[index]}`);
});

//map to upperCase
const uppercaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});
console.log(uppercaseProvinces)

//Names character number.
const nameLength = names.map((name) => {
  return name.length;
});
console.log(nameLength);

//Using toSorted to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//Filtre out all provinces with the word Cape.
const filteredProvinces = provinces.filter((province) => {
  return !province.includes('Cape');
});
console.log(filteredProvinces.length);

//boolean array by using map and some to determine whether a name contains an S character.
const containsSArray = names.map((name) => {
  return name.includes('S');
});
console.log(containsSArray);

// Task 8: Use reduce to create an object indicating the province of each individual
const individualsByProvince = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(individualsByProvince);


