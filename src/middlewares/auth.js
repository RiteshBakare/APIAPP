const jwt = require("jsonwebtoken");
const SECRET_KEY = "DEMOAPIAPP";

const auth = (req, res, next) => {
    try {
      let token = req.headers.authorization
      if (token) {
        token = token.split(' ')[1]
        const user = jwt.verify(token, SECRET_KEY)
        req.userId = user.id
        console.log(user.id);
      } else {
        return res.status(401).json({ message: 'Unauthorized User' })
      }
      next();
    } catch (error) {
      console.log(error)
      res.status(401).json({ message: 'Unauthorized User' })
    }
  }

module.exports = auth