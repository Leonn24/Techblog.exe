const { Post } = require('../models');

const postData = [{
    title: 'First Blog Post',
    content: 'This is the content for the first Blog',
    user_id: 1,
},
{
    title: 'Second Blog Post',
    content: 'This is the content for the second Blog',
    user_id: 2,
},
{
    title: 'Third Blog Post',
    content: 'This is the content for the third Blog',
    user_id: 3,
},
{
    title: 'Fourth Blog Post',
    content: 'This is the content for the fourth Blog',
    user_id: 4,
},
{
    title: 'Fifth Blog Post',
    content: 'This is the content for the fifth Blog',
    user_id: 5, 
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;