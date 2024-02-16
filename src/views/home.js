import homeBotList from './homeBotList';
import entities from '../data/entitiesData';

export default () => (`
    <section class="row chat">
      <div class="col-3 left-side">
        <h3 class="text-light">Bots' Name</h3>
        <ul class="list-group gap-3 pt-3 col-11">
        ${entities.map((bot) => homeBotList(bot)).join('')}
        </ul>
      </div>
      
      <div class="col-9 right-side">
        <div class="messages-section"></div>
      
        <div class="messages">
          <div class="input-group">
              <input type="text" class="form-control input-message-content" placeholder="Type something..." aria-label="Type something..."
                     aria-describedby="button-addon2">
              <button class="btn btn-dark send-message" type="button" id="button-addon2"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
`);
