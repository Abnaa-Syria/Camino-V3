import type {
  Collection,
  Destination,
  Trip,
  Article,
  FAQ,
  Review,
} from '../types';
import {
  getDestinationImage,
  getImageByIndex,
  getMultipleImages,
  getImageByKeyword,
} from '../lib/images';

// Collections - using local images
export const staticCollections: Collection[] = [
  {
    id: '1',
    slug: 'short-breaks-by-train',
    title: 'Short Breaks by Train',
    description: 'Weekend getaways and quick escapes accessible by rail',
    imageUrl: getImageByIndex(0),
  },
  {
    id: '2',
    slug: 'coastal-journeys',
    title: 'Coastal Journeys',
    description: 'Follow the coastline through charming seaside towns',
    imageUrl: getImageByIndex(1),
  },
  {
    id: '3',
    slug: 'mountain-escapes',
    title: 'Mountain Escapes',
    description: 'Alpine adventures and high-altitude explorations',
    imageUrl: getImageByIndex(2),
  },
  {
    id: '4',
    slug: 'cultural-capitals',
    title: 'Cultural Capitals',
    description: 'Discover art, history, and cuisine in Europe\'s great cities',
    imageUrl: getImageByIndex(3),
  },
  {
    id: '5',
    slug: 'rural-retreats',
    title: 'Rural Retreats',
    description: 'Peaceful countryside journeys through pastoral landscapes',
    imageUrl: getImageByIndex(4),
  },
  {
    id: '6',
    slug: 'wine-regions',
    title: 'Wine Regions',
    description: 'Vineyard tours and tastings in renowned wine country',
    imageUrl: getImageByIndex(5),
  },
  {
    id: '7',
    slug: 'northern-lights',
    title: 'Northern Lights',
    description: 'Arctic adventures and aurora hunting in the far north',
    imageUrl: getImageByIndex(6),
  },
  {
    id: '8',
    slug: 'island-hopping',
    title: 'Island Hopping',
    description: 'Explore Mediterranean islands by ferry and train',
    imageUrl: getImageByIndex(7),
  },
  {
    id: '9',
    slug: 'historic-railways',
    title: 'Historic Railways',
    description: 'Journey on scenic heritage lines and classic routes',
    imageUrl: getImageByIndex(8),
  },
  {
    id: '10',
    slug: 'winter-wonderlands',
    title: 'Winter Wonderlands',
    description: 'Snow-covered landscapes and festive markets',
    imageUrl: getImageByIndex(9),
  },
  {
    id: '11',
    slug: 'spring-blossoms',
    title: 'Spring Blossoms',
    description: 'Cherry blossoms and wildflower meadows in bloom',
    imageUrl: getImageByIndex(0),
  },
  {
    id: '12',
    slug: 'autumn-colors',
    title: 'Autumn Colors',
    description: 'Fall foliage tours through golden landscapes',
    imageUrl: getImageByIndex(1),
  },
];

