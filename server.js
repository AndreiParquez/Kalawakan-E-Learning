const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const session = require('express-session');

// Set up the MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'your_database_name'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server');
});

// Configure middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


app.get('/getSessionUsername', (req, res) => {
  const { username, password } = req.session;
  res.json({ username, password });
});
// Define routes
app.get('/', (req, res) => {
  res.render('user');
});
app.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Assuming 'dashboard.ejs' is the template file name
});

app.get('/admin', (req, res) => {
  res.render('admin'); 
});
app.get('/new', (req, res) => {
  res.render('new'); 
});
app.get('/warp', (req, res) => {
  res.render('warp'); 
});
app.get('/user', (req, res) => {
  res.render('user'); 
});
app.get('/lessons', (req, res) => {
  res.render('lessons'); 
});
app.get('/quiz', (req, res) => {
  res.render('quiz'); 
});
app.get('/quiz1', (req, res) => {
  res.render('quiz1'); 
});
app.get('/quiz2', (req, res) => {
  res.render('quiz2'); 
});
app.get('/quiz3', (req, res) => {
  res.render('quiz3'); 
});
app.get('/videos', (req, res) => {
  res.render('videos'); 
});
app.get('/courses', (req, res) => {
  res.render('courses'); 
});
app.get('/course1', (req, res) => {
  res.render('course1'); 
});
app.get('/course2', (req, res) => {
  res.render('course2'); 
});
app.get('/solar', (req, res) => {
  res.render('solar'); 
});
app.get('/dev', (req, res) => {
  res.render('dev'); 
});
app.get('/act', (req, res) => {
  res.render('act'); 
});






app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  req.session.username = username;
  req.session.password = password;
  connection.query(query, [username], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      if (password === user.password) {
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Access Successful</title>
          <style>
          @font-face {
            font-family: "myfont";
            src: url("/modern\ M.ttf");
          }
            body {
              text-align: center;
              
              background-image: url('/19651.jpg');
  font-family: "myfont";    
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.834);  
  background-size:cover;
            }
            p {
              color: #fff;
              position: absolute;
              top: 52%;
              font-size: 16px;
              left: 46%;
              font-family: 'myfont', sans-serif;
              animation: blink .3s infinite;
              filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
            }
            
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
          </style>
          <script>
            setTimeout(function() {
              window.location.href = 'dashboard';
            }, 2390);
          </script>
        </head>
        <body>
          <script>
            var audio = new Audio('/access successful.m4a');
            audio.play();
          </script>
          <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
          <p>Access Successful</p>
          <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 45%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
        </body>
        </html>
        
         
        `);
      } else {
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Access Successful</title>
          <style>
          @font-face {
            font-family: "myfont";
            src: url("/modern\ M.ttf");
          }
            body {
              text-align: center;
              background-image: url('/19651.jpg');
              font-family: "myfont";    
              background-blend-mode: multiply;
              background-color: rgba(0, 0, 0, 0.834);  
              background-size:cover;
            }
            p {
              
              color: #fff;
              position: absolute;
              top: 52%;
              font-size: 16px;
              left: 47%;
              font-family: 'myfont', sans-serif;
              animation: blink .3s infinite;
              filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
            }
            
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
          </style>
          <script>
            setTimeout(function() {
              window.location.href = 'user';
            }, 2000);
          </script>
        </head>
        <body>
          <script>
            var audio = new Audio('/access denied.m4a');
            audio.play();
          </script>
          <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
          <p>Access Denied</p>
          <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 45%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
        </body>
        </html>
        
         
        `);
      }
    } else {
      res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Access Successful</title>
        <style>
        @font-face {
          font-family: "myfont";
          src: url("/modern\ M.ttf");
        }
          body {
            text-align: center;
            background-image: url('/19651.jpg');
  font-family: "myfont";    
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.834);  
  background-size:cover;
          }
          p {
            color: #fff;
            position: absolute;
            top: 52%;
            font-size: 16px;
            left: 47%;
            font-family: 'myfont', sans-serif;
            animation: blink .3s infinite;
            filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
          }
          
