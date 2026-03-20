import watch from '../assets/Watch.png'
import headphones from '../assets/Headphones.png'
import iphone01 from '../assets/Iphone-12-01.png'
import iphone02 from '../assets/Iphone-12-02.png'
import iphone03 from '../assets/Iphone-12-03.png'
import iphone04 from '../assets/Iphone-12-04.png'
import iphone05 from '../assets/Iphone-12-Pro-01.png'
import iphone06 from '../assets/Iphone-12-Pro-02.png'
import iphone07 from '../assets/Iphone-13-Pro-03.png'
import Macbook from '../assets/Macbook.png'
import SamsungNote21 from '../assets/Samsung-Note21.png'
import SamsungS21 from '../assets/Samsung-S21.png'
import SamsungS21Pro from '../assets/Samsung-S21-Pro.png'
import DellXPS13 from '../assets/Dell-XPS-13-Black.png'



const products = [
  {
    id: 'p1',
    name: 'Apple Watch',
    model: 'Series 5 SE',
    price: 529.99,
    category: 'Wearable Technology',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: watch
  },
  {
    id: 'p2',
    name: 'Sony ZX330BT',
    model: 'Light Grey',
    price: 39.99,
    category: 'Audio',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: headphones
  },
  {
    id: 'p3',
    name: 'Iphone 11',
    model: 'Serious Black',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: iphone01
  },
  {
    id: 'p4',
    name: 'Iphone 11',
    model: 'Subway Blue',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: iphone02
  },
  {
    id: 'p5',
    name: 'Iphone 11',
    model: 'Product Red',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: iphone03
  },
  {
    id: 'p6',
    name: 'Iphone 11',
    model: 'Milky White',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus ac lacus dapibus, vel laoreet ipsum faucibus. Nam blandit ut libero quis molestie. Morbi id eleifend elit. Nunc velit turpis, fermentum sit amet ornare faucibus, fermentum id lacus. Aenean posuere ornare lacinia. Nunc ligula lectus, consectetur a metus nec, dapibus imperdiet risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nunc ipsum lacus, condimentum vitae tristique consectetur, sodales volutpat justo. In sed urna eu ex vulputate dictum ut in orci. Nulla faucibus at justo nec rhoncus. Nam tempus justo eros, molestie posuere odio rutrum vel. Aliquam eleifend dictum eros, sed placerat nisl placerat at. Vestibulum a venenatis tellus. Nam non velit vel felis mattis accumsan sit amet eget tortor. Praesent aliquam quam ligula, a imperdiet velit scelerisque ac. Etiam vel diam at nunc luctus faucibus ut id sapien. Cras pretium mi tellus, ut malesuada urna sollicitudin quis. Proin rutrum vel ligula vel porttitor. Integer vulputate ac odio vel condimentum. Duis enim tellus, porta eu augue tincidunt, efficitur facilisis magna. Mauris interdum risus in urna fermentum ullamcorper. In hac habitasse platea dictumst. In sagittis ac lacus non vulputate. Etiam vitae malesuada urna. Aliquam erat volutpat.',
    image: iphone04
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
    name: 'iPhone 12 Pro',
    model: 'Pink',
    price: 619.99,
    category: 'Electronic Devices',
    shortDescription: 'Powerful smartphone with A14 Bionic chip and Pro camera system.',
    description: 'The iPhone 12 Pro features Apple’s A14 Bionic chip, a stunning Super Retina XDR display, and a triple-camera system with LiDAR for advanced photography and AR experiences. Built with a premium stainless steel frame and Ceramic Shield front, it delivers both durability and high-end performance.',
    image: iphone05
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