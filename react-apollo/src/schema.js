const { makeExecutableSchema } = require("graphql-tools");

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: {
      name: "J.K.",
      surname: " Rowling",
      emoji: "Hola",
    },
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

// The GraphQL schema in string form
export const typeDefs = `
  type Query { books: [Book], todosEnUno:String }
  type Book { title: String, author: Author }
  type Author { name: String, surname: String, emoji:Emoji }
  type Emoji { miemoji: String }
`;

// The resolvers
export const resolvers = {
  Query: {
    books: () => {
      //const books = await Books.find({});
      return books;
    },
    todosEnUno: () => {
      return books.map((book) => book.title).join(",");
    },
  },
  Emoji: () => {
    console.log("Nested resolver");
    return { miemoji: "👨🏼‍💻" };
  },
};
