import Comment from "../../../DB/model/comment.model.js";
import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";

export const addComment = async (req,res)=>{
    const { content, UserId , PostId } = req.body;
    const user = await User.findOne({where: {id: UserId, loginStatus: true}})
        if(!user) return res.status(404).json({message: 'User not found or not logged in'})
            const comment = await Comment.create({content,UserId, PostId})
        res.json({message:"comment created successfully",comment})
    
}

export const getComments = async (req,res)=>{
    const comments = await Comment.findAll();
    res.json({message:"comment fetched successfully", comments})
}

export const updateComment = async (req, res) => {
    const { id } = req.query;
    const { content ,UserId } = req.body;
    const comment = await Comment.update({content},{where:{id , UserId}});
   return comment > 0
   ? res.json({message:"comment updated successfully"})
    : res.status(404).json({message: "comment not found"});
    }


    export const deleteComment = async (req, res) => {
        const {id} = req.query;
        const { UserId } = req.body;
        const comment = await Comment.destroy({where:{id , UserId}});
       return comment > 0
       ? res.json({message:"comment deleted successfully"})
        : res.status(404).json({message: "comment not found"});
        }

     export const userWithPostsAndComments = async (req,res) =>{
        const users = await User.findAll({
            include:{
                    model: Post,
                    attributes: ["title"],
                    include: 
                        {
                            model: Comment,
                            attributes: ["Content"]
                        }
                    
                }
            
        })
        res.json({message: "User fetched successfully",users});
     }