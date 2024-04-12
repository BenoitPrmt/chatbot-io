import messageHeader from './messageHeader';

export default (data) => {
  const {
    id,
    avatar,
    name,
    botId,
    message,
    date
  } = data;
  const dateObject = new Date(date * 1000);
  const formattedDate = `
  ${dateObject.getUTCDate()}-${dateObject.getUTCMonth() + 1}-${dateObject.getUTCFullYear()}
  at ${dateObject.toLocaleTimeString()}
  `;
  const position = botId ? 'justify-content-start' : 'justify-content-end';
  const classPosition = botId ? 'left-body' : 'right-body';

  return `
    <div class="d-flex ${position}" id="${id}">
      <div class="card">
        <div class="card-header ${position}">
        ${messageHeader(position, name, avatar)} 
        </div>
        ${data.image ? `<img src="${data.image}" class="card-img-top" alt="...">` : ''}
        <div class="card-body bg-light text-black ${classPosition}">
            <p class="card-text">${message}</p>
        </div>
        <small class="text-muted pt-1">${formattedDate}</small>
      </div>
    </div>
      `;
};
