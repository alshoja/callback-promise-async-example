console.log('promise start');

function getUserdata(email, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: name, email: email });
        }, 2000);
    })
}

function getBookDetails(userdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ email: userdata.email, book: '2 states', type: 'Promise' })
        }, 1000)
    })
}

getUserdata('alshoja@gmail.com', 'alshoja')
    .then((userdata) => getBookDetails(userdata))
    .then((bookDetails) => console.log(bookDetails))
    .catch((err) => console.log('error', err));

console.log('promise end');


