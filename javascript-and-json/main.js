const books = [
  { isbn: '978-0345802620', title: 'The Night Circus', author: 'Erin Morgenstern' },
  { isbn: '978-1368069601', title: 'Long Live the Pumpkin Queen: Tim Burton\'s The Nightmare Before Christmas', author: 'Shea Ernshaw' },
  { isbn: '978-0156439619', title: 'If on a Winter\'s Night a Traveler', author: 'Italo Calvino' }
];

console.log('Array of books: ', books);
console.log('Type of books: ', typeof books);

// JSON stringify
const booksJson = JSON.stringify(books);

console.log('JSON string of books: ', booksJson);
console.log('Type of booksJso: ', typeof booksJson);

// JSON manual string
const student = '{"id": 1234, "name": "John Doe"}';

console.log('JSON string of a student: ', student);
console.log('Type of student: ', typeof student);

// JSON parse
const parsedBooks = JSON.parse(booksJson);

console.log('Parsed books: ', parsedBooks);
console.log('Type of parsedBooks: ', typeof parsedBooks);
