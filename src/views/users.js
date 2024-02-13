import viewUser from './user';

export default (data) => `
    ${data.map((user) => viewUser(user)).join('')}
  `;
