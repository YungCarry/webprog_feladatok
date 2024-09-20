document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text-area');
    const saveButton = document.getElementById('save-button');

    // Szöveg beolvasása
    fetch('/read')
        .then(response => response.json())
        .then(data => {
            textArea.value = data.text;
        })
        .catch(error => console.error('Hiba a beolvasáskor:', error));

    // Szöveg mentése
    saveButton.addEventListener('click', () => {
        const updatedText = textArea.value;
        
        fetch('/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: updatedText })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => console.error('Hiba a mentéskor:', error));
    });
});