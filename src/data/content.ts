export const img = (id: number, w = 1200, h = 800) => `https://picsum.photos/id/${id}/${w}/${h}`;

export const navLinks = ['Buy', 'Rent', 'Sell', 'About', 'Service', 'Home Loans'] as const;

export const stats = [
  { value: '25+', label: 'Lifestyle Amenities' },
  { value: '10 Mins', label: 'From Vandalur Bus Stand' },
  { value: '100%', label: 'Secured Gated Community' },
  { value: '80%', label: 'Home Loan Facility' },
] as const;

export const amenities = [
  {
    name: 'Landscaped Gardens',
    id: '/image/Symmetrical Formal Garden Pathway.jpg',
    h: 'h-[300px]',
  },
  {
    name: 'Children’s Play Area',
    id: '/image/Golden Hour Playground in the Park-1.jpg',
    h: 'h-[340px]',
  },
  {
    name: 'Sports Court',
    id: '/image/Golden Hour Basketball Court-2.jpg',
    h: 'h-[300px]',
  },
  {
    name: 'Swimming Pool',
    id: '/image/Overcast Apartment Courtyard Pool.jpg',
    h: 'h-[340px]',
  },
] as const;



export const nearby = {
  'IT Parks': [['Location 1', '000 km'], ['Location 2', '000 km'], ['Location 3', '000 km'], ['Location 4', '000 km']],
  Hospitals: [['Location 1', '000 km'], ['Location 2', '000 km'], ['Location 3', '000 km'], ['Location 4', '000 km']],
  Entertainment: [['Location 1', '000 km'], ['Location 2', '000 km'], ['Location 3', '000 km'], ['Location 4', '000 km']],
  'Schools & Colleges': [['Location 1', '000 km'], ['Location 2', '000 km'], ['Location 3', '000 km'], ['Location 4', '000 km']],
} as const;

export const banks = [
  { name: 'AXIS BANK', color: '#97144d' },
  { name: 'ICICI Bank', color: '#f37021' },
  { name: 'LIC', color: '#0a4a9f' },
  { name: 'IDBI BANK', color: '#00836c' },
  { name: 'HDFC BANK', color: '#004c8f' },
  { name: 'SBI', color: '#1a5fb4' },
] as const;

export const faqs = [
  { q: 'What is Felixa Vistas?', a: 'Felixa Vistas is a lifestyle plotted development in Padappai, Chennai.' },
  { q: 'Where is Felixa Vistas located?', a: 'Felixa Vistas is located in Padappai, with convenient connectivity to Vandalur, Mudichur and Tambaram.' },
  { q: 'What plot sizes are available at Felixa Vistas?', a: 'Please contact us for the available plot sizes.' },
  { q: 'What amenities does Felixa Vistas offer?', a: '25+ lifestyle amenities including landscaped gardens, a children\'s play area and a sports court.' },
  { q: 'Is Felixa Vistas a gated community?', a: 'Yes, it is a 100% secured gated community.' },
  { q: 'Are home loan facilities available for Felixa Vistas?', a: 'Yes, up to 80% home loan with APF approval from leading banks.' },
  { q: 'What infrastructure facilities are available at Felixa Vistas?', a: 'Please contact us for the infrastructure details.' },
  { q: 'How far is Felixa Vistas from Vandalur Bus Stand?', a: 'About a 10-minute drive.' },
] as const;
