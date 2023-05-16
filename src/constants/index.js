import { feature1, feature2, feature3, audia1, golf, camry, bmw320, benz, passatcc, service1,service2,service3 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "#home"
  },
  {
    id: "booking",
    title: "Booking",
    link: "#booking"
  },
  {
    id: "vehicles",
    title: "Vehicles",
    link: '#rental_fleet'
  },
  {
    id: "testimonials",
    title: "Testimonials",
    link: '#testimonials'
  },
  {
    id: "faq",
    title: "FAQ",
    link: '#faq'
  },
  {
    id: "contact",
    title: "Contact",
    link: '#footer'
  },
];

export const selectComboBoxInfo = [
  {
    id: 'carType',
    icon: 'fa-solid fa-car text-primary',
    label: 'Select Your Car Type',
    defaultOption: 'Select your car type',
    value: ['Audi A1 S-Line', 'VW Golf 6', 'Toyota Camry', 'BMW 320 Modern Line', 'Mercedes-Benz GLK', 'VW Passat CC']
  },
  {
    id: 'pickUp',
    icon: 'fa-solid fa-location-dot text-primary',
    label: 'Pick-up',
    defaultOption: 'Select pick up location',
    value: ['Belgrade', 'Novi Sad', 'Nis', 'Kragu', 'Subotica']
  },
  {
    id: 'dropOff',
    icon: 'fa-solid fa-location-dot text-primary',
    label: 'Drop-off',
    defaultOption: 'Select drop off location',
    value: ['Subotica', 'Belgrade', 'Novi Sad', 'Nis', 'Kragu']
  },
];

export const features = [
  {
    id: 'f1',
    img: feature1,
    title: 'Select Car',
    content: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs'
  },
  {
    id: 'f2',
    img: feature2,
    title: 'Contact Operator',
    content: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
  },
  {
    id: 'f3',
    img: feature3,
    title: "Let's Drive",
    content: "Whether you're hitting the open road, we've got you covered with our wide range of cars"
  },
];

export const cars = [
  {
    id: 'audi_a1_s-line',
    price: '$45',
    img: audia1,
    mark: 'Audi',
    model: 'A1 S-line',
    year: 2012,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: 'vw_golf_6',
    price: '$37',
    img: golf,
    mark: 'VW',
    model: 'Golf 6',
    year: 2008,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 'toyota_camry',
    price: '$40',
    img: camry,
    mark: 'Toyota',
    model: 'Camry',
    year: 2018,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: 'bmw_320_modernline',
    price: '$35',
    img: bmw320,
    mark: 'BMW',
    model: '320',
    year: 2012,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 'mercedes-benz_glk',
    price: '$50',
    img: benz,
    mark: 'Mercedes-Benz',
    model: 'GLK',
    year: 2006,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 'vw_passatcc',
    price: '$25',
    img: passatcc,
    mark: 'Volkswagen',
    model: 'Passat CC',
    year: 2008,
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Gasoline',
  },
];

export const services = [
  {
    id: '1',
    img: service1,
    title: 'Cross Country Drive',
    content: 'Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.'
  },
  {
    id: '2',
    img: service2,
    title: 'All Inclusive Pricing',
    content: 'Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.'
  },
  {
    id: '3',
    img: service3,
    title: 'No Hidden Charges',
    content: 'Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.'
  },
];

export const accordionData = [ 
  {
    id: 'faq1',
    title: '1. What is special about comparing rental car deals?',
    content: `Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, 
    ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, 
    additional services, or better car models. 
    You can find car rental deals by researching online and comparing prices from different rental companies.`
  },
  {
    id: 'faq2',
    title: '2. How do I find the car rental deals?',
    content: `You can find car rental deals by researching online and comparing prices from different rental companies. 
    Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. 
    It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.`
  },
  {
    id: 'faq3',
    title: '3. How do I find such low rental car prices?',
    content: `Book in advance: Booking your rental car ahead of time can often result in lower prices. 
    Compare prices from multiple companies: Use websites like Kayak, Expedia,
    or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. 
    Renting from an off-airport location can sometimes result in lower prices.`
  },
];

export const footerLinks = [
  {
    name: "New York",
    link: "#",
  },
  {
    name: "Careers",
    link: "#",
  },
  {
    name: "Mobile",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "How we work",
    link: "#",
  },
];

