import viewBots from './bot';

export default (data) => (`
    <h1>Our bots</h1>
    <div class="row">
    ${data.map((bot) => viewBots(bot)).join('')}
    </div>
`);
