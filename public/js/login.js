// Asynchronous function to handle form submission for Valorant login
const valorantLoginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-valorant-login').value.trim();
    const password = document.querySelector('#password-valorant-login').value.trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
  };
  
  const valorantLoginForm = document.querySelector('.valorant-login-form');
if (valorantLoginForm) {
  valorantLoginForm.addEventListener('submit', valorantLoginFormHandler);
}