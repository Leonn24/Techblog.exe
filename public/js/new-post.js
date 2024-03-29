// Asynchronous function to handle form submission for creating a new Valorant post
const newValorantPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-valorant-post').value.trim();
    const content = document.querySelector('#content-new-valorant-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create a new post.');
    }
}
};

const newValorantPostForm = document.querySelector('.new-valorant-post-form');
if (newValorantPostForm) {
  newValorantPostForm.addEventListener('submit', newValorantPostFormHandler);
}