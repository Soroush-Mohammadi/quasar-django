export const productCategories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      {
        id: 11,
        name: "Mobile Phones",
        products: [
          {
            id: 111,
            name: "iPhone 13",
            price: 999,
            description: "Latest model of iPhone with advanced features",
            stock: 50,
            imageUrl: "https://example.com/iphone13.jpg",
          },
          {
            id: 112,
            name: "Samsung Galaxy S21",
            price: 799,
            description: "High-end Samsung smartphone",
            stock: 75,
            imageUrl: "https://example.com/galaxys21.jpg",
          },
        ],
      },
      {
        id: 12,
        name: "Laptops",
        products: [
          {
            id: 121,
            name: "MacBook Pro",
            price: 1299,
            description: "Apple's high-performance laptop",
            stock: 30,
            imageUrl: "https://example.com/macbookpro.jpg",
          },
          {
            id: 122,
            name: "Dell XPS 13",
            price: 999,
            description: "Compact and powerful laptop from Dell",
            stock: 40,
            imageUrl: "https://example.com/dellxps13.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Clothing",
    subcategories: [
      {
        id: 21,
        name: "Men's Clothing",
        products: [
          {
            id: 211,
            name: "Men's T-Shirt",
            price: 19.99,
            description: "Comfortable cotton t-shirt",
            stock: 200,
            imageUrl: "https://example.com/menstshirt.jpg",
          },
          {
            id: 212,
            name: "Men's Jeans",
            price: 49.99,
            description: "Stylish denim jeans",
            stock: 100,
            imageUrl: "https://example.com/mensjeans.jpg",
          },
        ],
      },
      {
        id: 22,
        name: "Women's Clothing",
        products: [
          {
            id: 221,
            name: "Women's Dress",
            price: 39.99,
            description: "Elegant evening dress",
            stock: 150,
            imageUrl: "https://example.com/womensdress.jpg",
          },
          {
            id: 222,
            name: "Women's Jacket",
            price: 79.99,
            description: "Warm and stylish jacket",
            stock: 75,
            imageUrl: "https://example.com/womensjacket.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Books",
  },
  {
    id: 4,
    name: "sports",
  },
];
