import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./user.model.js";
import Post from "./post.model.js";

const Comment = sequelizeInstance.define("Comment", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Comment, {
onDelete:"CASCADE",
onUpdate: "CASCADE"
})

Post.hasMany(Comment, {
onDelete:"CASCADE",
onUpdate: "CASCADE"
})

Comment.belongsTo(User)
Comment.belongsTo(Post)

export default Comment;