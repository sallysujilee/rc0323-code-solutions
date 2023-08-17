console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Player 1', hand: [] },
  { name: 'Player 2', hand: [] },
  { name: 'Player 3', hand: [] },
  { name: 'Player 4', hand: [] }
];

const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

const deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    deck.push({ rank: ranks[j], suit: suits[i] });
  }
}

for (let i = deck.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

// Knuth Shuffle!

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < players.length; j++) {
    players[j].hand.push(deck.pop());
  }
}

const playerScores = [];
for (let i = 0; i < players.length; i++) {
  const player = players[i];
  let score = 0;
  for (let j = 0; j < player.hand.length; j++) {
    const card = player.hand[j];
    if (card.rank === 'Ace') score += 11;
    else if (['King', 'Queen', 'Jack'].includes(card.rank)) score += 10;
    else score += parseInt(card.rank);
  }
  playerScores.push({ name: player.name, score });
}

let winner = playerScores[0];
for (let i = 1; i < playerScores.length; i++) {
  if (playerScores[i].score > winner.score) {
    winner = playerScores[i];
  }
}

console.log(`The winner is ${winner.name} with a score of ${winner.score}`);
