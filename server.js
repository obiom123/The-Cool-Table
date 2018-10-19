const express = require('express');
const bodyParser = require('body-parser');
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

  // const checkPassword = await bcrypt.compare(request.body.password, userInfo.passwordDigest);

  if (userInfo.passwordDigest === request.body.password) {
    const jwtToken = jwt.sign({ userId: userInfo.id }, jwtSecret);
    response.json(jwtToken);
  } else {
    response.status(409).json({
      message: 'The user email and password does not match'
    })
  }
})
app.get('/api/leagues', async (request, response) => {
  // const token = request.headers['jwt-token'];
  // const verify = await jwt.verify(token, jwtSecret);

  const leagues = await League.findAll({
    order: [['id', 'DESC']],
    // where: {userId: verify.userId }
  });
  response.json(leagues)
})
app.get('/api/players', async (request, response) => {
  console.log(request.query)
  // const token = request.headers['jwt-token'];
  // const verify = await jwt.verify(token, jwtSecret);
  const findAllOptions = {
    order: [['id', 'DESC']],
  }
  if (request.query.teamid) {
    findAllOptions.include = [
      {
        model: Team,
        where: { id: request.query.teamid },
        attributes: []
      }
    ]
  }
  const players = await Player.findAll(findAllOptions);
  response.json(players)
})
app.get('/api/players/:id', async (request, response) => {
  let id = request.params.id
  const idPlayer = await Player.findOne({
    where: {
      id: id
    }
  })
  response.json(idPlayer)
})

app.delete('/api/players/:id', async (request, response) => {
  const id = request.params.id 
  await Player.destroy({
    where: {
      id: id
    }
  });
  response.sendStatus(200);
});

app.put('/api/players/:id', async (request, response) => {
  let id = request.params.id;
  const playerEdit = await Player.findOne({
    where: {
      id: id
    }
  })
  const { name, age, playerPhoneNumber, playerEmergencyContact, pointsGame1, pointsGame2, pointsGame3, pointsGame4, pointsGame5, pointsGame6, pointsGame7, pointsGame8, pointsGame9, pointsGame10, pointsGame11, pointsGame12, avgPPG, teamId  } = request.body
     playerEdit.name = name
     playerEdit.age = age
     playerEdit.playerPhoneNumber = playerPhoneNumber
     playerEdit.playerEmergencyContact = playerEmergencyContact
     playerEdit.pointsGame1 = pointsGame1
     playerEdit.pointsGame2 = pointsGame2
     playerEdit.pointsGame3 = pointsGame3
     playerEdit.pointsGame4 = pointsGame4
     playerEdit.pointsGame5 = pointsGame5
     playerEdit.pointsGame6 = pointsGame6
     playerEdit.pointsGame7 = pointsGame7
     playerEdit.pointsGame8 = pointsGame8
     playerEdit.pointsGame9 = pointsGame9
     playerEdit.pointsGame10 = pointsGame10
     playerEdit.pointsGame11 = pointsGame11
     playerEdit.pointsGame12 = pointsGame12
     playerEdit.avgPPG = avgPPG
  await playerEdit.save();
  
  response.json(playerEdit);
})

app.post('/api/players', async (request, response) => {
  // const token = request.headers['jwt-token'];
  // const verify = await jwt.verify(token, jwtSecret);
  const { name, age, playerPhoneNumber, playerEmergencyContact, pointsGame1, pointsGame2, pointsGame3, pointsGame4, pointsGame5, pointsGame6, pointsGame7, pointsGame8, pointsGame9, pointsGame10, pointsGame11, pointsGame12, avgPPG, teamId  } = request.body
  const player = await Player.create({
      name: name,
      age: age,
      playerPhoneNumber: playerPhoneNumber,
      playerEmergencyContact: playerEmergencyContact,
      pointsGame1: pointsGame1,
      pointsGame2: pointsGame2,
      pointsGame3: pointsGame3,
      pointsGame4: pointsGame4,
      pointsGame5: pointsGame5,
      pointsGame6: pointsGame6,
      pointsGame7: pointsGame7,
      pointsGame8: pointsGame8,
      pointsGame9: pointsGame9,
      pointsGame10: pointsGame10,
      pointsGame11: pointsGame11,
      pointsGame12: pointsGame12,
      avgPPG: avgPPG
  });
  response.status(200).json(player)
});




app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
