import bananasImg from '../Pictures/banana.jpg';
import milk2Percent from '../Pictures/milk.jpg';
import almondMilk from '../Pictures/almond-milk.jfif';
import apple from '../Pictures/apple.jpg';
import applePie from '../Pictures/apple-pie.jpg';
import chocolateChipCookiesBox from '../Pictures/chocolate-chip-cookies(box).jpg';
import creamCheese from '../Pictures/cream-cheese.jpg';
import miniMuffinsBox from '../Pictures/mini-muffins(box).jpg';
import pear from '../Pictures/pear.jpg';
import plainYogurt from '../Pictures/plain-yogurt.jpg';
import pumpkinPie from '../Pictures/pumpkin-pie.jpg';
import soyMilk from '../Pictures/soy-milk.jfif';

const ItemsData = [
  {
    img: bananasImg,
    title: 'Bananas',
    category: 'Produce',
    hasTax: true,
    price: 1.5,
  },
  {
    img: milk2Percent,
    title: '2% Milk',
    category: 'Dairy',
    hasTax: true,
    price: 3.25,
  },
  {
    img: almondMilk,
    title: 'Almond Milk',
    category: 'Dairy',
    hasTax: true,
    price: 4,
  },
  {
    img: apple,
    title: 'Apple',
    category: 'Produce',
    hasTax: true,
    price: 1.5,
  },
  {
    img: applePie,
    title: 'Apple Pie',
    category: 'Bakery',
    hasTax: true,
    price: 8,
  },
  {
    img: chocolateChipCookiesBox,
    title: 'Chocolate Chip Cookies (Box)',
    category: 'Bakery',
    hasTax: false,
    price: 7,
  },
  {
    img: creamCheese,
    title: 'Cream Cheese',
    category: 'Dairy',
    hasTax: false,
    price: 3.99,
  },
  {
    img: miniMuffinsBox,
    title: 'Mini Muffins (Box)',
    category: 'Bakery',
    hasTax: false,
    price: 5,
  },
  {
    img: pear,
    title: 'Pear',
    category: 'Produce',
    hasTax: false,
    price: 1.2,
  },
  {
    img: plainYogurt,
    title: 'Plain Yogurt',
    category: 'Dairy',
    hasTax: false,
    price: 3.25,
  },
  {
    img: pumpkinPie,
    title: 'Pumpkin Pie',
    category: 'Bakery',
    hasTax: false,
    price: 7,
  },
  {
    img: soyMilk,
    title: 'Soy Milk',
    category: 'Dairy',
    hasTax: false,
    price: 3,
  },
];

export default ItemsData;
