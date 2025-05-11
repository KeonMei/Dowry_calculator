document.getElementById('submit').addEventListener('click', function() {
    let price = 100;


    let education = document.getElementById('education').value;
    if (education === 'bachelor') {
        price *= 1.5;
    } else if (education === 'college') {
        price *= 1.2;
    } else if (education === 'high_school') {
        price *= 1.05;
    } else if (education === 'middle_school') {
        price *= 0.9;
    }

    let networth = document.getElementById('networth').value;
    if (networth === 'upper_class') {
        price *= 2;
    } else if (networth === 'middle_class') {
        price *= 1.5;
    } else if (networth === 'lower_class') {
        price *= 1.2;
    }

    let caste = document.getElementById('caste').value;
    if (caste === 'brahmin') {
        price += 100;
    } else if (caste === 'kshatriya') {
        price += 50;
    } else if (caste === 'vaishya') {
        price += 20;
    } else if (caste === 'shudra') {
        price += 10;
    } else if (caste === 'varna') {
        price -= 50;
    }

    let skills = [
        { id: 'music', value: 10 },
        { id: 'cook', value: 20 },
        { id: 'easygoing', value: 15 },
        { id: 'singer', value: 10 }
    ];

    for (let i = 0; i < skills.length; i++) {
        let checkbox = document.getElementById(skills[i].id);
        if (checkbox.checked) {
            price += skills[i].value;
        }
    }

    let age = document.querySelector('input[name="age"]:checked');
    if (age) {
        if (age.value === '18-23') {
            price *= 1.5;
        } else if (age.value === '24-27') {
            price *= 1.2;
        } else if (age.value === '28+') {
            price *= 0.95;
        }
    }

    let parentGossip = document.getElementById('parentGossip').checked;
    let characterGossip = document.getElementById('characterGossip').checked;
    let generalGossip = document.getElementById('generalGossip').checked;

    if (parentGossip && characterGossip) {
        price *= 0.85 * 0.9;
    } else if (parentGossip || characterGossip) {
        if (parentGossip) {
            price *= 0.85;
        }
        if (characterGossip) {
            price *= 0.9;
        }
    }

    if (generalGossip) {
        price -= 20;
    }

    let result = document.getElementById('priceDisplay');
    result.textContent = "Final Price: $" + price.toFixed(2);

    if (price >= 200) {
        result.style.color = 'green';
    } else if (price < 80) {
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
    }
});
