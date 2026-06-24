// Sample CDC lookup database (10 years old = 120 months)
// You can expand this object later with more ages!
const bmiGrowthData = {
    "male": {
        "120": { "p50": 16.9, "p95": 23.0 }
    },
    "female": {
        "120": { "p50": 17.0, "p95": 23.4 }
    }
};

function calculateChildBMI() {
    const gender = document.getElementById("gender").value;
    const ageYears = parseFloat(document.getElementById("age").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const actualWeight = parseFloat(document.getElementById("weight").value);
    
    // Validations
    if (!ageYears || !heightCm || !actualWeight) {
        alert("Please fill in all fields completely.");
        return;
    }

    const heightM = heightCm / 100;
    const ageMonths = Math.round(ageYears * 12);
    
    // 1. Calculate Actual BMI
    const actualBMI = actualWeight / (heightM * heightM);
    
    // 2. Fetch data from our database. If age isn't 10, we'll fall back 
    // to your 10-yo example values for now until data table is full.
    let p50_BMI = 16.9; 
    let p95_BMI = 23.0; 
    
    if (bmiGrowthData[gender] && bmiGrowthData[gender][ageMonths]) {
        p50_BMI = bmiGrowthData[gender][ageMonths].p50;
        p95_BMI = bmiGrowthData[gender][ageMonths].p95;
    } else {
        console.warn("Age data not in system. Defaulting to 10-year-old baseline constants.");
    }

    // 3. Check Obesity status against 95th percentile
    let status = "Healthy / Overweight weight range";
    let isObese = false;
    
    if (actualBMI >= p95_BMI) {
        status = "Obese (≥ 95th Percentile Line)";
        isObese = true;
    }

    // 4. Calculate Ideal Body Weight (using 50th percentile BMI)
    const idealBodyWeight = p50_BMI * (heightM * heightM);
    
    // 5. Calculate Adjusted Body Weight if Obese
    let adjustedBodyWeight = actualWeight; 
    if (isObese) {
        const correctionFactor = 0.4;
        adjustedBodyWeight = idealBodyWeight + (correctionFactor * (actualWeight - idealBodyWeight));
    }

    // 6. Push results to UI screen
    document.getElementById("resBMI").innerText = actualBMI.toFixed(1);
    document.getElementById("resStatus").innerText = status;
    document.getElementById("resIBW").innerText = idealBodyWeight.toFixed(1);
    document.getElementById("resAdjBW").innerText = adjustedBodyWeight.toFixed(1);
    
    // Reveal results panel
    document.getElementById("results").style.display = "block";
}
