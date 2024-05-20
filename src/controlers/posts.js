const { json } = require('express');

const { getAllPosts, getpostsById,
    queryCreatePosts, deletePostById, queryUpdatePost,

    //===========================================================
} = require('../services/posts')




const getPost = async (req, res) => {
    let results = await getAllPosts();
    return res.json({ Posts: results })
}

const getPostId = async (req, res) => {
    const postid = req.params.id;
    let post = await getpostsById(postid);
    return res.json({ post })
}

const createPosts = async (req, res) => {
    let { idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug } = req.body;
    await queryCreatePosts(idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug)
    // return res.json({ Posts: results })
    res.send('ok nuon')

    //=====>đưa ra chuỗi 


};


const deletePosts = async (req, res) => {
    const postid = req.params.id;
    await deletePostById(postid);
    // res.redirect('/home')
    let results = await getAllPosts();
    return res.json({ post: results });
    //=> xóa đưa ra chuỗi 
};


const updatePost = async (req, res) => {
    let { idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug } = req.body;
    try {
        await queryUpdatePost(idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug);
        return res.send('ok baby');
    } catch (error) {
        console.error('Error updating post:', error);
        return res.status(500).send('Internal Server Error');
    }
};



// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    //get
    getPost, getPostId,
    //create
    createPosts,
    //delete
    deletePosts,
    //update
    updatePost,
};