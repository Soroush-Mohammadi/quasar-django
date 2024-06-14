const categories = [
  {
    category: "Electronics",
    products: [
      {
        name: "Smartphone",
        description: "A high-end smartphone with a large display and powerful processor.",
        price: 799,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Laptop",
        description: "A lightweight laptop with long battery life and high performance.",
        price: 999,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Tablet",
        description: "A versatile tablet suitable for work and entertainment.",
        price: 499,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Smartwatch",
        description: "A smartwatch with fitness tracking and notification features.",
        price: 199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Bluetooth Speaker",
        description: "A portable Bluetooth speaker with excellent sound quality.",
        price: 99,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Wireless Earbuds",
        description: "Compact and comfortable wireless earbuds with great sound.",
        price: 149,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Smart TV",
        description: "A 55-inch smart TV with 4K resolution and streaming capabilities.",
        price: 699,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Gaming Console",
        description: "A next-gen gaming console with stunning graphics and performance.",
        price: 499,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Digital Camera",
        description: "A digital camera with high resolution and multiple features.",
        price: 599,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Drone",
        description: "A drone with a high-quality camera and long flight time.",
        price: 399,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Home Appliances",
    products: [
      {
        name: "Refrigerator",
        description: "A large refrigerator with a freezer compartment and adjustable shelves.",
        price: 1199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Washing Machine",
        description: "A front-load washing machine with multiple wash settings.",
        price: 699,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Microwave Oven",
        description: "A microwave oven with advanced cooking functions.",
        price: 199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Air Conditioner",
        description: "A high-efficiency air conditioner with remote control.",
        price: 599,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Vacuum Cleaner",
        description: "A powerful vacuum cleaner with multiple attachments.",
        price: 249,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dishwasher",
        description: "A quiet and efficient dishwasher with adjustable racks.",
        price: 699,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Electric Kettle",
        description: "A fast-boiling electric kettle with temperature control.",
        price: 49,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Toaster",
        description: "A 4-slice toaster with adjustable browning settings.",
        price: 39,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Coffee Maker",
        description: "A programmable coffee maker with a built-in grinder.",
        price: 99,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Blender",
        description: "A high-speed blender with multiple blending modes.",
        price: 89,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Furniture",
    products: [
      {
        name: "Sofa",
        description: "A comfortable and stylish sofa with removable cushions.",
        price: 899,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dining Table",
        description: "A solid wood dining table that seats six people.",
        price: 599,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Bed Frame",
        description: "A sturdy bed frame with a modern design.",
        price: 299,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Office Chair",
        description: "An ergonomic office chair with lumbar support.",
        price: 149,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Wardrobe",
        description: "A spacious wardrobe with hanging space and shelves.",
        price: 499,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Bookshelf",
        description: "A tall bookshelf with adjustable shelves.",
        price: 199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "TV Stand",
        description: "A TV stand with storage compartments and cable management.",
        price: 149,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Coffee Table",
        description: "A sleek coffee table with a glass top.",
        price: 99,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dresser",
        description: "A wooden dresser with six drawers.",
        price: 299,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Nightstand",
        description: "A compact nightstand with a drawer and shelf.",
        price: 79,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Clothing",
    products: [
      {
        name: "T-shirt",
        description: "A soft cotton T-shirt available in multiple colors.",
        price: 19,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Jeans",
        description: "A pair of slim-fit jeans with a classic design.",
        price: 49,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Jacket",
        description: "A stylish jacket suitable for all seasons.",
        price: 89,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Sweater",
        description: "A warm sweater made from high-quality wool.",
        price: 59,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dress",
        description: "A beautiful dress perfect for any occasion.",
        price: 79,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Skirt",
        description: "A fashionable skirt available in various patterns.",
        price: 39,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Blouse",
        description: "A chic blouse with intricate detailing.",
        price: 49,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Shorts",
        description: "Comfortable shorts for casual wear.",
        price: 29,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Socks",
        description: "A pack of soft and durable socks.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Sneakers",
        description: "Stylish and comfortable sneakers for everyday use.",
        price: 69,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Beauty & Personal Care",
    products: [
      {
        name: "Shampoo",
        description: "A nourishing shampoo for all hair types.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Conditioner",
        description: "A hydrating conditioner that leaves hair soft and smooth.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Face Wash",
        description: "A gentle face wash that cleanses and refreshes.",
        price: 10,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Moisturizer",
        description: "A lightweight moisturizer that hydrates and protects skin.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Sunscreen",
        description: "A broad-spectrum sunscreen with SPF 50.",
        price: 25,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Lip Balm",
        description: "A moisturizing lip balm with a hint of color.",
        price: 5,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Perfume",
        description: "A long-lasting perfume with a floral scent.",
        price: 50,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Body Lotion",
        description: "A rich body lotion that nourishes and softens skin.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Hair Dryer",
        description: "A powerful hair dryer with multiple heat settings.",
        price: 40,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Electric Shaver",
        description: "A rechargeable electric shaver for a close and comfortable shave.",
        price: 60,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Sports & Outdoors",
    products: [
      {
        name: "Bicycle",
        description: "A lightweight bicycle with a durable frame and smooth ride.",
        price: 499,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Tennis Racket",
        description: "A high-performance tennis racket suitable for all levels.",
        price: 129,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Yoga Mat",
        description: "A non-slip yoga mat with extra cushioning.",
        price: 30,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Running Shoes",
        description: "Comfortable and supportive running shoes for long distances.",
        price: 79,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dumbbells",
        description: "A set of adjustable dumbbells for strength training.",
        price: 99,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Camping Tent",
        description: "A spacious and weather-resistant camping tent.",
        price: 199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Hiking Backpack",
        description: "A durable and comfortable hiking backpack with multiple pockets.",
        price: 89,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Swimming Goggles",
        description: "Anti-fog and UV-protected swimming goggles.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Fitness Tracker",
        description: "A fitness tracker with heart rate monitoring and GPS.",
        price: 99,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Skateboard",
        description: "A durable skateboard with a stylish design.",
        price: 59,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Books",
    products: [
      {
        name: "Fiction Novel",
        description: "A captivating fiction novel by a bestselling author.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Non-Fiction Book",
        description: "An informative non-fiction book on a popular topic.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Mystery Novel",
        description: "A thrilling mystery novel with unexpected twists.",
        price: 18,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Science Fiction Book",
        description: "A science fiction book set in a futuristic world.",
        price: 22,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Biography",
        description: "An inspiring biography of a famous personality.",
        price: 25,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Self-Help Book",
        description: "A self-help book with practical advice and tips.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Cookbook",
        description: "A cookbook with delicious recipes and beautiful photos.",
        price: 30,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Graphic Novel",
        description: "A graphic novel with stunning artwork and a gripping story.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Children's Book",
        description: "A charming children's book with colorful illustrations.",
        price: 10,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Textbook",
        description: "A comprehensive textbook for students of all levels.",
        price: 50,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Toys & Games",
    products: [
      {
        name: "Action Figure",
        description: "A detailed action figure from a popular franchise.",
        price: 25,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Board Game",
        description: "A fun and challenging board game for the whole family.",
        price: 35,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Puzzle",
        description: "A 1000-piece puzzle with a beautiful image.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Lego Set",
        description: "A creative Lego set with various building options.",
        price: 60,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Stuffed Animal",
        description: "A cuddly stuffed animal for children of all ages.",
        price: 15,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "RC Car",
        description: "A remote-controlled car with high-speed capabilities.",
        price: 50,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dollhouse",
        description: "A beautifully detailed dollhouse with furniture.",
        price: 100,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Play-Doh",
        description: "A colorful Play-Doh set with various tools.",
        price: 10,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Nerf Gun",
        description: "A Nerf gun with foam darts for safe play.",
        price: 30,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Video Game",
        description: "A popular video game for a gaming console.",
        price: 60,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Automotive",
    products: [
      {
        name: "Car Tires",
        description: "High-quality car tires for improved traction and safety.",
        price: 100,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Engine Oil",
        description: "Premium engine oil for optimal engine performance.",
        price: 30,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Car Battery",
        description: "A reliable car battery with a long lifespan.",
        price: 120,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "GPS Navigator",
        description: "A GPS navigator with real-time traffic updates.",
        price: 150,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Car Vacuum Cleaner",
        description: "A compact car vacuum cleaner with powerful suction.",
        price: 40,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Dash Cam",
        description: "A dash cam with high-definition recording and night vision.",
        price: 80,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Roof Rack",
        description: "A durable roof rack for additional storage space.",
        price: 200,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Seat Covers",
        description: "Comfortable and stylish seat covers for your car.",
        price: 50,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Steering Wheel Cover",
        description: "A steering wheel cover with a non-slip grip.",
        price: 20,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Car Air Freshener",
        description: "A long-lasting car air freshener with a pleasant scent.",
        price: 10,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  },
  {
    category: "Garden & Outdoor",
    products: [
      {
        name: "Lawn Mower",
        description: "A powerful lawn mower for a well-maintained lawn.",
        price: 299,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Garden Hose",
        description: "A durable garden hose with adjustable spray settings.",
        price: 50,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Patio Furniture",
        description: "A stylish patio furniture set for outdoor relaxation.",
        price: 499,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Grill",
        description: "A high-quality grill for perfect barbecues.",
        price: 199,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Garden Tools Set",
        description: "A set of essential garden tools for all your gardening needs.",
        price: 75,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Planters",
        description: "Decorative planters for your indoor and outdoor plants.",
        price: 40,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Hammock",
        description: "A comfortable hammock for relaxing in your garden.",
        price: 60,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Fire Pit",
        description: "A stylish fire pit for outdoor gatherings.",
        price: 150,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Outdoor Lighting",
        description: "Energy-efficient outdoor lighting for your garden.",
        price: 100,
        imageUrl: "https://placehold.co/600x400"
      },
      {
        name: "Bird Feeder",
        description: "An attractive bird feeder to attract birds to your garden.",
        price: 30,
        imageUrl: "https://placehold.co/600x400"
      }
    ]
  }
];

console.log(categories);
