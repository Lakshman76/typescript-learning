var User = {
    name: "Lakshman",
    email: "lakshman.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "lakshman", isPaid: false, email: "lakshman.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createNewUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
createNewUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "Lakshman",
    email: "lakshman.com",
    isActive: true,
};
myUser.email = "laksh@google.com";
var cardDetails = {
    cardNumber: "123456789",
    cardDate: "12/21",
    cvv: 123,
};
