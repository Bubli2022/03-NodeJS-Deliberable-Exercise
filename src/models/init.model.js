const Users = require("./users.model")
const Courses = require("./courses.models")
const Categories = require("./categories.models")
const UsersCourses = require("./users_courses.models")
const Videos = require("./video.models")

const initModels = () => {
   UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" })
   Users.hasMany(UsersCourses, { as: "learn", foreignKey: "user_id" })

   UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" })
   Courses.hasMany(UsersCourses, { as: "learn", foreignKey: "course_id" })

   Categories.belongsTo(Courses, { as: "category", foreignKey: "course_id" })
   Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" })

   Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" })
   Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" })
}

module.exports = initModels
