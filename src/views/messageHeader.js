export default (position, author, avatar) => {
  console.log(author);
  if (position.includes('end')) {
    return `
      <h5 class="text-light">${author}</h5>
      <img class="avatar rounded-circle"src="${avatar}"alt="${author}">
    `;
  }
  return `
      <img class="avatar rounded-circle"src="${avatar}"alt="${author}">
      <h5 class="text-light">${author}</h5>
    `;
};
