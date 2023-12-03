document.addEventListener('DOMContentLoaded', function () {
    // Counter to keep track of the number of books
    let bookCount = 0;
  
    document.getElementById('new-book').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form data
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const price = document.getElementById('price').value;
      const inStock = document.getElementById('in-stock').value;
      const genre = document.getElementById('genre').value;
  
      // Validate form data (you can add more validation if needed)
  
      // Create a new book entry with a Remove button
      const newBook = document.createElement('li');
      newBook.innerHTML = `
        <strong>${title}</strong> by ${author}<br>
        Price: ${price}, In Stock: ${inStock}<br>
        Genre: ${genre}
        <button class="remove-button">Remove</button>
      `;
  
      // New book entry to the list
      const bookList = document.querySelector('.books ul');
      bookList.appendChild(newBook);
  
      // Add event listener to the remove button
      const removeButton = newBook.querySelector('.remove-button');
      removeButton.addEventListener('click', function () {
        // Remove the entire book entry
        newBook.remove();
        // Decrement the book count
        bookCount--;
        // Update the book count in the header
        const bookCountElement = document.querySelector('.book-count');
        bookCountElement.textContent = `(${bookCount} Books)`;
      });
  
      // Increment the book count
      bookCount++;
  
      // Update the book count in the header
      const bookCountElement = document.querySelector('.book-count');
      bookCountElement.textContent = `(${bookCount} Books)`;
  
      // Clear the form fields
      document.getElementById('new-book').reset();
    });
  });
  