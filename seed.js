// Require model file here
const { User, League, Team, Player } = require('./models');

const main = async () => {
  // Create model instances here
  const user1 = await User.create({
    userEmail: 'obiom@hotmail.com',
    passwordDigest: 'coolbeans'
  })
  const league1 = await League.create({
    leagueName: 'Mens League',
    gender: 'Men',
    startEndDates: '2/2/2019-4/4/2019',
    leagueFee: '$800',
  })
  const league2 = await League.create({
    leagueName: 'Girls League',
    gender: 'Men',
    startEndDates: '2/2/2019-4/4/2019',
    leagueFee: '$800',
  })
  
  const team1 = await Team.create({
    teamName: 'Good Guys',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team2 = await Team.create({
    teamName: 'Young Shooters',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team3 = await Team.create({
    teamName: 'Fill it Up',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team4 = await Team.create({
    teamName: 'Shooters Shoot',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team5 = await Team.create({
    teamName: 'Good Girls Gone',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team6 = await Team.create({
    teamName: 'team 5',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team7 = await Team.create({
    teamName: 'team 5',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })
  const team8 = await Team.create({
    teamName: 'team 5',
    coachName: 'Coach Obi',
    coachPhoneNumber: '516-223-0818',
    coachEmail: 'Obiom1@hotmail.com',
    teamColor: 'purple',
    amountOwed: 300
  })

  await team1.setLeague(league1);
  await team2.setLeague(league1);
  await team3.setLeague(league1);
  await team4.setLeague(league1);
  await team5.setLeague(league2);
  await team6.setLeague(league2);
  await team7.setLeague(league2);
  await team8.setLeague(league2);




  const player1 = await Player.create({
    name: 'Josh Jackson',
    age: 20,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 25,
    pointsGame2: 25,
    pointsGame3: 25,
    pointsGame4: 25,
    pointsGame5: 25,
    pointsGame6: 25,
    pointsGame7: 25,
    pointsGame8: 25,
    pointsGame9: 25,
    pointsGame10: 25,
    pointsGame11: 25,
    pointsGame12: 25,
    avgPPG: 25,
  })
  const player2 = await Player.create({
    name: 'Scot Tsai',
    age: 23,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 28,
    pointsGame2: 28,
    pointsGame3: 28,
    pointsGame4: 28,
    pointsGame5: 28,
    pointsGame6: 28,
    pointsGame7: 28,
    pointsGame8: 28,
    pointsGame9: 28,
    pointsGame10: 28,
    pointsGame11: 28,
    pointsGame12: 28,
    avgPPG: 28,
  })
  const player3 = await Player.create({
    name: 'Tim Hardaway',
    age: 28,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 29,
    pointsGame2: 29,
    pointsGame3: 29,
    pointsGame4: 29,
    pointsGame5: 29,
    pointsGame6: 29,
    pointsGame7: 29,
    pointsGame8: 29,
    pointsGame9: 29,
    pointsGame10: 29,
    pointsGame11: 29,
    pointsGame12: 29,
    avgPPG: 29,
  })
  const player4 = await Player.create({
    name: 'Lebron James',
    age: 30,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 31,
    pointsGame2: 31,
    pointsGame3: 31,
    pointsGame4: 31,
    pointsGame5: 31,
    pointsGame6: 31,
    pointsGame7: 31,
    pointsGame8: 31,
    pointsGame9: 31,
    pointsGame10: 31,
    pointsGame11: 31,
    pointsGame12: 31,
    avgPPG: 31,
  })
  const player5 = await Player.create({
    name: 'Kobe Bryant',
    age: 40,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 35,
    pointsGame2: 35,
    pointsGame3: 35,
    pointsGame4: 35,
    pointsGame5: 35,
    pointsGame6: 35,
    pointsGame7: 35,
    pointsGame8: 35,
    pointsGame9: 35,
    pointsGame10: 35,
    pointsGame11: 35,
    pointsGame12: 35,
    avgPPG: 11,
  })
  const player6 = await Player.create({
    name: 'Jim Jones',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 9,
  })
  const player7 = await Player.create({
    name: 'Caris LeVert',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 15,
  })
  const player8 = await Player.create({
    name: 'Alex Smith',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 17,
  })
  const player9 = await Player.create({
    name: 'Tasha Smith',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 20,
  })
  const player10 = await Player.create({
    name: 'Alice Walker',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 27,
  })
  const player11 = await Player.create({
    name: 'Kat Morris',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 19,
  })
  const player12 = await Player.create({
    name: 'Natacha Jenkins',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 7,
  })
  const player13 = await Player.create({
    name: 'Sarah Short',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 14,
  })
  const player14 = await Player.create({
    name: 'Sasha Prince',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 15,
  })
  const player15 = await Player.create({
    name: 'Kim Parker',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 18,
  })
  const player16 = await Player.create({
    name: 'Tina Jones',
    age: 29,
    playerPhoneNumber: '516-555-5555',
    playerEmergencyContact: 'Mom 516-555-5555',
    pointsGame1: 8,
    pointsGame2: 8,
    pointsGame3: 8,
    pointsGame4: 8,
    pointsGame5: 8,
    pointsGame6: 8,
    pointsGame7: 8,
    pointsGame8: 8,
    pointsGame9: 8,
    pointsGame10: 8,
    pointsGame11: 8,
    pointsGame12: 8,
    avgPPG: 15,
  })

  await player1.setTeam(team1);
  await player2.setTeam(team1);
  await player3.setTeam(team1);
  await player4.setTeam(team1);
  await player5.setTeam(team1);
  await player6.setTeam(team1);
  await player7.setTeam(team1);
  await player8.setTeam(team1);
  await player9.setTeam(team1);
  await player10.setTeam(team2);
  await player11.setTeam(team2);
  await player12.setTeam(team2);
  await player13.setTeam(team2);
  await player14.setTeam(team2);
  await player15.setTeam(team2);
  await player16.setTeam(team2);




  await team1.setUser(user1);

  process.exit();
}

main();