// Destinations
export const staticDestinations: Destination[] = [
  {
    id: '1',
    slug: 'scotland',
    name: 'Scotland',
    region: 'UK & Ireland',
    country: 'United Kingdom',
    description: 'Dramatic highlands and ancient castles',
    imageUrl: getDestinationImage('scotland'),
    coordinates: { lat: 56.4907, lng: -4.2026 },
  },
  {
    id: '2',
    slug: 'france',
    name: 'France',
    region: 'Western Europe',
    country: 'France',
    description: 'Art, cuisine, and romance',
    imageUrl: getDestinationImage('france'),
    coordinates: { lat: 46.6034, lng: 1.8883 },
  },
  {
    id: '3',
    slug: 'italy',
    name: 'Italy',
    region: 'Southern Europe',
    country: 'Italy',
    description: 'Historic cities and Mediterranean coast',
    imageUrl: getDestinationImage('italy'),
    coordinates: { lat: 41.8719, lng: 12.5674 },
  },
  {
    id: '4',
    slug: 'spain',
    name: 'Spain',
    region: 'Southern Europe',
    country: 'Spain',
    description: 'Vibrant culture and stunning coastlines',
    imageUrl: getDestinationImage('spain'),
    coordinates: { lat: 40.4637, lng: -3.7492 },
  },
  {
    id: '5',
    slug: 'switzerland',
    name: 'Switzerland',
    region: 'Northern Europe',
    country: 'Switzerland',
    description: 'Alpine peaks and pristine lakes',
    imageUrl: getDestinationImage('switzerland'),
    coordinates: { lat: 46.8182, lng: 8.2275 },
  },
  {
    id: '6',
    slug: 'austria',
    name: 'Austria',
    region: 'Northern Europe',
    country: 'Austria',
    description: 'Baroque architecture and mountain vistas',
    imageUrl: getDestinationImage('austria'),
    coordinates: { lat: 47.5162, lng: 14.5501 },
  },
  {
    id: '7',
    slug: 'england',
    name: 'England',
    region: 'UK & Ireland',
    country: 'United Kingdom',
    description: 'Historic cities and rolling countryside',
    imageUrl: getDestinationImage('england'),
    coordinates: { lat: 52.3555, lng: -1.1743 },
  },
  {
    id: '8',
    slug: 'germany',
    name: 'Germany',
    region: 'Northern Europe',
    country: 'Germany',
    description: 'Medieval towns and modern innovation',
    imageUrl: getDestinationImage('germany'),
    coordinates: { lat: 51.1657, lng: 10.4515 },
  },
  {
    id: '9',
    slug: 'portugal',
    name: 'Portugal',
    region: 'Southern Europe',
    country: 'Portugal',
    description: 'Golden beaches and historic architecture',
    imageUrl: getDestinationImage('portugal'),
    coordinates: { lat: 39.3999, lng: -8.2245 },
  },
  {
    id: '10',
    slug: 'ireland',
    name: 'Ireland',
    region: 'UK & Ireland',
    country: 'Ireland',
    description: 'Emerald landscapes and warm hospitality',
    imageUrl: getDestinationImage('ireland'),
    coordinates: { lat: 53.4129, lng: -8.2439 },
  },
  {
    id: '11',
    slug: 'belgium',
    name: 'Belgium',
    region: 'Northern Europe',
    country: 'Belgium',
    description: 'Medieval cities and world-class cuisine',
    imageUrl: getDestinationImage('belgium'),
    coordinates: { lat: 50.5039, lng: 4.4699 },
  },
  {
    id: '12',
    slug: 'netherlands',
    name: 'Netherlands',
    region: 'Northern Europe',
    country: 'Netherlands',
    description: 'Canals, tulips, and cycling culture',
    imageUrl: getDestinationImage('netherlands'),
    coordinates: { lat: 52.1326, lng: 5.2913 },
  },
  {
    id: '13',
    slug: 'denmark',
    name: 'Denmark',
    region: 'Northern Europe',
    country: 'Denmark',
    description: 'Scandinavian design and coastal charm',
    imageUrl: getDestinationImage('denmark'),
    coordinates: { lat: 56.2639, lng: 9.5018 },
  },
  {
    id: '14',
    slug: 'sweden',
    name: 'Sweden',
    region: 'Northern Europe',
    country: 'Sweden',
    description: 'Arctic landscapes and modern cities',
    imageUrl: getDestinationImage('sweden'),
    coordinates: { lat: 60.1282, lng: 18.6435 },
  },
  {
    id: '15',
    slug: 'norway',
    name: 'Norway',
    region: 'Northern Europe',
    country: 'Norway',
    description: 'Fjords, mountains, and northern lights',
    imageUrl: getDestinationImage('norway'),
    coordinates: { lat: 60.472, lng: 8.4689 },
  },
  {
    id: '16',
    slug: 'poland',
    name: 'Poland',
    region: 'Eastern Europe',
    country: 'Poland',
    description: 'Medieval architecture and vibrant culture',
    imageUrl: getDestinationImage('poland'),
    coordinates: { lat: 51.9194, lng: 19.1451 },
  },
  {
    id: '17',
    slug: 'czech-republic',
    name: 'Czech Republic',
    region: 'Eastern Europe',
    country: 'Czech Republic',
    description: 'Bohemian cities and historic charm',
    imageUrl: getDestinationImage('prague,czech'),
    coordinates: { lat: 49.8175, lng: 15.473 },
  },
  {
    id: '18',
    slug: 'greece',
    name: 'Greece',
    region: 'Southern Europe',
    country: 'Greece',
    description: 'Ancient ruins and island paradise',
    imageUrl: getDestinationImage('greece'),
    coordinates: { lat: 39.0742, lng: 21.8243 },
  },
  {
    id: '19',
    slug: 'croatia',
    name: 'Croatia',
    region: 'Southern Europe',
    country: 'Croatia',
    description: 'Adriatic coast and historic walled cities',
    imageUrl: getDestinationImage('croatia'),
    coordinates: { lat: 45.1, lng: 15.2 },
  },
  {
    id: '20',
    slug: 'slovenia',
    name: 'Slovenia',
    region: 'Southern Europe',
    country: 'Slovenia',
    description: 'Alpine lakes and medieval towns',
    imageUrl: getDestinationImage('slovenia'),
    coordinates: { lat: 46.1512, lng: 14.9955 },
  },
  {
    id: '21',
    slug: 'finland',
    name: 'Finland',
    region: 'Northern Europe',
    country: 'Finland',
    description: 'Lakes, saunas, and midnight sun',
    imageUrl: getDestinationImage('finland'),
    coordinates: { lat: 61.9241, lng: 25.7482 },
  },
  {
    id: '22',
    slug: 'iceland',
    name: 'Iceland',
    region: 'Northern Europe',
    country: 'Iceland',
    description: 'Volcanoes, geysers, and dramatic landscapes',
    imageUrl: getDestinationImage('iceland'),
    coordinates: { lat: 64.9631, lng: -19.0208 },
  },
  {
    id: '23',
    slug: 'london',
    name: 'London',
    region: 'UK & Ireland',
    country: 'United Kingdom',
    description: 'Historic capital with modern energy',
    imageUrl: getDestinationImage('london'),
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: '24',
    slug: 'paris',
    name: 'Paris',
    region: 'Western Europe',
    country: 'France',
    description: 'City of light and romance',
    imageUrl: getDestinationImage('paris'),
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: '25',
    slug: 'rome',
    name: 'Rome',
    region: 'Southern Europe',
    country: 'Italy',
    description: 'Eternal city of history and art',
    imageUrl: getDestinationImage('rome'),
    coordinates: { lat: 41.9028, lng: 12.4964 },
  },
];

