import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@maiil.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "joe User",
    email: "joe@maiil.com",
    password: bcrypt.hashSync("user", 10),
  },
  {
    name: "jane User",
    email: "jane@maiil.com",
    password: bcrypt.hashSync("user", 10),
  },
];

export default users;
