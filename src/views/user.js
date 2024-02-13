export default (data) => {
  const { name: { first, last }, email, picture: { large } } = data.user;
  return `
    <div class="col-3">
      <div class="card">
        <img src="${large}" class="card-img-top" alt="${first} ${last}">
        <div class="card-body">
          <h5 class="card-title">${first} ${last}</h5>
          <p class="card-text">${email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `;
};
