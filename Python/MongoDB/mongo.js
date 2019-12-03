
//Create User with role
db.createUser({
    user: 'zbayle',
    pwd: 'abc123',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})


//Add document
db.books.insert({
    "name": "Book five",
    "PublishDate": "new Date()",
    "authors": [
        { "name": "Jon Snow Jr" },
        { "name": "Ghost Writer" },
    ]
})

//add many documents
db.books.insertMany([
    {
        "name": "Book two",
        "publishDate": new Date(),
        "author": [
            { "name": "ZBayle" }
        ]
    },
    {
        "name": "Book three",
        "publishDate": new Date(),
        "author": [
            { "name": "ZBayle" }
        ]
    },
    {
        "name": "Book four",
        "publishDate": new Date(),
        "author": [
            { "name": "ZBayle" },
            { "name": "Ghost Writer" }
        ]
    },
])

//find single ducument
db.books.find({name: "Book three"}).pretty()

//find with filter
db.books.find(
    {
        name: "Book three"
    },
    {
        name: 1,
        author: 1
    }
).pretty()


//
db.books.find(
    {
        name: "Book five"
    },
    {
        publishDate:1,
        name:1,
        authors: {$slice: 1}
    }
).pretty()

//dete document
db.books.remove({name: "Book One"}, 1)

//

db.books.insert({
    "name": "Blink",
    "publishDate": new Date(),
    "authors": [
        {
            "name": "Malcom Gladwell", "active": "true"
        },
        {
            "name": "Ghost Writer", "active": "true"
        }
    ]
})

db.books.find(
    {
        name: "Blink",
    },
    {
        name: 1,
        publishDate: 1,
        "authors.name": 1
    }
).pretty()
//

db.books.findOne(
    {
        name: "Blink"
    }
)