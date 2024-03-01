const { Comment } = require('../models');

const commentData = [{
    comment_text: 'Great Article',
    user_id: 1,
    post_id: 1,
},
{
    comment_text: 'Nice 2-0 Victory',
    user_id: 2,
    post_id: 1,
},
{
    comment_text: 'Sentinels are the team to beat!',
    user_id: 3,
    post_id: 1,
},
{
    comment_text: 'Cant believe how overrated 100t is!',
    user_id: 4,
    post_id: 1,
},
{
    comment_text: 'Demon1 is an insane duelist!',
    user_id: 5,
    post_id: 1, 
},
{
    comment_text: 'S0m should be in the pro scene!',
    user_id: 1,
    post_id: 2, 
},
{
    comment_text: 'FNS is a goated IGL!',
    user_id: 2,
    post_id: 2, 
},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;