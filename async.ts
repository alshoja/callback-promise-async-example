console.log('async await start');

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
            resolve({ email: userdata.email, book: '2 states', type: 'async await' })
        }, 1000)
    })
}

async function asyncWay() {
    try {
        const userdata = await getUserdata('sh@gmail.com', 'shahna');
        const bookData = await getBookDetails(userdata);
        console.log('async data ', bookData);
    } catch (error) {
        console.log(error);
    }
}

asyncWay();

console.log('async await end');
