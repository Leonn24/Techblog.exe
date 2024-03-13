const router = require("express").Router(); 
const { Post, User, Comment } = require("../../models"); 
const withAuth = require("../../utils/auth"); 

// GET route for retrieving all posts with associated usernames
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET route for retrieving a specific post by its ID with associated usernames and comments
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }, { model: Comment, include: [{ model: User, attributes: ['username'] }], }],
        });
        if (!postData) {
            res.status(404).json({ message: "No post found with that id!" });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route for creating a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT route for updating an existing post by its ID
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updatedPost) {
            res.status(404).json({ message: "No post found with that id!" });
            return;
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE route for deleting a post by its ID, including associated comments
router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Comment.destroy({
            where: { post_id: req.params.id },
        });

        const deletedPost = await Post.destroy({
            where: { id: req.params.id }
        });
        if (!deletedPost) {
            res.status(404).json({ message: "No post found with that id!" });
            return;
        }
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
