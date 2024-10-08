const User = {
  name: "Lakshman",
  email: "lakshman.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "lakshman", isPaid: false, email: "lakshman.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
}

createNewUser({ name: "", email: "", isActive: true });

type NewUser = {
  readonly _id: string; // readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: string; // optional
};

let myUser: NewUser = {
  _id: "12345",
  name: "Lakshman",
  email: "lakshman.com",
  isActive: true,
};

myUser.email = "laksh@google.com";
// myUser._id = "1a2bcd3"; //! error: readonly not assignable

type CardNumber = {
  cardNumber: string;
};
type CardDate = {
  cardDate: string;
};
type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

const cardDetails: CardDetails = {
  cardNumber: "123456789",
  cardDate: "12/21",
  cvv: 123,
};
