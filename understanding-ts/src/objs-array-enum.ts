// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Woong',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role.push('admin');
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Max',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
