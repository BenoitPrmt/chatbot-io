import viewBots from './bot';

export default (data) => (`
    <h1>Our bots</h1>
    ${data.map((bot) => viewBots(bot)).join('')}
`);
