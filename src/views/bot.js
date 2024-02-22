export default (data) => {
  const { name, description, actions } = data;
  return `
    <div class="my-2 col-6 col-lg-3">
      <div class="card h-100 card-bots">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class="card-text">Commands : <br><span class="allowTextCopy">${actions.map(
    (action) => {
      let valueToReturn = `- ${action.words[0]}`;
      action.args.forEach((arg) => {
        if (arg) {
          valueToReturn += ` <#${arg}> `;
        }
      });
      return valueToReturn;
    }
  ).join('<br>')}
  </span>
  </p >
        </div >
      </div >
    </div >
    `;
};
