export default (data) => {
  const {
    sender,
    content
  } = data;
  return `
    <div class="d-flex ${sender === 'User' ? 'justify-content-end' : 'justify-content-start'}">
      <div class="card">
        <div class="card-header ${sender === 'User' ? 'justify-content-end' : 'justify-content-start'}">
          <h5 class="text-light">${sender}</h5>
          <img class="avatar rounded-circle"
                       src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                       alt="">
        </div>
        <div class="card-body bg-light text-black ${sender === 'User' ? 'right-body' : 'left-body'}">
            <p class="card-text">${content}</p>
        </div>
      </div>
    </div>
    `;
};
