import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./user.model.js";

const Post = sequelizeInstance.define("Post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Post, {
onDelete:"CASCADE",
onUpdate: "CASCADE"
})
Post.belongsTo(User)

export default Post;