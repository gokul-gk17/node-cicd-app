const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>CI/CD Deployment Letter</title>
      </head>
      <body style="background: #f4f6f9; font-family: 'Segoe UI', sans-serif;">

        <div style="
          max-width: 800px;
          margin: 50px auto;
          padding: 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 2px solid #007bff;
        ">

          <h2 style="text-align: center; color: #007bff;">
             CI/CD Project Submission
          </h2>

          <p style="text-align: right;">
            <b>Date:</b> ${new Date().toLocaleDateString()}
          </p>

          <p><b>To,</b></p>
          <p><b>Respected Sir,</b></p>

          <p>
            I hope you are doing well. I am writing to inform you that I have successfully
            implemented a <b>CI/CD pipeline using Jenkins on AWS EC2</b>.
          </p>

          <p>
            This project demonstrates :
          </p>

          <ul>
            <li> GitHub Integration</li>
            <li> Automated Build & Deployment</li>
            <li> Jenkins Pipeline</li>
            <li> PM2 Process Management</li>
            <li> Live Public Deployment</li>
          </ul>

          <p>
            Any code changes pushed to GitHub are automatically deployed and reflected
            on this live application, showcasing a complete DevOps workflow.
          </p>

          <p>
            I kindly request you to review and accept this project submission.
          </p>

          <br/>

          <p><b>Sincerely,</b></p>
          <p><b>Gokul</b></p>

          <hr/>

          <p style="text-align: center; color: gray; font-size: 14px;">
             Deployed via Jenkins | AWS EC2 | Auto CI/CD Enabled <br/>
            ⏱ Last Updated: ${new Date().toLocaleString()}
          </p>

        </div>

      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server running...");
});
