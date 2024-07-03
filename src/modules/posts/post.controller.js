import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";

export const addPost = async (req,res)=>{
    const {title, content, UserId} = req.body;
    const user = await User.findOne({title, content, UserId});
    if(!user){
       return res.json(404).json({message: "User not found or not logged in"});

    }
    const post = await Post.create({title, content, UserId})
    res.json({message : "Post created Successfully",post});
};

export const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json({message:"Posts fetched successfully",posts});
}

export const updatePosts = async (req, res) => {
    const {id} = req.query;
    const { title, UserId } = req.body;
    const post = await Post.update({ title },{where:{id , UserId}});
   return post > 0
   ? res.json({message:"Post updated successfully"})
    : res.status(404).json({message: "Post not found"});
    }


    export const deletePost = async (req, res) => {
    const { id } = req.query;
    const { UserId } = req.body;
    const post = await Post.destroy({where:{id , UserId}});
    return post > 0
   ? res.json({message:"Post deleted successfully"})
    : res.status(404).json({message: "Post not found"});
    }

    export const getSpecificPost = async(req, res) =>{
        const post = await Post.findAll({
            include: {model: User, attributes: ["userName","email"]}
        })
        res.json({message:"Post fetched successfully", post})
    }

    export const getSpecificPost1 = async(req, res) =>{
        const {id} = req.query;
        const {UserId} = req.body;
        const post = await Post.findAll({
            include: {model: User, attributes: ["userName","email"]}
        },{where:{id , UserId}})
        res.json({message:"Post fetched successfully", post})
    }
