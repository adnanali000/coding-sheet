const http = require('http');

const hostname = '127.0.0.1';
const port = 3050;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');

  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="This is description">
      <meta name="tags" content="html,css,js,mongodb,web development">
      <meta name="robots" content="INDEX,FOLLOW">
      <title>Web Developer</title>
  </head>
  
  <body>
      <div>
          <h1><em> Web Developer</em></h1>
          <h2>HEADING AND PARAGRAPH</h2>
          <p>hey my name is <strong>adii</strong></p>
          <p>Lorem ipsum dolor sit, <br>  amet consectetur adipisicing elit. Esse, corrupti.</p>
          <hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus tempore architecto earum quasi aspernatur laborum accusantium, tenetur culpa, sed voluptatibus labore officia eligendi neque  eius voluptates consequatur iste nam!</p>
          <hr>
  
          <h2>LINKS AND IMAGES</h2>
          <a href="https://google.com" target="_blank">Go to Google</a>
          <a href="https://facebook.com" target="_blank">Go to Facebook</a>
          <br>
          <br>
          <img src="https://source.unsplash.com/user/erondu/400x200" alt="random image">
  
          <hr>
         <h2>LIST AND TABLE</h2> 
         <ul type="circle">
             <li>hello world</li>
             <li>hello world</li>
             <ul>
                 <li>HELLO WORLD</li>
                 <li>HELLO WORLD</li>
             </ul>
             <li>hello world</li>
         </ul>
  
         <ol type="I">
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
         </ol>
  
         <h2>Table</h2>
  
         <table>
             <thead>
                 <tr>
                     <th>Player Name</th>
                     <th>Id</th>
                     <th>Role</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>Ronaldo</td>
                     <td>CR7</td>
                     <td>Attacker</td>
                 </tr>
  
                 <tr>
                  <td>Ronaldo</td>
                  <td>CR7</td>
                  <td>Attacker</td>
                 </tr>
  
              <tr>
                  <td>Ronaldo</td>
                  <td>CR7</td>
                  <td>Attacker</td>
              </tr>
  
             </tbody>
         </table>
  
         <h2>Forms And Input Tags</h2>
  
         <form action="">
  
          <label for="name">Name:</label>
         <div>
              <input type="text" name="myName" id="name">
         </div><br>
         <div>
             Role: <input type="text" name="myRole">
          </div><br>
          <div>
              Date: <input type="date" name="myDate">
          </div><br>
         <div>
          Email: <input type="email" name="myEmail">
      </div><br>
      Bonus: <input type="number" name="myBonus">
  </div><br>
  <div>
      Are you eligible: <input type="checkbox" name="myEligibilty">
  </div><br>
  <div>
      Your Information: <br> <textarea name="myInfo" id="" cols="90" rows="10">
      </textarea>
  
      <div>
          <label for="car">Select Car: </label>
          <select name="myCar" id="car">
              <option value="cor">Corolla</option>
              <option value="civ" selected>Civic</option>
          </select>
      </div>
  </div><br>
  <div>
      <input type="submit" value="Submit Now">
      <input type="reset" value="Reset Now">
  </div>
  
  </form>
  
   <h3>Inline & Block Element</h3>
   <p style="border: 2px solid red;">Lorem ipsum dolor sit.</p>
   <p>Lorem ipsum dolor sit.</p> 
  
   <span style="border: 2px solid green;">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
   <span>Lorem, ipsum dolor.</span>
  
   <h3>Id and Classes</h3>
  
   <p class="para1">Lorem, ipsum.</p>
   <p id="para2">Lorem ipsum dolor sit.</p>
   <p class="para para1" id="para3">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
  
  <h3>Entites</h3>
  <p>Lorem, ipsum &nbsp; dolor.</p>
  <p>paragraph can de written as &lt;p&gt;</p>
  
  
  <h3>Sementic Elements</h3>
  
  <details>
   <summary> Lorem ipsum dolor sit amet,</summary> consectetur adipisicing elit. Facilis assumenda aliquam voluptatum ipsum sint quo beatae similique, impedit odit, dolorum atque enim neque itaque deserunt? Ipsum voluptatibus sunt accusantium aliquid!
  </details>
  
  
  </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
