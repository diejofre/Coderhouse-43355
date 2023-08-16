import User from "./User.js";
import Post from "./Post.js";

Post.belongsTo(User);
User.hasMany(Post);

export { User, Post };
