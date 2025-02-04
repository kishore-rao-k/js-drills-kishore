import {

    emptyArrayOfObject,
    arrayOfObjects,
} from './persons.js'
import { getEmailAddress, getHobbies, getStudentAustralia, getNameAndCity, getAge, getFirstHobbies, getNameAndEmail, getCityandCountry } from './solution.js';

//Test case for: data is valid? , correct output , No orgument ,Empty ArrayOfObject

//1.Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
console.log(getEmailAddress(1));
console.log(getEmailAddress(arrayOfObjects));
console.log(getEmailAddress());
console.log(getEmailAddress(emptyArrayOfObject));

//2.Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
console.log(getHobbies(1));
console.log(getHobbies(arrayOfObjects));
console.log(getHobbies());
console.log(getHobbies(emptyArrayOfObject));

//3.Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
console.log(getStudentAustralia(1));
console.log(getStudentAustralia(arrayOfObjects));
console.log(getStudentAustralia());
console.log(getStudentAustralia(emptyArrayOfObject));

//4.Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
console.log(getNameAndCity(1));
console.log(getNameAndCity(arrayOfObjects));
console.log(getNameAndCity());
console.log(getNameAndCity(emptyArrayOfObject));

//5.Implement a loop to access and print the ages of all individuals in the dataset.
console.log(getAge(1));
console.log(getAge(arrayOfObjects));
console.log(getAge());
console.log(getAge(emptyArrayOfObject));

//6.Create a function to retrieve and display the first hobby of each individual in the dataset.
console.log(getFirstHobbies(1));
console.log(getFirstHobbies(arrayOfObjects));
console.log(getFirstHobbies());
console.log(getFirstHobbies(emptyArrayOfObject));

//7.Write a function that accesses and prints the names and email addresses of individuals aged 25.
console.log(getNameAndEmail(1));
console.log(getNameAndEmail(arrayOfObjects));
console.log(getNameAndEmail());
console.log(getNameAndEmail(emptyArrayOfObject));

//8.Implement a loop to access and log the city and country of each individual in the dataset.
console.log(getCityandCountry("sdf"));
console.log(getCityandCountry(arrayOfObjects));
console.log(getCityandCountry());
console.log(getCityandCountry(emptyArrayOfObject));

