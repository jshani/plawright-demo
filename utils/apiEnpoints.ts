export default {
    user: {
        authorize: 'https://demoqa.com/Account/v1/Authorized',
        generateToken: 'https://demoqa.com/Account/v1/GenerateToken',
        post: 'https://demoqa.com/Account/v1/User',
        delete: 'https://demoqa.com/Account/v1/User/',
        get: 'https://demoqa.com/Account/v1/User/',
    },
    books: {
        getBooks: 'https://demoqa.com/BookStore/v1/Books',
        post: 'https://demoqa.com/BookStore/v1/Books',
        deleteBooks: 'https://demoqa.com/BookStore/v1/Books?UserId=',
        getBook: 'https://demoqa.com/BookStore/v1/Book?ISBN=',
        deleteBook: 'https://demoqa.com/BookStore/v1/Book',
        put: 'https://demoqa.com/BookStore/v1/Books/'
    }
}