function saveContent() {
  const content = document.getElementById('editableContent').innerHTML;

  fetch('/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log(data); // Log successful response
    alert('Changes saved successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to save changes!');
  });
}
