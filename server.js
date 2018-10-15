const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5678;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, League, Team, Player } = require('./models');
const path = require('path');

const PORT = process.env.PORT || 5678;
const jwtSecret = 'cnc516516'

const app = express();

app.use(bodyParser.json());


app.post('/api/login', async (request, response) => {
  if (!request.body.userEmail || !request.body.password) {
    response.status(400).json({
      message: 'The user email and password is invalid'
    })
    return;
  }

  const userInfo = await User.findOne({
    where: {
      userEmail: request.body.userEmail
    }
  })

  if (userInfo === null) {
    response.status(401).json({
      message: 'Invalid user email'
    })
  }

  const checkPassword = await bcrypt.compare(request.body.password, userInfo.passwordDigest);

  if (checkPassword) {
    const jwtToken = jwt.sign({ userId: userInfo.id }, jwtSecret);
    response.json(jwtToken);
  } else {
    response.status(409).json({
      message: 'The user email and password does not match'
    })
  }
})


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
