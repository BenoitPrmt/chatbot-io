import viewBots from './bot';

export default (data) => (`
    <h1 class="text-light">Our bots.</h1>
    <div class="row text-light">
    ${data.map((bot) => viewBots(bot)).join('')}
    </div>
`);
