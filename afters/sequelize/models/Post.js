import { Model, DataTypes } from "sequelize";
import db from "../db/index.js";

//-- Modelo Post
class Post extends Model {}
Post.init(
  {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "posts",
  }
);

export default Post;
