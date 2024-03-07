const valorantLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

const valorantLogoutButton = document.querySelector('#valorant-logout');
if (valorantLogoutButton) {
  valorantLogoutButton.addEventListener('click', valorantLogout);
}