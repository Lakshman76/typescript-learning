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
// console.log(user1);

class User2 {
  readonly _id: string = "12345";
  constructor(public name: string, email: string, private userId: string) {
    name = name;
    email = email;
    this._id = userId;
  }
}

const user2 = new User2("Lakshman", "laksh@google.com", "123");
// console.log(user2);

// getter and setter

class newUser {
  private _courseCount = 1;
  readonly city: string = "Delhi";
  constructor(
    public name: string,
    public email: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmailId(): string {
    return `apple${this.email}`
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(courseCount: number) { // cannot use any one of the return type
    if (courseCount <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseCount;
  }
}

const laksh = new newUser("Lakshman", "laksh@.com");
laksh.setCourseCount = 4;
console.log(laksh.getCourseCount); // 4
// laksh.deleteToken(); //! error --> private method can't be accessed
console.log(laksh.getAppleEmailId); // applelaksh@.com

export {};
