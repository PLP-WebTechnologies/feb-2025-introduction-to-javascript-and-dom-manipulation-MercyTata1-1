// Change text content when button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamic-heading').textContent = 'Text has been changed!';
});

// Modify CSS styles when button is clicked
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const paragraph = document.getElementById('styled-paragraph');
    paragraph.style.color = 'red';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontWeight = 'bold';
});

// Add or remove an element when button is clicked
document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const extraElement = document.getElementById('extraElement');

    if (extraElement.innerHTML === '') {
        extraElement.innerHTML = '<p>This is an added element!</p>';
    } else {
        extraElement.innerHTML = '';
    }
});
