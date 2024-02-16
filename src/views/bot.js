export default (data) => {
  const { name, description } = data;
  return `
    <div class="col-6 col-lg-3">
      <div class="card my-2">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    </div>
    `;
};
