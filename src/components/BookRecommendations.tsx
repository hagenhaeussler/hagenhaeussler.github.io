export const BookRecommendations = () => {
  const books = [
    "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
    "The Happiest Man on Earth by Eddie Jaku",
    "Steve Jobs by Walter Isaacson",
    "Homo Deus: A History of Tomorrow by Yuval Noah Harari",
    "The 7 Habits of Highly Effective People by Stephen R. Covey",
    "Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think by Hans Rosling",
  ];

  return (
    <section id="book-recommendations" className="px-6 py-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Book <span className="text-accent">Recommendations</span>
          </h2>
        </div>

        <ol className="list-decimal list-inside space-y-3 text-lg text-muted-foreground leading-relaxed">
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};
