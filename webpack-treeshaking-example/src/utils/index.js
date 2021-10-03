const { USER_NAME } = require("../constants");

const getAuthorName = () => USER_NAME;
const greeting = () => "Hi, This is Mujing.";

exports.getAuthorName = getAuthorName;
exports.greeting = greeting;
