const scriptURL = 'https://script.google.com/macros/s/AKfycbzu6hxZNq54vt6mXMvYEd6UwKCayE5YGhccctcY4HqXpxey09-__xJYIaAwsnn_jTH8/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })