
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
});


//Add document
db.books.insert({
    "name": "userList",
    "PublishDate": "new Date()",
    "authors": [
        { "name": "Zbayle" },
        { "name": "Host" },
    ],
    "permission": "clusterAdmin"
});

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
]);

//find single ducument
db.books.find({name: "Book three"}).pretty();

//find with filter
db.books.find(
    {
        name: "Book three"
    },
    {
        name: 1,
        author: 1
    }
).pretty();


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
).pretty();

//dete document
db.books.remove({name: "Book One"}, 1);

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
});

db.books.find(
    {
        name: "Blink",
    },
    {
        name: 1,
        publishDate: 1,
        "authors.name": 1
    }
).pretty();
//

db.books.findOne(
    {
        name: "Blink"
    }
);

//string query
db.books.insert(
    {
        "name": "Deep Work: Rules for Focused Success in a Distracted World",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Cal Newport"}
        ]
    }
);

//partial string search      /.*STRING HERE.*/i
db.books.findOne(
    {
        name: /.*deep work.*/i
    }
);



//check if field exist

db.users.insert(
    {
        "name": "users",
        "publishedDate": new Date(),
        "perms": "clusterAdmin",
        "authors": [
            {"name": "Zbayle"}
        ]
    }
);

db.users.find(
    {
        perms: {
            $exists: true
        }
    }
).pretty();



db.users.find(
    {
        perms: {
            $exists: true
        }
    }
);

db.users.update(
    {name:users},
    $set{

        user: {
            "fname" : "Zack"
        }

    }

)