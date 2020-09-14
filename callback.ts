
console.log('cb start');

function cbFunction(name, callback) {
    setTimeout(() => {
        callback({ name: name });
    }, 2000);
}

function getBookDetails(name, callback) {
    setTimeout(() => {
        callback({ name: name, book: '2 states', type: 'call back' })
    }, 1000);
}

cbFunction('alshoja', (user) => {
    getBookDetails(user.name, (bookdetails) => {
        console.log(bookdetails);
    });
});

console.log('cb end');






