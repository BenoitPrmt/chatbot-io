import messageHeader from './messageHeader';

export default (data) => {
  const {
    sender,
    content,
    avatar,
    date
  } = data;
  const formattedDate = `
  ${date.toLocaleTimeString()} | 
  ${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}
  `;
  const position = sender === localStorage.getItem('username') ? 'justify-content-end' : 'justify-content-start';
  const classPosition = sender === localStorage.getItem('username') ? 'right-body' : 'left-body';

  return `
    <div class="d-flex ${position}">
      <div class="card">
        <div class="card-header ${position}">
        ${messageHeader(position, sender, avatar)} 
        </div>
        <div class="card-body bg-light text-black ${classPosition}">
            <p class="card-text">${content}</p>
        </div>
        <small class="text-muted pt-1">${formattedDate}</small>
      </div>
    </div >
      `;
};
