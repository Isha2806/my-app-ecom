import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    image: "/product-images/watches/watch-band-1.jpg",

    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    image: "/product-images/watches/watch-band-1.jpg",

    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    image: "/product-images/watches/watch-band-1.jpg",

    price: "1000",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    image: "/product-images/watches/watch-band-2.jpg",

    price: "1000",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    image: "/product-images/watches/watch-band-1.jpg",

    price: "1000",
    categoryName: "fiction",
  },
];
