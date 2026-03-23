import watch from '../assets/Watch.png'
import headphones from '../assets/Headphones.png'
import iphone01 from '../assets/Iphone-12-01.png'
import iphone02 from '../assets/Iphone-12-Pro-02.png'
import iphone03 from '../assets/Iphone-13-Pro-03.png'
import Macbook from '../assets/Macbook.png'
import SamsungNote21 from '../assets/Samsung-Note21.png'
import SamsungS21 from '../assets/Samsung-S21.png'
import SamsungS21Pro from '../assets/Samsung-S21-Pro.png'
import DellXPS13 from '../assets/Dell-XPS-13-Black.png'



const products = [
  {
    id: 'p1',
    name: 'Apple Watch SE',
    model: '2nd Generation',
    price: 279.99,
    category: 'Wearable Technology',
    shortDescription: 'Affordable smartwatch with essential fitness and health tracking features.',
    description: 'The Apple Watch SE (2nd Generation) offers powerful performance with essential health and fitness features. It includes activity tracking, heart rate monitoring, and seamless integration with the Apple ecosystem, making it ideal for everyday use.',
    image: watch
  },
  {
    id: 'p2',
    name: 'Sony ZX330BT',
    model: 'Light Grey',
    price: 39.99,
    category: 'Audio',
    shortDescription: 'Wireless on-ear headphones with long battery life and lightweight design.',
    description: 'The Sony WH-CH510 wireless headphones offer a comfortable on-ear design with up to 35 hours of battery life. They feature Bluetooth connectivity, quick charging, and a lightweight build, making them ideal for everyday listening and travel.',
    image: headphones
  },
  {
    id: 'p3',
    name: 'iPhone 11',
    model: 'Black',
    price: 619.99,
    category: 'Smartphones',
    shortDescription: 'Reliable smartphone with dual-camera system and strong performance.',
    description: 'The iPhone 11 features a powerful A13 Bionic chip, a dual-camera system for high-quality photos and videos, and a durable design. It offers smooth performance for everyday tasks and remains a popular choice for users seeking value and reliability.',
    image: iphone01
  },
  {
    id: 'p4',
    name: 'iPhone 12 Pro',
    model: 'Pacific Blue',
    price: 999.99,
    category: 'Smartphones',
    shortDescription: 'Premium smartphone with A14 Bionic chip and advanced triple-camera system.',
    description: 'The iPhone 12 Pro features a powerful A14 Bionic chip, a Super Retina XDR display, and a professional-grade triple-camera system with LiDAR for enhanced photography and AR experiences. The Pacific Blue finish adds a sleek and modern look to its premium design.',
    image: iphone02
  },
  {
    id: 'p5',
    name: 'iPhone 13 Pro',
    model: 'Silver',
    price: 1099.99,
    category: 'Smartphones',
    shortDescription: 'High-performance smartphone with ProMotion display and advanced camera system.',
    description: 'The iPhone 13 Pro features Apple’s A15 Bionic chip, a Super Retina XDR display with ProMotion, and a powerful triple-camera system for professional-quality photos and videos. The Silver finish offers a clean and premium look.',
    image: iphone03
  },
  {
    id: 'p6',
    name: 'Samsung Galaxy S21',
    model: 'Phantom Violet',
    price: 799.99,
    category: 'Smartphones',
    shortDescription: 'Flagship smartphone with powerful performance and advanced camera system.',
    description: 'The Samsung Galaxy S21 features a high-performance processor, a dynamic AMOLED display, and a versatile triple-camera system for capturing high-quality photos and videos. Its sleek design and smooth performance make it ideal for everyday use and entertainment.',
    image: SamsungS21
  },
  {
    id: 'p7',
    name: 'Dell XPS 13',
    model: 'Black',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Compact premium laptop with a sleek design and powerful performance',
    description: 'The Dell XPS 13 is a lightweight and high-performance laptop designed for productivity and portability. It features a premium build, high-resolution display, fast processors, and long battery life, making it ideal for students, developers, and professionals.',
    image: DellXPS13
  },
  {
    id: 'p8',
    name: 'Samsung Galaxy S21 Ultra',
    model: 'Phantom Black',
    price: 1199.99,
    category: 'Smartphones',
    shortDescription: 'Premium flagship smartphone with advanced camera and high-end performance.',
    description: 'The Samsung Galaxy S21 Ultra features a powerful processor, a large Dynamic AMOLED display, and a professional-grade camera system with high zoom capabilities. It is designed for users who want top-tier performance, photography, and productivity.',
    image: SamsungS21Pro
  },
  {
    id: 'p9',
    name: 'Macbook Air',
    model: 'M2 (Midnight)',
    price: 1199.99,
    category: 'Electronic Devices',
    shortDescription: 'Ultra-thin laptop powered by Apple’s M2 chip for fast and efficient performance.',
    description: 'The MacBook Air with M2 chip delivers exceptional performance in a thin and lightweight design. It features a stunning Liquid Retina display, long battery life, and a silent fanless design. Ideal for students, developers, and professionals who need portability without compromising power.',
    image: Macbook
  },
  {
    id: 'p10',
    name: 'Samsung Note 21',
    model: 'Galaxy Note 20 Ultra',
    price: 1299.99,
    category: 'Electronic Devices',
    shortDescription: 'Premium smartphone with S Pen and powerful performance.',
    description: 'The Samsung Galaxy Note 20 Ultra features a large AMOLED display, powerful processor, and the signature S Pen for productivity and creativity. It is designed for users who want a combination of performance, multitasking, and stylus functionality.',
    image: SamsungNote21
  },
  
]

export default products;