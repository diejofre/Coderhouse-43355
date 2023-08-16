import { Model, DataTypes } from "sequelize";
import db from "../db/index.js";

//-- Modelo User
class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "users",
  }
);

export default User;
