const router = require('express').Router();

const userRoutes  = require('./api/user-routes');
const postRoutes = require('./api/post-routes');
const commentRoutes =  require('./api/comment-routes');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes)

module.exports = router;