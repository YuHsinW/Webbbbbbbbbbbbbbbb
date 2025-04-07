// const weight = document.querySelector(#weight);
// const height = document.querySelector(#height);

// while()
// const bmi = weight.value/ ((height.value/100) ** 2);
// console.log(bmi);
document.getElementById('calculate').addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const systolic = parseFloat(document.getElementById('blood-pressure1').value);
    const diastolic = parseFloat(document.getElementById('blood-pressure2').value);

    // BMI calculation
    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('bmi-result').textContent = `BMI: ${bmi.toFixed(1)}`;

    // Blood pressure category
    let category = '';
    if (systolic >= 140 || diastolic >= 90) {
        category = 'High Blood Pressure Stage 2';
    } else if (systolic >= 130 || diastolic >= 80) {
        category = 'High Blood Pressure Stage 1';
    } else if (systolic >= 120 && diastolic < 80) {
        category = 'Elevated Blood Pressure';
    } else {
        category = 'Normal Blood Pressure';
    }
    document.getElementById('bp-category').textContent = `Blood Pressure: ${category}`;

    // Suggestion
    let suggestion = '';
    if (bmi < 18.5) suggestion = 'Underweight: consider improving nutrition.';
    else if (bmi < 24.9) suggestion = 'Healthy weight: keep it up!';
    else if (bmi < 29.9) suggestion = 'Overweight: consider more exercise and healthy eating.';
    else suggestion = 'Obese: please consult with a healthcare provider.';

    document.getElementById('health-suggestion').textContent = suggestion;

    // Update chart
    updateCharts(systolic, diastolic, bmi);
});

function updateCharts(sys, dia, bmi) {
    const ctx1 = document.getElementById('bpChart').getContext('2d');
    const ctx2 = document.getElementById('bmiChart').getContext('2d');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Systolic', 'Diastolic'],
            datasets: [{
                label: 'Blood Pressure (mmHg)',
                data: [sys, dia],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        }
    });

    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['BMI'],
            datasets: [{
                label: 'BMI Value',
                data: [bmi, 40 - bmi],
                backgroundColor: ['#4BC0C0', '#E7E9ED']
            }]
        },
        options: {
            circumference: 180,
            rotation: -90
        }
    });
}