@keyframes blink {
0% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}
        </style>
        <script>
          setTimeout(function() {
            window.location.href = 'user';
          }, 2000);
        </script>
      </head>
      <body>
        <script>
          var audio = new Audio('/access denied.m4a');
          audio.play();
        </script>
        <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
        <p>Access Denied</p>
        <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 45%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
      </body>
      </html>
      
       
      `);
    }
  });
});



//admin

app.post('/loginadmin', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM admin WHERE username = ?';
 
  connection.query(query, [username], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      if (password === user.password) {
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Access Successful</title>
          <style>
          @font-face {
            font-family: "myfont";
            src: url("/modern\ M.ttf");
          }
            body {
              text-align: center;
              background-image: url('/19651.jpg');
              font-family: "myfont";    
              background-blend-mode: multiply;
              background-color: rgba(0, 0, 0, 0.834);  
              background-size:cover;
            }
            p {
              
              color: #fff;
              position: absolute;
              top: 52%;
              font-size: 16px;
              left: 47%;
              font-family: 'myfont', sans-serif;
              animation: blink .3s infinite;
              filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
            }
            
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
          </style>
          <script>
            setTimeout(function() {
              window.location.href = 'adminhome';
            }, 2000);
          </script>
        </head>
        <body>
          <script>
            var audio = new Audio('/admin.m4a');
            audio.play();
          </script>
          <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
          <p>Welcome Back</p>
          <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 44%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
        </body>
        </html>
        
         
        `);
      } else {
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Access Successful</title>
          <style>
          @font-face {
            font-family: "myfont";
            src: url("/modern\ M.ttf");
          }
            body {
              text-align: center;
              background-image: url('/19651.jpg');
              font-family: "myfont";    
              background-blend-mode: multiply;
              background-color: rgba(0, 0, 0, 0.834);  
              background-size:cover;
            }
            p {
              
              color: #fff;
              position: absolute;
              top: 52%;
              font-size: 16px;
              left: 47%;
              font-family: 'myfont', sans-serif;
              animation: blink .3s infinite;
              filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
            }
            
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
          </style>
          <script>
            setTimeout(function() {
              window.location.href = 'admin';
            }, 2000);
          </script>
        </head>
        <body>
          <script>
            var audio = new Audio('/access denied.m4a');
            audio.play();
          </script>
          <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
          <p>Access Denied</p>
          <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 45%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
        </body>
        </html>
        
         
        `);
      }
    } else {
      res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Access Successful</title>
        <style>
        @font-face {
          font-family: "myfont";
          src: url("/modern\ M.ttf");
        }
          body {
            text-align: center;
            background-image: url('/19651.jpg');
            font-family: "myfont";    
            background-blend-mode: multiply;
            background-color: rgba(0, 0, 0, 0.834);  
            background-size:cover;
          }
          p {
            
            color: #fff;
            position: absolute;
            top: 52%;
            font-size: 16px;
            left: 47%;
            font-family: 'myfont', sans-serif;
            animation: blink .3s infinite;
            filter:drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
          }
          
@keyframes blink {
0% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}
        </style>
        <script>
          setTimeout(function() {
            window.location.href = 'admin';
          }, 2000);
        </script>
      </head>
      <body>
        <script>
          var audio = new Audio('/access denied.m4a');
          audio.play();
        </script>
        <img src="/wave.gif" style="width: 200px; margin-top: 20%;">
        <p>Access Denied</p>
        <img src="/light.png" style="height: 140px;width:250px;position: absolute;top: 45%;left:42%;margin-bottom:30px;animation: blink .01s infinite;">
      </body>
      </html>
      
       
      `);
    }
  });
});

app.get('/adminhome', (req, res) => {
  const usersQuery = 'SELECT * FROM users';
  const adminQuery = 'SELECT * FROM admin';

  connection.query(usersQuery, (err, usersResults) => {
    if (err) throw err;

    connection.query(adminQuery, (err, adminResults) => {
      if (err) throw err;

      res.render('adminhome', { users: usersResults, admin: adminResults });
    });
  });
});

//userstable
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) throw err;

    res.render('users', { users: results });
  });
});
app.get('/admin1', (req, res) => {
  const query = 'SELECT * FROM admin';

  connection.query(query, (err, results) => {
    if (err) throw err;

    res.render('admin1', { users: results });
  });
});
// Define the route for the admin page


