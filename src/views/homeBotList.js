export default (data) => {
  const { name, avatar } = data;
  return `
  <li class="list-group-item bg-light">
    <div class="d-flex flex-column flex-lg-row gap-3 align-items-center">
      <img class="avatar rounded-circle"
        src=${avatar}
        alt="${name}" />
      <h5 class="text-black pt-0 pt-lg-1 text-truncate">${name}</h5>
    </div>
  </li>`;
};
