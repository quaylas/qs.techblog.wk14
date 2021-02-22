const { Post } = require('../models');

const postdata = [
  {
    title: 'Test Post 1',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Test Post 2',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
