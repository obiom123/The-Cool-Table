const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/the_cool_table', {
  dialect: 'postgres'
});


// Create models here
const User = sequelize.define('user', {
  userEmail: { type: Sequelize.STRING, unique: true },
  passwordDigest: Sequelize.STRING,
})

const League = sequelize.define('league', {
  leagueName: Sequelize.TEXT,
  gender: Sequelize.TEXT,
  startEndDates: Sequelize.TEXT,
  leagueFee: Sequelize.TEXT,
})

const Team = sequelize.define('team', {
  teamName: Sequelize.TEXT,
  coachName: Sequelize.TEXT,
  coachPhoneNumber: Sequelize.TEXT,
  coachEmail: Sequelize.TEXT,
  teamColor: Sequelize.TEXT,
  amountOwed: Sequelize.INTEGER,
})

const Player = sequelize.define('player', {
  name: Sequelize.TEXT,
  age: Sequelize.INTEGER,
  playerPhoneNumber: Sequelize.TEXT,
  playerEmergencyContact: Sequelize.TEXT,
  pointsGame1: Sequelize.TEXT,
  pointsGame2: Sequelize.TEXT,
  pointsGame3: Sequelize.TEXT,
  pointsGame4: Sequelize.TEXT,
  pointsGame5: Sequelize.TEXT,
  pointsGame6: Sequelize.TEXT,
  pointsGame7: Sequelize.TEXT,
  pointsGame8: Sequelize.TEXT,
  pointsGame9: Sequelize.TEXT,
  pointsGame10: Sequelize.TEXT,
  pointsGame11: Sequelize.TEXT,
  pointsGame12: Sequelize.TEXT,
  avgPPG: Sequelize.TEXT,
})

User.hasOne(Team);
Team.belongsTo(User)
League.hasMany(Team);
Team.hasMany(Player);
Player.belongsTo(Team);
Team.belongsTo(League);

module.exports = {
  // Export models
  User: User,
  League: League,
  Team: Team,
  Player: Player,
  sequelize: sequelize
};
