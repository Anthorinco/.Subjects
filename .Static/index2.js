class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} Users online`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Patrick Stars");
const user2 = new User("Homelander");
const user3 = new User("Diego Lopes");

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
User.getUserCount();
