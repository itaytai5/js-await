// exercise 1

function displayCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-us", { weekday: "long" });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString("en-us", { month: "long" });
  const year = currentDate.getFullYear();
  console.log(`Today is: ${day}, ${date} ${month} ${year}`);
}

async function addDays(date, numDays) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + numDays);
      resolve(newDate);
    }, 1000); // השהייה של שנייה אחת
  });

  const result = await promise;
  return result;
}

// הפעלת הפונקציות
displayCurrentDate();

const originalDate = new Date();
const numDaysToAdd = 5;

addDays(originalDate, numDaysToAdd)
  .then((newDate) => {
    console.log(`New date after adding ${numDaysToAdd} days: ${newDate}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// exercise 2

const library = {
  books: [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 1" },
    { title: "Book 4", author: "Author 3" },
    { title: "Book 5", author: "Author 2" },
    { title: "Book 6", author: "Author 1" },
    { title: "Book 7", author: "Author 3" },
    { title: "Book 8", author: "Author 4" },
    { title: "Book 9", author: "Author 4" },
    { title: "Book 10", author: "Author 1" },
    { title: "Book 11", author: "Author 5" },
    { title: "Book 12", author: "Author 5" },
    { title: "Book 13", author: "Author 1" },
    { title: "Book 14", author: "Author 3" },
    { title: "Book 15", author: "Author 2" },
  ],

  findBooksByAuthor(authorName) {
    const booksByAuthor = this.books.filter(
      (book) => book.author === authorName
    );
    const bookTitles = booksByAuthor.map((book) => book.title);
    return bookTitles;
  },
};

// קריאה למתודה והדפסת התוצאה
const authorName = "Author 1";
const booksByAuthor = library.findBooksByAuthor(authorName);
console.log(`Books by ${authorName}:`, booksByAuthor);
