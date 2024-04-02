export default (position, name, avatar) => {
  console.log(name);
  if (position.includes('end')) {
    return `
      <h5 class="text-light">${name}</h5>
      <img class="avatar rounded-circle"src="${avatar}"alt="${name}">
    `;
  }
  return `
      <img class="avatar rounded-circle"src="${avatar}"alt="${name}">
      <h5 class="text-light">${name}</h5>
    `;
};
