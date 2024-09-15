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