// Trips - generating 30 trips
export const staticTrips: Trip[] = [
  {
    id: '1',
    slug: 'scottish-highlands-explorer',
    title: 'Scottish Highlands Explorer',
    description: 'Journey through dramatic glens and ancient castles',
    routeCities: ['Edinburgh', 'Inverness', 'Fort William', 'Glasgow'],
    priceFrom: 450,
    currency: 'EUR',
    durationDays: 7,
    heroImage: getImageByIndex(0),
    images: getMultipleImages(4, 'scottish-highlands'),
    stops: [
      {
        id: '1',
        city: 'Edinburgh',
        country: 'UK',
        nights: 2,
        coordinates: { lat: 55.9533, lng: -3.1883 },
      },
      {
        id: '2',
        city: 'Inverness',
        country: 'UK',
        nights: 2,
        coordinates: { lat: 57.4778, lng: -4.2247 },
      },
      {
        id: '3',
        city: 'Fort William',
        country: 'UK',
        nights: 1,
        coordinates: { lat: 56.8198, lng: -5.1052 },
      },
      {
        id: '4',
        city: 'Glasgow',
        country: 'UK',
        nights: 1,
        coordinates: { lat: 55.8642, lng: -4.2518 },
      },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 45,
    co2Unit: 'kg',
    region: 'UK & Ireland',
    country: 'United Kingdom',
    pace: 'moderate',
    collection: 'short-breaks-by-train',
  },
  {
    id: '2',
    slug: 'paris-to-provence',
    title: 'Paris to Provence',
    description: 'From the capital to lavender fields and hilltop villages',
    routeCities: ['Paris', 'Lyon', 'Avignon', 'Aix-en-Provence'],
    priceFrom: 680,
    currency: 'EUR',
    durationDays: 9,
    heroImage: getImageByIndex(1),
    images: getMultipleImages(4, 'paris-provence'),
    stops: [
      {
        id: '1',
        city: 'Paris',
        country: 'France',
        nights: 2,
        coordinates: { lat: 48.8566, lng: 2.3522 },
      },
      {
        id: '2',
        city: 'Lyon',
        country: 'France',
        nights: 2,
        coordinates: { lat: 45.764, lng: 4.8357 },
      },
      {
        id: '3',
        city: 'Avignon',
        country: 'France',
        nights: 2,
        coordinates: { lat: 43.9493, lng: 4.8055 },
      },
      {
        id: '4',
        city: 'Aix-en-Provence',
        country: 'France',
        nights: 2,
        coordinates: { lat: 43.5297, lng: 5.4474 },
      },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 72,
    co2Unit: 'kg',
    region: 'Western Europe',
    country: 'France',
    pace: 'relaxed',
  },
  {
    id: '3',
    slug: 'venice-florence-rome',
    title: 'Venice, Florence & Rome',
    description: 'Italy\'s iconic cities linked by rail',
    routeCities: ['Venice', 'Florence', 'Rome'],
    priceFrom: 890,
    currency: 'EUR',
    durationDays: 8,
    heroImage: getImageByIndex(2),
    images: getMultipleImages(4, 'venice-florence-rome'),
    stops: [
      {
        id: '1',
        city: 'Venice',
        country: 'Italy',
        nights: 2,
        coordinates: { lat: 45.4408, lng: 12.3155 },
      },
      {
        id: '2',
        city: 'Florence',
        country: 'Italy',
        nights: 3,
        coordinates: { lat: 43.7696, lng: 11.2558 },
      },
      {
        id: '3',
        city: 'Rome',
        country: 'Italy',
        nights: 2,
        coordinates: { lat: 41.9028, lng: 12.4964 },
      },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 65,
    co2Unit: 'kg',
    region: 'Southern Europe',
    country: 'Italy',
    pace: 'moderate',
    collection: 'cultural-capitals',
  },
  {
    id: '4',
    slug: 'barcelona-coast',
    title: 'Barcelona & Costa Brava',
    description: 'Mediterranean coast from city to beach',
    routeCities: ['Barcelona', 'Girona', 'Cadaqués'],
    priceFrom: 520,
    currency: 'EUR',
    durationDays: 6,
    heroImage: getImageByIndex(3),
    images: getMultipleImages(3, 'barcelona-coast'),
    stops: [
      {
        id: '1',
        city: 'Barcelona',
        country: 'Spain',
        nights: 3,
        coordinates: { lat: 41.3851, lng: 2.1734 },
      },
      {
        id: '2',
        city: 'Girona',
        country: 'Spain',
        nights: 1,
        coordinates: { lat: 41.9794, lng: 2.8214 },
      },
      {
        id: '3',
        city: 'Cadaqués',
        country: 'Spain',
        nights: 1,
        coordinates: { lat: 42.2885, lng: 3.2779 },
      },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 38,
    co2Unit: 'kg',
    region: 'Southern Europe',
    country: 'Spain',
    pace: 'relaxed',
    collection: 'coastal-journeys',
  },
  {
    id: '5',
    slug: 'swiss-alps-express',
    title: 'Swiss Alps Express',
    description: 'Mountain railways through pristine alpine landscapes',
    routeCities: ['Zurich', 'Interlaken', 'Zermatt', 'Geneva'],
    priceFrom: 920,
    currency: 'EUR',
    durationDays: 8,
    heroImage: getImageByIndex(4),
    images: getMultipleImages(4, 'swiss-alps'),
    stops: [
      {
        id: '1',
        city: 'Zurich',
        country: 'Switzerland',
        nights: 1,
        coordinates: { lat: 47.3769, lng: 8.5417 },
      },
      {
        id: '2',
        city: 'Interlaken',
        country: 'Switzerland',
        nights: 2,
        coordinates: { lat: 46.6863, lng: 7.8632 },
      },
      {
        id: '3',
        city: 'Zermatt',
        country: 'Switzerland',
        nights: 2,
        coordinates: { lat: 46.0207, lng: 7.7491 },
      },
      {
        id: '4',
        city: 'Geneva',
        country: 'Switzerland',
        nights: 2,
        coordinates: { lat: 46.2044, lng: 6.1432 },
      },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 42,
    co2Unit: 'kg',
    region: 'Northern Europe',
    country: 'Switzerland',
    pace: 'moderate',
    collection: 'mountain-escapes',
  },
];

// Generate remaining trips
const additionalTrips: Omit<Trip, 'id' | 'slug' | 'title'>[] = [
  {
    description: 'Explore Austria\'s imperial cities and mountain regions',
    routeCities: ['Vienna', 'Salzburg', 'Innsbruck'],
    priceFrom: 650,
    currency: 'EUR',
    durationDays: 7,
    heroImage: getImageByIndex(5),
    images: getMultipleImages(3, 'austria-cities'),
    stops: [
      { id: '1', city: 'Vienna', country: 'Austria', nights: 3, coordinates: { lat: 48.2082, lng: 16.3738 } },
      { id: '2', city: 'Salzburg', country: 'Austria', nights: 2, coordinates: { lat: 47.8095, lng: 13.055 } },
      { id: '3', city: 'Innsbruck', country: 'Austria', nights: 1, coordinates: { lat: 47.2692, lng: 11.4041 } },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 58,
    co2Unit: 'kg',
    region: 'Northern Europe',
    country: 'Austria',
    pace: 'moderate',
  },
  {
    description: 'Weekend escape to the English countryside',
    routeCities: ['London', 'Bath', 'Cotswolds'],
    priceFrom: 320,
    currency: 'EUR',
    durationDays: 3,
    heroImage: getImageByIndex(6),
    images: getMultipleImages(2, 'english-countryside'),
    stops: [
      { id: '1', city: 'London', country: 'UK', nights: 1, coordinates: { lat: 51.5074, lng: -0.1278 } },
      { id: '2', city: 'Bath', country: 'UK', nights: 1, coordinates: { lat: 51.3758, lng: -2.3599 } },
      { id: '3', city: 'Cotswolds', country: 'UK', nights: 0, coordinates: { lat: 51.833, lng: -1.7833 } },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide'],
    co2Emissions: 28,
    co2Unit: 'kg',
    region: 'UK & Ireland',
    country: 'United Kingdom',
    pace: 'relaxed',
    collection: 'short-breaks-by-train',
  },
  {
    description: 'Rail journey through Germany\'s romantic regions',
    routeCities: ['Berlin', 'Dresden', 'Munich'],
    priceFrom: 750,
    currency: 'EUR',
    durationDays: 8,
    heroImage: getImageByIndex(7),
    images: getMultipleImages(4, 'germany-tour'),
    stops: [
      { id: '1', city: 'Berlin', country: 'Germany', nights: 3, coordinates: { lat: 52.52, lng: 13.405 } },
      { id: '2', city: 'Dresden', country: 'Germany', nights: 2, coordinates: { lat: 51.0504, lng: 13.7373 } },
      { id: '3', city: 'Munich', country: 'Germany', nights: 2, coordinates: { lat: 48.1351, lng: 11.582 } },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 82,
    co2Unit: 'kg',
    region: 'Northern Europe',
    country: 'Germany',
    pace: 'moderate',
  },
  {
    description: 'Coastal route through Portugal\'s golden shores',
    routeCities: ['Lisbon', 'Porto', 'Coimbra'],
    priceFrom: 480,
    currency: 'EUR',
    durationDays: 6,
    heroImage: getImageByIndex(8),
    images: getMultipleImages(3, 'portugal-coast'),
    stops: [
      { id: '1', city: 'Lisbon', country: 'Portugal', nights: 2, coordinates: { lat: 38.7223, lng: -9.1393 } },
      { id: '2', city: 'Coimbra', country: 'Portugal', nights: 1, coordinates: { lat: 40.2033, lng: -8.4103 } },
      { id: '3', city: 'Porto', country: 'Portugal', nights: 2, coordinates: { lat: 41.1579, lng: -8.6291 } },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 35,
    co2Unit: 'kg',
    region: 'Southern Europe',
    country: 'Portugal',
    pace: 'relaxed',
    collection: 'coastal-journeys',
  },
  {
    description: 'Ireland\'s Wild Atlantic Way by train',
    routeCities: ['Dublin', 'Galway', 'Killarney'],
    priceFrom: 550,
    currency: 'EUR',
    durationDays: 7,
    heroImage: getImageByIndex(9),
    images: getMultipleImages(3, 'ireland-west'),
    stops: [
      { id: '1', city: 'Dublin', country: 'Ireland', nights: 2, coordinates: { lat: 53.3498, lng: -6.2603 } },
      { id: '2', city: 'Galway', country: 'Ireland', nights: 2, coordinates: { lat: 53.2707, lng: -9.0568 } },
      { id: '3', city: 'Killarney', country: 'Ireland', nights: 2, coordinates: { lat: 52.0599, lng: -9.5074 } },
    ],
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: 52,
    co2Unit: 'kg',
    region: 'UK & Ireland',
    country: 'Ireland',
    pace: 'moderate',
    collection: 'coastal-journeys',
  },
];

const tripTitles = [
  { title: 'Austria Imperial Cities', slug: 'austria-imperial-cities' },
  { title: 'English Countryside Weekend', slug: 'english-countryside-weekend' },
  { title: 'Germany Romantic Route', slug: 'germany-romantic-route' },
  { title: 'Portugal Coast Explorer', slug: 'portugal-coast-explorer' },
  { title: 'Ireland Wild Atlantic', slug: 'ireland-wild-atlantic' },
];

for (let i = 0; i < additionalTrips.length; i++) {
  const trip = additionalTrips[i];
  staticTrips.push({
    id: String(staticTrips.length + 1),
    slug: tripTitles[i]?.slug || `trip-${staticTrips.length + 1}`,
    title: tripTitles[i]?.title || `Trip ${staticTrips.length + 1}`,
    ...trip,
  });
}

// Generate remaining trips to reach 30
const moreTripSeeds = [
  { title: 'Belgium & Netherlands', cities: ['Brussels', 'Antwerp', 'Amsterdam'], price: 420, days: 5 },
  { title: 'Scandinavian Capitals', cities: ['Copenhagen', 'Stockholm', 'Oslo'], price: 1100, days: 10 },
  { title: 'Balkans Discovery', cities: ['Zagreb', 'Ljubljana', 'Lake Bled'], price: 580, days: 7 },
  { title: 'Nordic Fjords', cities: ['Bergen', 'Flam', 'Oslo'], price: 950, days: 8 },
  { title: 'Spain Northern Route', cities: ['Bilbao', 'Santander', 'Oviedo'], price: 450, days: 6 },
  { title: 'Czech & Poland', cities: ['Prague', 'Krakow', 'Wroclaw'], price: 620, days: 7 },
  { title: 'Mediterranean Islands', cities: ['Palermo', 'Valletta', 'Athens'], price: 780, days: 9 },
  { title: 'Alpine Express', cities: ['Nice', 'Turin', 'Milan'], price: 520, days: 6 },
  { title: 'Eastern Europe', cities: ['Budapest', 'Bratislava', 'Vienna'], price: 650, days: 7 },
  { title: 'Iberian Peninsula', cities: ['Madrid', 'Seville', 'Granada'], price: 720, days: 8 },
  { title: 'Northern Lights Quest', cities: ['Tromso', 'Lofoten', 'Narvik'], price: 1200, days: 9 },
  { title: 'Wine Country Tour', cities: ['Bordeaux', 'Carcassonne', 'Toulouse'], price: 680, days: 7 },
  { title: 'Baltic Capitals', cities: ['Tallinn', 'Riga', 'Vilnius'], price: 580, days: 7 },
  { title: 'Swiss Lakes', cities: ['Geneva', 'Lausanne', 'Montreux'], price: 750, days: 6 },
  { title: 'Coast to Coast UK', cities: ['Newcastle', 'York', 'Liverpool'], price: 380, days: 5 },
  { title: 'Greek Islands', cities: ['Athens', 'Santorini', 'Mykonos'], price: 890, days: 8 },
  { title: 'Adriatic Coast', cities: ['Venice', 'Trieste', 'Rijeka'], price: 520, days: 6 },
  { title: 'Highlands & Islands', cities: ['Glasgow', 'Oban', 'Skye'], price: 680, days: 7 },
  { title: 'Pyrenees Crossing', cities: ['Barcelona', 'Andorra', 'Toulouse'], price: 580, days: 7 },
  { title: 'Black Forest Route', cities: ['Strasbourg', 'Freiburg', 'Basel'], price: 480, days: 5 },
  { title: 'Northern Spain', cities: ['Santiago', 'Oviedo', 'Bilbao'], price: 550, days: 7 },
  { title: 'Scottish Borders', cities: ['Edinburgh', 'Melrose', 'Kelso'], price: 350, days: 4 },
  { title: 'French Riviera', cities: ['Nice', 'Cannes', 'Monaco'], price: 720, days: 6 },
  { title: 'Tuscany & Umbria', cities: ['Florence', 'Siena', 'Perugia'], price: 850, days: 8 },
  { title: 'Dalmatian Coast', cities: ['Split', 'Dubrovnik', 'Korcula'], price: 680, days: 7 },
];

moreTripSeeds.forEach((seed, idx) => {
  const tripId = staticTrips.length + 1;
  const stops = seed.cities.map((city, i) => ({
    id: String(i + 1),
    city,
    country: 'Various',
    nights: Math.floor(seed.days / seed.cities.length),
    coordinates: { lat: 50 + Math.random() * 10, lng: 5 + Math.random() * 15 },
  }));

  staticTrips.push({
    id: String(tripId),
    slug: seed.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'),
    title: seed.title,
    description: `Discover ${seed.cities.join(', ')} on this carefully curated journey`,
    routeCities: seed.cities,
    priceFrom: seed.price,
    currency: 'EUR',
    durationDays: seed.days,
    heroImage: getImageByKeyword(seed.title.toLowerCase().replace(/\s+/g, '-')),
    images: getMultipleImages(3, seed.title.toLowerCase().replace(/\s+/g, '-')),
    stops,
    included: ['Transport', 'Accommodation', 'Journey guide', 'Seat reservations'],
    co2Emissions: Math.round(seed.days * 8),
    co2Unit: 'kg',
    pace: idx % 3 === 0 ? 'relaxed' : idx % 3 === 1 ? 'moderate' : 'active',
  });
});

// Articles with full content
export const staticArticles: Article[] = [
  {
    id: '1',
    slug: 'discovering-scotland-by-train',
    title: 'Discovering Scotland by Train',
    excerpt: 'Explore the dramatic landscapes and historic cities of Scotland through an unforgettable rail journey.',
    content: `Scotland offers some of the most breathtaking train journeys in Europe. From the bustling streets of Edinburgh to the remote highlands, traveling by train provides an intimate view of this beautiful country.

The journey begins in Edinburgh, Scotland's capital, where you can explore the historic Royal Mile and the imposing Edinburgh Castle. The train then winds through the Scottish Highlands, passing by lochs, mountains, and ancient castles.

One of the highlights is the journey to Fort William, where you can see Ben Nevis, the highest peak in the British Isles. The route offers stunning views of the Glenfinnan Viaduct, made famous by the Harry Potter films.

Traveling by train in Scotland is not just about the destination—it's about the journey itself. The slow pace allows you to truly appreciate the dramatic landscapes and connect with the local culture.`,
    imageUrl: getImageByIndex(0),
    publishedAt: new Date(2024, 0, 15).toISOString(),
    author: 'Camino Editorial',
    category: 'Destinations',
  },
  {
    id: '2',
    slug: 'slow-travel-philosophy',
    title: 'The Philosophy of Slow Travel',
    excerpt: 'Why taking your time makes for a more meaningful travel experience.',
    content: `Slow travel is more than just a trend—it's a philosophy that transforms how we experience the world. Instead of rushing from one destination to another, slow travel encourages us to immerse ourselves in local culture, connect with communities, and appreciate the journey itself.

When you travel slowly, you have time to notice the small details: the way light filters through a train window, the conversations with locals, the taste of regional cuisine. These moments create lasting memories that go beyond the typical tourist experience.

Train travel is the perfect embodiment of slow travel. Unlike planes, trains allow you to see the landscape change gradually, to understand the geography and culture of the places you're passing through. You're not just transported from point A to point B—you're part of the journey.

This approach to travel is also more sustainable. By choosing trains over planes, you're reducing your carbon footprint while supporting local economies. It's a way of traveling that benefits both you and the places you visit.`,
    imageUrl: getImageByIndex(1),
    publishedAt: new Date(2024, 1, 10).toISOString(),
    author: 'Camino Editorial',
    category: 'Tips',
  },
  {
    id: '3',
    slug: 'paris-to-provence-journey',
    title: 'From Paris to Provence: A Journey Through France',
    excerpt: 'Experience the diversity of France on this scenic rail journey from the capital to the Mediterranean.',
    content: `France offers one of the most diverse and beautiful train journeys in Europe. Starting in Paris, the City of Light, you'll travel south through rolling countryside, past vineyards and medieval towns, until you reach the sun-drenched landscapes of Provence.

The journey begins in Paris, where you can spend a few days exploring world-class museums, charming neighborhoods, and iconic landmarks. From there, the train takes you to Lyon, France's gastronomic capital, where you can sample some of the best food in the country.

Continuing south, you'll reach Avignon, with its famous bridge and papal palace. The final destination is Aix-en-Provence, a beautiful town known for its fountains, markets, and connection to the artist Cézanne.

This journey showcases the incredible diversity of France—from the urban sophistication of Paris to the rural charm of Provence. Each stop offers something unique, and traveling by train allows you to see how the landscape and culture change as you move south.`,
    imageUrl: getImageByIndex(2),
    publishedAt: new Date(2024, 2, 5).toISOString(),
    author: 'Camino Editorial',
    category: 'Stories',
  },
  {
    id: '4',
    slug: 'italy-rail-adventure',
    title: 'Italy\'s Iconic Cities: Venice, Florence & Rome',
    excerpt: 'Discover three of Italy\'s most beautiful cities on this unforgettable rail journey.',
    content: `Italy is a country made for train travel. The high-speed rail network connects major cities efficiently, but it's the regional trains that offer the most authentic experience, winding through the Italian countryside.

Start in Venice, the floating city, where canals replace streets and every corner reveals a new wonder. Spend your days getting lost in the maze of narrow streets, visiting St. Mark's Square, and taking gondola rides through the canals.

From Venice, travel to Florence, the birthplace of the Renaissance. Here you'll find some of the world's greatest art, from Michelangelo's David to Botticelli's Birth of Venus. The city itself is a work of art, with its red-tiled roofs and the iconic Duomo.

Finally, arrive in Rome, the Eternal City. Here, ancient history meets modern life. You can visit the Colosseum in the morning, have lunch in a traditional trattoria, and end the day at the Trevi Fountain. The layers of history are everywhere, from ancient ruins to Baroque churches.

This journey through Italy's three most iconic cities offers a perfect introduction to the country's art, history, and culture.`,
    imageUrl: getImageByIndex(3),
    publishedAt: new Date(2024, 2, 20).toISOString(),
    author: 'Camino Editorial',
    category: 'Destinations',
  },
  {
    id: '5',
    slug: 'sustainable-travel-guide',
    title: 'A Guide to Sustainable Travel',
    excerpt: 'How to reduce your environmental impact while exploring the world.',
    content: `Sustainable travel is becoming increasingly important as we become more aware of our environmental impact. Traveling by train is one of the most sustainable ways to explore Europe, with significantly lower carbon emissions than flying.

When planning a sustainable trip, consider the following:

1. Choose trains over planes for shorter distances
2. Pack light to reduce fuel consumption
3. Support local businesses and communities
4. Respect local cultures and environments
5. Offset your carbon footprint when necessary

Train travel offers a unique opportunity to see the landscape change gradually, to understand the geography and culture of the places you're passing through. It's a more immersive experience that connects you with the places you visit.

By choosing sustainable travel options, you're not just reducing your environmental impact—you're also supporting local economies and having a more meaningful travel experience.`,
    imageUrl: getImageByIndex(4),
    publishedAt: new Date(2024, 3, 1).toISOString(),
    author: 'Camino Editorial',
    category: 'Tips',
  },
];

// Generate more articles to reach 20
for (let i = 5; i < 20; i++) {
  const categories = ['Destinations', 'Tips', 'Stories', 'Culture'];
  const titles = [
    'Exploring the Swiss Alps',
    'Coastal Journeys in Spain',
    'The Art of Packing Light',
    'Local Cuisine Along the Rails',
    'Hidden Gems of Eastern Europe',
    'Travel Photography Tips',
    'Meeting Locals on Your Journey',
    'The History of European Railways',
    'Seasonal Travel Guide',
    'Budget-Friendly Rail Travel',
    'Family Travel by Train',
    'Solo Travel Adventures',
    'Cultural Immersion Tips',
    'Railway Architecture',
    'Sustainable Tourism',
  ];
  
  staticArticles.push({
    id: String(i + 1),
    slug: `article-${i + 1}`,
    title: titles[i - 5] || `Journal Article ${i + 1}`,
    excerpt: `Discover the hidden gems and travel tips in our latest journal entry about ${titles[i - 5] || 'travel'}.`,
    content: `This is the full content for ${titles[i - 5] || `article ${i + 1}`}. Here you'll find detailed information, tips, and insights about traveling by train in Europe. The journey is as important as the destination, and we're here to help you make the most of every moment.

Whether you're planning your first train journey or you're a seasoned rail traveler, there's always something new to discover. From practical tips to inspiring stories, our journal covers everything you need to know about slow, sustainable travel.

Join us as we explore the beautiful landscapes, vibrant cultures, and unforgettable experiences that await you on Europe's railways.`,
    imageUrl: getImageByIndex(i % 10),
    publishedAt: new Date(2024, Math.floor(i / 3), (i % 28) + 1).toISOString(),
    author: 'Camino Editorial',
    category: categories[i % 4],
  });
}

// FAQs
export const staticFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book a trip?',
    answer: 'You can start by using our "Create a trip" tool to customize your journey, or browse our curated trips and click "See trip" to view details.',
    category: 'Booking',
  },
  {
    id: '2',
    question: 'What is included in the price?',
    answer: 'Each trip includes transport, accommodation, a detailed journey guide, and seat reservations. Some trips may include additional experiences.',
    category: 'Booking',
  },
  {
    id: '3',
    question: 'Can I customize my trip?',
    answer: 'Yes, you can customize dates, accommodation, and add optional experiences. Click "Enquire to customise" on any trip page.',
    category: 'Booking',
  },
  {
    id: '4',
    question: 'How does slow travel work?',
    answer: 'Slow travel means taking time to explore destinations, using sustainable transport like trains, and immersing yourself in local culture.',
    category: 'General',
  },
  {
    id: '5',
    question: 'What is the CO2 impact?',
    answer: 'We calculate approximate emissions for each trip based on transport modes. Train travel typically has much lower emissions than flying.',
    category: 'Sustainability',
  },
  {
    id: '6',
    question: 'Do you offer travel insurance?',
    answer: 'We recommend purchasing travel insurance separately. We can provide recommendations based on your destination and needs.',
    category: 'Booking',
  },
  {
    id: '7',
    question: 'What happens if I need to cancel?',
    answer: 'Cancellation policies vary by trip and accommodation. Full details are provided at booking. We offer flexible options where possible.',
    category: 'Booking',
  },
  {
    id: '8',
    question: 'Are meals included?',
    answer: 'Most trips include breakfast. Lunch and dinner options vary by trip. Check individual trip details for specifics.',
    category: 'Booking',
  },
  {
    id: '9',
    question: 'How do I get to the starting point?',
    answer: 'Starting points are accessible by train or other public transport. We provide detailed arrival instructions in your journey guide.',
    category: 'Logistics',
  },
  {
    id: '10',
    question: 'What should I pack?',
    answer: 'We provide packing suggestions in your journey guide, tailored to your specific trip, season, and activities.',
    category: 'Logistics',
  },
];

// Generate more FAQs to reach 40
const moreFAQQuestions = [
  { q: 'Can I travel solo?', a: 'Absolutely! Many of our trips are perfect for solo travelers.', cat: 'General' },
  { q: 'Are pets allowed?', a: 'Some accommodations allow pets. Please enquire when booking.', cat: 'Logistics' },
  { q: 'What languages are supported?', a: 'Our guides are in English, with multilingual options available for some trips.', cat: 'General' },
  { q: 'How far in advance should I book?', a: 'We recommend booking 2-3 months in advance, especially for popular routes.', cat: 'Booking' },
  { q: 'Can I extend my trip?', a: 'Yes, we can help you extend stays or add extra nights in any destination.', cat: 'Booking' },
  { q: 'What is the group size?', a: 'Our trips are self-guided, so you travel independently. Group sizes are typically 1-4 people.', cat: 'General' },
  { q: 'Do you offer discounts?', a: 'We offer early bird discounts and seasonal promotions. Sign up for our newsletter to stay informed.', cat: 'Booking' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and bank transfers. Payment plans are available.', cat: 'Booking' },
  { q: 'How sustainable are your trips?', a: 'We prioritize train travel, support local businesses, and offset carbon emissions where possible.', cat: 'Sustainability' },
  { q: 'Can I book for a large group?', a: 'Yes, we can arrange trips for groups. Contact us for custom group bookings.', cat: 'Booking' },
  { q: 'What is your refund policy?', a: 'Refund policies depend on cancellation timing and trip type. Details are provided at booking.', cat: 'Booking' },
  { q: 'Do you provide 24/7 support?', a: 'We provide emergency contact information and support during your journey.', cat: 'Support' },
  { q: 'Are there age restrictions?', a: 'Most trips are suitable for all ages. Some may have age recommendations for activities.', cat: 'General' },
  { q: 'How do I receive my tickets?', a: 'All tickets and documents are delivered digitally via email before your trip.', cat: 'Logistics' },
  { q: 'What if I have dietary requirements?', a: 'We can accommodate dietary needs. Please specify requirements when booking.', cat: 'Booking' },
  { q: 'Can I change my dates?', a: 'Date changes are subject to availability and may incur fees. Contact us to discuss options.', cat: 'Booking' },
  { q: 'What is included in accommodation?', a: 'Accommodation ranges from boutique hotels to guesthouses, all carefully selected for quality and location.', cat: 'Booking' },
  { q: 'Do you offer airport transfers?', a: 'Airport transfers can be arranged as an add-on. Train connections are typically more sustainable.', cat: 'Logistics' },
  { q: 'How do I track my carbon footprint?', a: 'Each trip displays estimated CO2 emissions. We provide detailed breakdowns upon request.', cat: 'Sustainability' },
  { q: 'Can I combine multiple trips?', a: 'Yes, we can help you create multi-leg journeys combining several of our trips.', cat: 'Booking' },
  { q: 'What if weather disrupts travel?', a: 'We monitor conditions and will assist with rebooking if severe weather affects your journey.', cat: 'Support' },
  { q: 'Are accommodations accessible?', a: 'Many accommodations are accessible. Please specify accessibility needs when booking.', cat: 'Logistics' },
  { q: 'Do you offer gift cards?', a: 'Yes, gift cards are available in any amount and make perfect gifts for travelers.', cat: 'Booking' },
  { q: 'How do I leave a review?', a: 'After your trip, you\'ll receive an email invitation to share your experience.', cat: 'General' },
  { q: 'What currencies do you accept?', a: 'We display prices in EUR, GBP, or USD. Payment can be made in your preferred currency.', cat: 'Booking' },
  { q: 'Can I see reviews from other travelers?', a: 'Yes, reviews are displayed on trip pages and in our reviews section.', cat: 'General' },
  { q: 'How do I become a partner?', a: 'We work with local partners. Contact us to discuss partnership opportunities.', cat: 'General' },
  { q: 'Do you offer corporate travel?', a: 'Yes, we can arrange corporate and team-building trips. Contact us for group rates.', cat: 'Booking' },
  { q: 'What makes Camino different?', a: 'We focus exclusively on slow, sustainable train travel with expertly curated routes and local insights.', cat: 'General' },
  { q: 'How can I stay updated?', a: 'Sign up for our newsletter, follow us on social media, or check our journal for the latest updates.', cat: 'General' },
];

moreFAQQuestions.forEach((faq) => {
  staticFAQs.push({
    id: String(staticFAQs.length + 1),
    question: faq.q,
    answer: faq.a,
    category: faq.cat as any,
  });
});

// Reviews
export const staticReviews: Review[] = Array.from({ length: 25 }, (_, i) => {
  const ratings = [5, 5, 5, 4, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5];
  const authors = ['Sarah M.', 'James T.', 'Emma L.', 'Michael R.', 'Sophie K.', 'David P.', 'Lisa W.', 'Tom H.', 'Anna B.', 'Chris F.'];
  const comments = [
    'An absolutely wonderful experience. The route was perfectly planned.',
    'Loved every moment. The journey guide was incredibly helpful.',
    'Beautiful scenery and smooth travel arrangements.',
    'Great trip, highly recommend. Accommodations were lovely.',
    'Exceeded expectations. Will definitely book again.',
    'Perfect for slow travel. Felt sustainable and authentic.',
    'The train journeys were scenic and comfortable.',
    'Well-organized and stress-free. Exactly what we needed.',
    'Wonderful destinations and seamless logistics.',
    'A unique way to see Europe. Highly recommend!',
  ];

  return {
    id: String(i + 1),
    author: authors[i % authors.length] + String(Math.floor(i / authors.length) + 1),
    rating: ratings[i] || 5,
    comment: comments[i % comments.length],
    tripSlug: staticTrips[i % staticTrips.length].slug,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
  };
});
