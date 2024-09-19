class User1 {
  public name: string;
  private email: string;
  readonly _id: string = "12345";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new User1("Lakshman", "laksh@google.com");
console.log(user1);

class User2 {
  readonly _id: string = "12345";
  constructor(public name: string, email: string, private userId: string) {
    name = name;
    email = email;
    this._id = userId;
  }
}

const user2 = new User2("Lakshman", "laksh@google.com", "123");
console.log(user2);

export {};
