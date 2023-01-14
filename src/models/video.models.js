const db = require("../utils/database")
const { DataTypes } = require("sequelize")

const Videos = db.define(
   "videos",
   {
      id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         unique: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },

      url: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      course_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         field: "course_id",
      },
   },
   {
      timestamps: false,
   }
)

module.exports = Videos
