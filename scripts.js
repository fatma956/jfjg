function submitForm() {
    const form = document.getElementById('checkupForm');
    const formData = new FormData(form);
    const vitaminLevels = {
        vitamin_a: parseFloat(formData.get('vitamin_a')),
        vitamin_b12: parseFloat(formData.get('vitamin_b12')),
        vitamin_c: parseFloat(formData.get('vitamin_c')),
        vitamin_d: parseFloat(formData.get('vitamin_d')),
        vitamin_e: parseFloat(formData.get('vitamin_e')),
        vitamin_k: parseFloat(formData.get('vitamin_k')),
        vitamin_b2: parseFloat(formData.get('vitamin_b2'))
    };

    const deficiencies = [];
    const advice = {
        vitamin_a: 'Carrots, sweet potatoes, spinach',
        vitamin_b12: 'Fish, meat, dairy products',
        vitamin_c: 'Citrus fruits, strawberries, bell peppers',
        vitamin_d: 'Sunlight, fatty fish, fortified milk',
        vitamin_e: 'Nuts, seeds, spinach',
        vitamin_k: 'Leafy greens, broccoli, Brussels sprouts',
        vitamin_b2: 'Milk, eggs, almonds'
    };

    if (vitaminLevels.vitamin_a < 30) deficiencies.push('Vitamin A');
    if (vitaminLevels.vitamin_b12 < 200) deficiencies.push('Vitamin B12');
    if (vitaminLevels.vitamin_c < 75) deficiencies.push('Vitamin C');
    if (vitaminLevels.vitamin_d < 20) deficiencies.push('Vitamin D');
    if (vitaminLevels.vitamin_e < 15) deficiencies.push('Vitamin E');
    if (vitaminLevels.vitamin_k < 30) deficiencies.push('Vitamin K');
    if (vitaminLevels.vitamin_b2 < 1.1) deficiencies.push('Vitamin B2');

    const resultsDiv = document.getElementById('results');
    if (deficiencies.length > 0) {
        resultsDiv.innerHTML = '<p>You have the following vitamin deficiencies:</p><ul>';
        deficiencies.forEach(vitamin => {
            resultsDiv.innerHTML += `<li>${vitamin}: ${advice[vitamin.toLowerCase().replace(' ', '_')]}</li>`;
        });
        resultsDiv.innerHTML += '</ul>';
    } else {
        resultsDiv.innerHTML = '<p>No deficiencies detected.</p>';
    }

    // Optionally, redirect to results page
    // window.location.href = 'results.html';
}
