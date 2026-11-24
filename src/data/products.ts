import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright and floral with notes of jasmine and bergamot',
    longDescription: 'Grown at elevations above 1,900 meters in the birthplace of coffee, this Ethiopian Yirgacheffe is a washed-process gem. The beans are carefully hand-selected and processed using traditional methods that preserve the delicate floral characteristics. Expect a bright, tea-like body with an exquisite aromatic profile that unfolds with each sip.',
    price: 24.99,
    category: 'Single Origin',
    origin: 'Ethiopia',
    roast: 'Light',
    notes: ['Jasmine', 'Bergamot', 'Lemon Zest', 'Honey'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    description: 'Rich and balanced with caramel sweetness and cocoa finish',
    longDescription: 'Sourced from the high-altitude regions of Huila, Colombia, this Supremo grade coffee represents the pinnacle of Colombian coffee craftsmanship. Grown by smallholder farmers who have perfected their techniques over generations, each bean is sun-dried on raised beds to develop its characteristic sweetness. The cup is full-bodied with a velvety mouthfeel.',
    price: 21.99,
    category: 'Single Origin',
    origin: 'Colombia',
    roast: 'Medium',
    notes: ['Caramel', 'Cocoa', 'Red Apple', 'Walnut'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Artisan Espresso Blend',
    description: 'Bold and complex with dark chocolate and roasted hazelnut',
    longDescription: 'Our signature espresso blend combines beans from three continents to create a symphony of flavors optimized for espresso extraction. Brazilian Santos provides the foundation with its nutty sweetness, while Guatemalan Antigua adds depth and smokiness, and a touch of Indonesian Sumatra contributes body and earthiness. Perfect for milk-based drinks.',
    price: 19.99,
    category: 'Blend',
    origin: 'Brazil, Guatemala, Indonesia',
    roast: 'Dark',
    notes: ['Dark Chocolate', 'Roasted Hazelnut', 'Molasses', 'Smoky'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Kenya AA Nyeri',
    description: 'Vibrant acidity with blackcurrant and grapefruit notes',
    longDescription: 'This exceptional Kenya AA comes from the renowned Nyeri region, where volcanic soils and ideal climate conditions produce some of the world\'s most sought-after coffees. The AA grade indicates the largest bean size, ensuring uniform roasting and extraction. Processed using the double fermentation method, this coffee delivers an unforgettable cup with wine-like complexity.',
    price: 27.99,
    category: 'Single Origin',
    origin: 'Kenya',
    roast: 'Light-Medium',
    notes: ['Blackcurrant', 'Grapefruit', 'Tomato', 'Brown Sugar'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Morning Ritual Blend',
    description: 'Smooth and approachable with milk chocolate and toasted almond',
    longDescription: 'Designed for your daily cup, this carefully crafted blend offers consistency and approachability without sacrificing quality. We combine washed Central American beans for clarity and brightness with a portion of natural-process Brazilian coffee for sweetness and body. The result is a versatile coffee that shines whether brewed as drip, French press, or pour-over.',
    price: 17.99,
    category: 'Blend',
    origin: 'Guatemala, Brazil',
    roast: 'Medium',
    notes: ['Milk Chocolate', 'Toasted Almond', 'Vanilla', 'Caramel'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Sumatra Mandheling',
    description: 'Earthy and full-bodied with cedar, spice, and dark cocoa',
    longDescription: 'From the lush highlands of northern Sumatra, this Mandheling coffee is processed using the traditional Giling Basah (wet-hulled) method unique to Indonesia. This creates the distinctive earthy, full-bodied character that has made Sumatran coffees legendary. The beans are grown by smallholder farmers in the Lake Toba region at elevations between 1,100 and 1,600 meters.',
    price: 23.99,
    category: 'Single Origin',
    origin: 'Indonesia',
    roast: 'Dark',
    notes: ['Cedar', 'Dark Cocoa', 'Black Pepper', 'Tobacco'],
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&h=400&fit=crop'
  }
];

export const categories = ['All', 'Single Origin', 'Blend'];
export const roastLevels = ['All', 'Light', 'Light-Medium', 'Medium', 'Dark'];
