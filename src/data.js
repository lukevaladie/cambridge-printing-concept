export const services = [
  {
    id: 'print', number: '01', name: 'Print & finish', tag: 'INK MEETS POSSIBILITY',
    title: 'Made to be held.\nMade to be noticed.',
    description: 'From a beautifully finished invitation to a wide-format statement, find the right way to bring your project to paper.',
    items: ['Digital & offset printing', 'Posters & signage', 'Letterpress invitations', 'Copying & finishing'],
    source: 'https://cambridgeprinting.net/print.html',
  },
  {
    id: 'design', number: '02', name: 'Consult & design', tag: 'START WITH A GOOD IDEA',
    title: 'A little guidance.\nA clearer direction.',
    description: 'Design and production belong in the same conversation. Explore creative support, project planning, and artwork preparation before your idea goes to press.',
    items: ['Creative consultation', 'Corporate & brand design', 'Artwork preparation', 'Pre-press support'],
    source: 'https://cambridgeprinting.net/services.html',
  },
  {
    id: 'promo', number: '03', name: 'Promotional products', tag: 'TAKE YOUR BRAND FURTHER',
    title: 'Something useful.\nSomething remembered.',
    description: 'Put your identity on products people can use. Explore branded merchandise and apparel for your next event, campaign, or team moment.',
    items: ['Branded merchandise', 'Promotional apparel', 'Event giveaways', 'Campaign products'],
    source: 'https://cambridgeprinting.net/services.html',
  },
  {
    id: 'mail', number: '04', name: 'Mailing & fulfillment', tag: 'FROM YOUR IDEA TO THEIR DOOR',
    title: 'A message worth\nopening.',
    description: 'Give your printed message a destination. Bring printing, direct mail, and fulfillment into one project conversation.',
    items: ['Direct mail', 'Variable-data projects', 'Mailing services', 'Project fulfillment'],
    source: 'https://cambridgeprinting.net/',
  },
];

export function buildBrief({ project, quantity, timing }) {
  return `INDEPENDENT DESIGN DEMO\nNo request has been sent to Cambridge Printing.\n\nProject: ${project}\nQuantity: ${quantity}\nTiming: ${timing}\n\nFor a real inquiry, visit https://cambridgeprinting.net/contact.html\nConfirm specifications, availability, cost, and timing directly with the business.`;
}
