export default (data) => {
  const { name, id } = data;
  return `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${id}</p>
          <a href="/chat/${id}" class="btn btn-primary">Chat with</a>
        </div>
      </div>
    </div>
    `;
};
