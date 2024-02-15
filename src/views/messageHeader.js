export default (position, sender, avatar) => {
  if (position.includes('end')) {
    return `
      <h5 class="text-light">${sender}</h5>
      <img class="avatar rounded-circle"
           src="${avatar}"
           alt="${sender}">
    `;
  }
  return `
      <img class="avatar rounded-circle"
           src="${avatar}"
           alt="${sender}">
      <h5 class="text-light">${sender}</h5>
    `;
};
