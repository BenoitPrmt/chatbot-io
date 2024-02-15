export default (position, sender) => {
  if (position.includes('end')) {
    return `
      <h5 class="text-light">${sender}</h5>
      <img class="avatar rounded-circle"
           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
           alt="${sender}"></img>
    `;
  }
  return `
      <img class="avatar rounded-circle"
           src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
           alt="${sender}"></img>
      <h5 class="text-light">${sender}</h5>
    `;
};
