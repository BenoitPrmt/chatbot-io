export default () => (`
<h1 class="text-light">Welcome here!</h1>
    <div class="d-flex flex-column align-items-center gap-4 pt-5">
    <img class="login-avatar rounded-circle" src="https://source.boringavatars.com/" alt="">
    <div class="d-flex flex-column w-100 pt-5 align-items-center">
    <label class="text-light">Username :</label>
    <div class="input-group mt-1">
        <input type="text" class="form-control input-message-content" placeholder="Enter your username..." aria-label="Enter your username..."
                     aria-describedby="button-addon2">
    </div>
    <button class="btn btn-primary mt-2" type="submit" onclick=${this.submitWelcome(document.querySelector('input').value)}>Chat with bots</button>
    </div>
    </div>
`);
