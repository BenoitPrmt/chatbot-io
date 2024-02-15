import messageHeader from './messageHeader';

export default (data) => {
  const {
    sender,
    content
  } = data;
  const position = sender === 'User' ? 'justify-content-end' : 'justify-content-start';
  const classPosition = sender === 'User' ? 'right-body' : 'left-body';

  return `
    <div class="d-flex ${position}">
      <div class="card">
        <div class="card-header ${position}">
        ${messageHeader(position, sender)} 
        </div>
        <div class="card-body bg-light text-black ${classPosition}">
            <p class="card-text">${content}</p>
        </div>
      </div >
    </div >
      `;
};
