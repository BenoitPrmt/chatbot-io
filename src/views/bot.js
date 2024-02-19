export default (data) => {
  const { name, description, actions } = data;
  return `
    <div class="my-2 col-6 col-lg-3">
      <div class="card h-100 card-bots">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class="card-text">Commands : ${actions.map(
    (action) => {
      let valueToReturn = action.name;
      action.args.forEach((arg) => {
        if (arg) {
          valueToReturn = `${action.name} < ${arg} >`;
        }
      });
      return valueToReturn;
    }
  ).join(' / ')}
  </p >
        </div >
      </div >
    </div >
    `;
};
