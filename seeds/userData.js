const { User } = require('../models');

const userData = [{
    username: 'User1',
    password: 'password1',
    email: 'user1@gmail.com',
},
{
    username: 'User2',
    password: 'password2',
    email: 'user2@gmail.com',
},
{
    username: 'User3',
    password: 'password3',
    email: 'user3@gmail.com',
},
{
    username: 'User4',
    password: 'password4',
    email: 'user4@gmail.com',
},
{
    username: 'User5',
    password: 'password5',
    email: 'user5@gmail.com', 
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;