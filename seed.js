// Require model file here
const { User, League, Team, Player } = require('./models');

const main = async () => {
  // Create model instances here
  const user1 = await User.create({
    userEmail: 'Obiom@hotmail.com',
    passwordDigest: 'CoolCool'
  })

  const team1 = await Team.create({
    teamName: 'Good Guys',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })

  await team1.setUser(user1);

  process.exit();
}

main();

// const User = sequelize.define('user', {
//   userEmail: { type: Sequelize.STRING, unique: true },
//   passwordDigest: Sequelize.STRING,
// })

// const Team = sequelize.define('team', {
//   teamName: Sequelize.TEXT,
//   coachName: Sequelize.TEXT,
//   coachPhoneNumber: Sequelize.TEXT,
//   coachEmail: Sequelize.TEXT,
//   teamColor: Sequelize.TEXT,
//   amountOwed: Sequelize.INTEGER,
// })