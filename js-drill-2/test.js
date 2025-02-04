import
users
    from './persons.js'
import { getInterest, getCountry, getMD, getLang } from './solutions.js';

//Q1 Find all users who are interested in playing video games.
console.log(getInterest(users));
console.log(getInterest());
console.log(getInterest(1));

// Q2 Find all users staying in Germany.
console.log(getCountry(users));
console.log(getCountry());
console.log(getCountry(1));

// Q3 Find all users with masters Degree.
console.log(getMD(users));
console.log(getMD());
console.log(getMD(1));

// Q4 Group users based on their Programming language mentioned in their designation
console.log(getLang(users));
console.log(getMD());
console.log(getMD(1));