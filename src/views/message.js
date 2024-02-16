import messageHeader from './messageHeader';

export default (data) => {
  const {
    sender,
    content,
    avatar,
    date
  } = data;
  const formattedDate = `
  ${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}
  at ${date.toLocaleTimeString()}
  `;
  const position = sender === localStorage.getItem('username').replace(/"/g, '') ? 'justify-content-end' : 'justify-content-start';
  const classPosition = sender === localStorage.getItem('username').replace(/"/g, '') ? 'right-body' : 'left-body';

  return `
    <div class="d-flex ${position}">
      <div class="card">
        <div class="card-header ${position}">
        ${messageHeader(position, sender, avatar)} 
        </div>
        ${data.image ? `<img src="${data.image}" class="card-img-top" alt="...">` : ''}
        <div class="card-body bg-light text-black ${classPosition}">
            <p class="card-text">${content}</p>
        </div>
        <small class="text-muted pt-1">${formattedDate}</small>
      </div>
    </div >
      `;
};