//insert
app.post('/insert', (req, res) => {
  const { name,username, password } = req.body; // Assuming name and email are being sent in the request body

  // SQL query to insert data into a table called 'users'
  const query = 'INSERT INTO users (name, username,password) VALUES (?, ?,?)';
  const values = [name,username, password];

  // Execute the SQL query
  connection.query(query, values, (err, results) => {
    if (err) {
      res.send(`
      <script>
      var audio = new Audio('/Account Creation fai.m4a');
      audio.play();
    </script>
    <body style="text-align:center;background-color:black">
    <img src="/wave.gif" alt="Error" style="width: 200px;margin-top: 20%;">
    </body>
    <script>
      setTimeout(function() {
        window.location.href = 'users';
      }, 2500); // Delay the redirect by 2 seconds to allow time for the sound to play
    </script>
      `);
      return;
    }

    // Data successfully inserted
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
        <script src="/vec3.js"></script>
      <style>
        @font-face {
      font-family: "myfont";
      src: url("modern\ M.ttf");
    }
        body {
        padding: 0;
        margin: 0;
       
    }
    
    .container{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 700px;
                text-align: center;
                z-index: 999999999;
                background-color: rgb(3, 4, 7);
                font-family: "myfont";
                color: rgba(40, 176, 255, 0.897);
                
            }
            #l{
              margin: 0;
               
               
            }
            
            @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
    .loader img{
        height: 30px;
        animation: bounce 1s infinite;
    }
    #canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(512724.png) no-repeat;
    }
    .centered-div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 250px;
      z-index: 1;
      text-align: center;
      backdrop-filter: blur(2px);
      font-family: "myfont";
      display: none;
    }
    .centered-div1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 250px;
      z-index: 1;
      text-align: center;
      backdrop-filter: blur(2px);
      font-family: "myfont";
      display: none;
      z-index:200;
    }
    .centered-div P{
      margin-top:140px;
      font-size: 20px;
      color: #fff;
      filter: drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
      
    }
    .centered-div1 P{
      margin-top:140px;
      font-size: 20px;
      color: #fff;
      filter: drop-shadow( 10px 10px 10px rgba(59, 157, 255, 0.696));
      
    }
    button{
      width: 100px;
      height: 45px;
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      font-weight: bold;
      box-shadow: rgba(34, 34, 34, 0.25) 0px 54px 55px, rgba(126, 125, 125, 0.12) 0px -12px 30px, rgba(123, 122, 122, 0.12) 0px 4px 6px, rgba(99, 98, 98, 0.17) 0px 12px 13px, rgba(106, 103, 103, 0.09) 0px -3px 5px;
    
    
    }
    
    button:hover{
      background-color: #fff;
      color: black;
    }
 
  
    
      </style>
    </head>
    <body>
      <canvas id="canvas">
     </canvas>
     <div class="centered-div" id="timed-paragraph">
     <p >Account Creation Success</p></div>
     <div class="centered-div1" id="timed-paragraph1">
     <p >Redirecting... In 3... 2... 1...</p></div>
      <audio id="voice" autoplay>

      <source src="/warp.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
      <script src="/space.js">
      </script>
         <script>
          var audio = new Audio('/acc creation.m4a');
          audio.play();
          setTimeout(function() {
            var audio = new Audio('/redirecting.m4a');
            audio.play();
          }, 10500); 
          setTimeout(function() {
            window.location.href = 'dashboard';
          }, 14900); // Delay the redirect by 2 seconds to allow time for the sound to play
        </script>
        <script>
        document.addEventListener("DOMContentLoaded", function() {
          var paragraph = document.getElementById("timed-paragraph");
        
          setTimeout(function() {
            paragraph.style.display = "block";
          }, 10); // 5000 milliseconds = 5 seconds
          setTimeout(function() {
            paragraph.style.display = "none";
          }, 3000); // 5000 milliseconds = 5 seconds
        });
        
        </script>
        <script>
        document.addEventListener("DOMContentLoaded", function() {
          var paragraph = document.getElementById("timed-paragraph1");
        
          setTimeout(function() {
            paragraph.style.display = "block";
          }, 11000); // 5000 milliseconds = 5 seconds
          setTimeout(function() {
            paragraph.style.display = "none";
          }, 15000); // 5000 milliseconds = 5 seconds
        });
        
        </script>
    </body>
    </html>
    
    `);
  });
});








// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



