const shifumiAction = {
  name: 'shifumi',
  words: ['shifumi'],
  args: ['choice'],
  action: (args) => {
    const possiblesChoices = [
      {
        name: 'Rock',
        emoji: '🪨',
        winAgainst: 'Scissors',
        aliases: ['rock', 'r', 'pierre']
      },
      {
        name: 'Paper',
        emoji: '📄',
        winAgainst: 'Rock',
        aliases: ['paper', 'p', 'papier']
      },
      {
        name: 'Scissors',
        emoji: '✂️',
        winAgainst: 'Paper',
        aliases: ['scissors', 's', 'ciseaux', 'c']
      }
    ];
    const playerChoice = possiblesChoices.find((choice) => choice.aliases.includes(args[0]));
    if (!playerChoice) return { message: '❌ Incorrect choice' };

    const botChoice = possiblesChoices[Math.floor(Math.random() * possiblesChoices.length)];
    const baseMessage = `<b>${playerChoice.emoji} ${playerChoice.name} VS ${botChoice.name} ${botChoice.emoji}</b><br>`;

    if (playerChoice === botChoice) return { message: `${baseMessage}Draw !` };
    if (playerChoice.winAgainst === botChoice.name) return { message: `${baseMessage}You win !` };
    return { message: `${baseMessage}You lose !` };
  }
};

export default shifumiAction;
