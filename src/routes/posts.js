const express = require('express');
const { //get
    getPost, getPostId,
    //create
    createPosts,
    //delete
    deletePosts,
    //update
    updatePost,
} = require('../controlers/posts');
const { upload } = require('../midleware/midleware')
const router = express.Router();
//-------------------------------------
//
router.get('/', getPost)

router.get('/:id', getPostId)

// router.post('/createUser', createUser)
router.post('/createPosts', createPosts)

//delete

router.delete('/deletePosts/:id', deletePosts)
//update
router.put('/updatePosts', updatePost)








module.exports = router;