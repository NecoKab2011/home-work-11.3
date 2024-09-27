const bankAccount = {
  ownerName: "Alex",
  accountNumber: 1000,
  balance: 25000,
  deposit(dollars) {
    this.balance += dollars;
    return this.balance;
  },
  withdraw(dollars) {
    this.balance -= dollars;
    return this.balance;
  },
};
const workWithAccount = () => {
  const addDeposit = confirm("Вам потрібно зробити депозит?");
  if (addDeposit) {
    const balance = bankAccount.deposit(
      Number.parseInt(prompt("Скільки Вам потріно додати доларів?"))
    );
    alert(`На Вашому рахунку ${balance}$`);
  }
  const withdraw = confirm("Вам потрібно зняти кошти?");
  if (withdraw) {
    const balance = bankAccount.withdraw(
      Number.parseInt(prompt("Скільки Вам потріно зняти доларів?"))
    );
    alert(`На Вашому рахунку залишилось ${balance}$`);
  }
};
workWithAccount();

const weather = {
  temperature: prompt("Введіть температуру"),
  humidity: 3,
  windSpeed: 25,
  negativeTemperature() {
    let negativeTemperature = this.temperature < 0 ? true : false;
    return negativeTemperature;
  },
};

if (weather.negativeTemperature()) {
  console.log("Температура нижча 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}

const user = {
  name: prompt("Введіть своє ім'я"),
  email: prompt("Введіть свою пошту '@gmail.com'"),
  password: prompt("Введіть свій пароль"),
  login() {
    const userEmail = prompt("Введіть свою пошту знову");
    const userPassword = prompt("Введіть свій пароль знову");
    let message = "";
    if (userEmail !== this.email) {
      message = "Пошту було введено неправильно";
    } else if (userPassword !== this.password) {
      message = "Пароль було введено неправильно";
    } else {
      message = "Ви заєреструвались на сайті";
    }
    return message;
  },
};

alert(user.login());

const movie = {
    title: "Воно",
    director: "	Енді Мускетті",
    year: 2017,
    rating: 9.5,
    horrorRating() {
      let message = "Фільм жахів поганий";
      if (this.rating > 8) {
        message = "Фільм жахів хороший";
      }
      return message;
    },
  };
  console.log(movie.horrorRating());
