document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('guestbook-form');
  const messagesList = document.getElementById('guestbook-messages');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    if (!name || !message) return;

    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong>: ${message}`;
    messagesList.prepend(li);

    form.reset();
  });
}); 
