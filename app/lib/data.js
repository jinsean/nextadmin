import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  // i mean it is case insensitive
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Register Users",
    number: 100000,
    change: 12,
  },
  {
    id: 2,
    title: "Free Cash Flow",
    number: "MYR 4.5 Million",
    change: -2,
  },
  {
    id: 3,
    title: "Active Project",
    number: 100,
    change: 10,
  },
];

export const cardsProject = [
  {
    id: 1,
    img:"/solar.jpg",
    title: "Kedah Solar Farm",
    roi: "10%",
    noi: "10000",
    toi:"MYR 1.2 Million"
  },
  {
    id: 2,
    img:"/charge.jpg",
    title: "Mcd Bayan Baru Charging Station",
    roi: "20%",
    noi: "200",
    toi:"MYR 0.5 Million"

  },

];

export const cardsPortfolio = [
  {
    id: 1,
    title: "Net Liquidation Value",
    number: "MYR 5000",
  },
  {
    id: 2,
    title: "Cash Balance",
    number: "MYR 3000",
  },
  {
    id: 3,
    title: "Invested project",
    number: 2,
  },

];