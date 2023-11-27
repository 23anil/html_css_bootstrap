
      var books = [
        {
          name: "deep work",
          price: 350,
        },
        {
          name: "Bussiness",
          price: 750,
        },
        {
          name: "Magic",
          price: 950,
        },
      ];

      for (var i = 0; i < books.length; i++) {
        // if (books[i].price > 500) {
        //   console.log(books[i].name);
        // }
        // books[i].price > 500 && console.log(books[i].name);
        // if (books[i].name.length > 5) {
        //   console.log(books[i].name + "-" + books[i].name.length);
        // }
        if (books[i].name.charAt(0) == "m");
        {
          console.log(books[i].name);
        }
        // books[i].name.length > 5 && console.log(book[i].name);
      }
      var fruits = ["apple", "mango", "orange", "banana"];
      for (var i = 0; i < fruits.length; i++) {
        console.log("fruits of index " + i + ": " + fruits[i]);
        // console.log(`fruits of index ${i} : ${fruits[i]}`);
      }
 
