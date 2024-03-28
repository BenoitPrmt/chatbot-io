import messageHeader from './messageHeader';

export default (data) => {
  const {
    id,
    author,
    avatar,
    bot,
    message,
    date
  } = data;
  const dateObject = new Date(date);
  const formattedDate = `
  ${dateObject.getUTCDate()}-${dateObject.getUTCMonth() + 1}-${dateObject.getUTCFullYear()}
  at ${dateObject.toLocaleTimeString()}
  `;
  const position = bot ? 'justify-content-start' : 'justify-content-end';
  const classPosition = bot ? 'left-body' : 'right-body';

  return `
    <div class="d-flex ${position}" message-id="${id}">
      <div class="card">
        <div class="card-header ${position}">
        ${messageHeader(position, author, avatar)} 
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
