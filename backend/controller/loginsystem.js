
const pool = require("../config/db");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TokenExpiredError = require("jsonwebtoken/lib/TokenExpiredError");

const login = async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { employeeID, password } = req.body;
      
      // Validate user input
      if (!(employeeID && password)) {
        res.status(400).send("All input is required");
      }
      console.log("Start login process");
      // Validate if user exist in our database
      pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        connection.query('SELECT EmployeeID, Password FROM employee WHERE EmployeeID = ?', 
        [employeeID], (err, rows) => {
          connection.release();
          if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
          }
          if (rows.length === 0) {
            res.status(401).send("User not found");
            return;
          }
          const user = rows[0];
          console.log(user);
          // Validate password
          console.log("Finish query for user identification, compare the password");
          bcrypt.compare(password, user.Password, (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json({'error password vailated':err});
              return;
            }
            console.log("password is",result);
            if (result) {
              // Create JWT token
              const token = jwt.sign({ id: user.EmployeeID }, process.env.ACCESS_TOKEN, { expiresIn: '2h' });
              
              let options = {
                maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
                httpOnly: true, // The cookie only accessible by the web server
              }
        
              res.cookie('x-access-token',token, options);
              res.status(200).json({ "token" : token });
              console.log("login success");
            } else {
              res.json({"token" :"invalid"});
            }
          });
        })
      })
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  }



  module.exports = { login };