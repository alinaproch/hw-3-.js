// 1st task
const numbers = [52, 31, 9, 85, 31, 45];
let sum=0;
let i = 0;

while(i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); //253

//2nd task
const books= [
        { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
        { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
        { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
        { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
      ];

for (let i=0;i<books.length;i++){
    console.log(`Title:${books[i].title}`);
    console.log(`Author:${books[i].author}`);
    console.log(`Number of pages:${books.numberOfPages}`);
    console.log(`Genre:${books[i].genre}`);
    console.log("Awards:");
    for(let j=0;j<books[i].awards.length;j++){
        console.log(`- ${books[i].awards[j]}`);
       }
       console.log("")// пустая строка для разделения информации о книгах
}

//3rd task
function calculateAveragePages(books){
    let totalPages=0;

    for(let i=0;i<books.length;i++){
        totalPages += books[i].numberOfPages;
    }

    return totalPages/books.length;
}
const averagePages = calculateAveragePages(books);
console.log(`Среднее количество страниц: ${averagePages}`); //371.2

//4th task
function repeatString(str, n) {
    return str.repeat(n);
  }
  console.log(repeatString("hello",3));

  //5th task
  function calculateAverage(numbers){
    if (numbers.length === 0){
        return 0;
    }
    const sum=numbers.reduce((acc,num) => acc+num,0);
    return sum/numbers.length;
  }
  const input = [10, 20, 30, 40, 50, 60];
const output = calculateAverage(input);
  console.log(output); // Вывод: 35

//   6th task


  
