export default () => (`
    <section class="row chat">
      <div class="col-3 left-side">
        <h3 class="text-light">Bots' Name</h3>
        <ul class="list-group gap-3 pt-3 col-11">
          <li class="list-group-item">
            <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">
              <img class="avatar rounded-circle"
                           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                           alt="">
              <h5 class="text-black pt-0 pt-lg-1">Bot 1</h5>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">
              <img class="avatar rounded-circle"
                           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                           alt="">
              <h5 class="text-black pt-0 pt-lg-1">Bot 1</h5>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">
              <img class="avatar rounded-circle"
                           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                           alt="">
              <h5 class="text-black pt-0 pt-lg-1">Bot 1</h5>
            </div>
          </li>
          
          <li class="list-group-item">
            <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">
              <img class="avatar rounded-circle"
                           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                           alt="">
              <h5 class="text-black pt-0 pt-lg-1">Bot 1</h5>
            </div>
          </li>
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
