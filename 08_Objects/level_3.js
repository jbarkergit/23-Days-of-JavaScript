/*1
let personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: 0,
  expenses: 0,

  totalIncome: function () {
    let total = 0;
    for (const item of Object.keys(personAccount.incomes)) {
      total += personAccount.incomes[item];
    }
    return total;
  },

  totalExpense: function () {
    let total = 0;
    for (const item of Object.keys(personAccount.expenses)) {
      total += item;
    }
    return total;
  },

  accountInfo: function () {
    console.log(
      "First Name: ",
      this.firstName + "\n" + "Last Name: " + this.lastName + "\n"
    );
  },
};
*/

//2
const userdb = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.
const signUp = (name, email, password) => {
  //Check if email exists in database
  for (const user of userdb) {
    if (user.email == email) return `This email is already registered.`;
    //Generate the user a random ID
    const chars = "1234567890abcdefghi";
    let randomID = [];

    for (const char of chars) {
      let generator = parseInt(Math.random() * chars.length);
      randomID.push(chars[generator]);
    }
    let userID = randomID.join("");
    //Log date of ID generation
    const d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth();
    let hours = d.getHours();
    let minutes = d.getMinutes();

    hours < 10 ? "0" + hours.toString() : hours;
    minutes < 10 ? "0" + minutes.toString() : minutes;

    let creationDate = `${year}/${month + 1}/${date} ${
      hours > 12
        ? (hours - 12).toString() + ":" + minutes.toString() + "PM"
        : hours.toString() + ":" + minutes.toString() + "AM"
    }`;
    //Add new userData Array to the userdb Obect
    let userData = {
      _id: userID,
      name: name,
      email: email,
      password: password,
      createdAt: creationDate,
      isLoggedIn: false,
    };
    userdb.push(userData);
  }
};
signUp("John", "john@doe.com", "password123");
userdb.forEach((i) => console.log(i));
