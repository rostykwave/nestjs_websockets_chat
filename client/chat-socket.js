const socket = io('http://localhost:3000');

const message = document.getElementById('message');
const messages = document.getElementById('messages');
const submitBtn = document.getElementById('submit-btn');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value });
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

submitBtn.addEventListener('click', handleSubmitNewMessage);

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});
