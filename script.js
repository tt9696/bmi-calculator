// Data extracted from the CDC BMI-for-age growth charts (Ages 2 to 20)
// Structured by Gender -> Age in Years (mapped to corresponding P50 and P95 values)
const cdcBmiData = {
    "male": {
        "2":   { "p50": 16.6, "p95": 19.3 },
        "2.5": { "p50": 16.3, "p95": 18.8 },
        "3":   { "p50": 16.0, "p95": 18.3 },
        "3.5": { "p50": 15.8, "p95": 18.0 },
        "4":   { "p50": 15.6, "p95": 17.8 },
        "4.5": { "p50": 15.4, "p95": 17.8 },
        "5":   { "p50": 15.3, "p95": 17.9 },
        "5.5": { "p50": 15.3, "p95": 18.1 },
        "6":   { "p50": 15.3, "p95": 18.4 },
        "6.5": { "p50": 15.3, "p95": 18.8 },
        "7":   { "p50": 15.4, "p95": 19.2 },
        "7.5": { "p50": 15.5, "p95": 19.8 },
        "8":   { "p50": 15.7, "p95": 20.3 },
        "8.5": { "p50": 15.9, "p95": 21.0 },
        "9":   { "p50": 16.1, "p95": 21.6 },
        "9.5": { "p50": 16.4, "p95": 22.3 },
        "10":  { "p50": 16.7, "p95": 23.0 }, // Your 10-year-old baseline
        "10.5":{ "p50": 17.0, "p95": 23.7 },
        "11":  { "p50": 17.3, "p95": 24.3 },
        "11.5":{ "p50": 17.6, "p95": 25.0 },
        "12":  { "p50": 17.9, "p95": 25.6 },
        "12.5":{ "p50": 18.3, "p95": 26.2 },
        "13":  { "p50": 18.6, "p95": 26.8 },
        "13.5":{ "p50": 19.0, "p95": 27.4 },
        "14":  { "p50": 19.4, "p95": 28.0 },
        "14.5":{ "p50": 19.8, "p95": 28.5 },
        "15":  { "p50": 20.2, "p95": 29.0 },
        "15.5":{ "p50": 20.6, "p95": 29.5 },
        "16":  { "p50": 20.9, "p95": 30.0 },
        "16.5":{ "p50": 21.3, "p95": 30.4 },
        "17":  { "p50": 21.6, "p95": 30.9 },
        "17.5":{ "p50": 21.9, "p95": 31.3 },
        "18":  { "p50": 22.2, "p95": 31.7 },
        "18.5":{ "p50": 22.5, "p95": 32.1 },
        "19":  { "p50": 22.8, "p95": 32.5 },
        "19.5":{ "p50": 23.0, "p95": 32.9 },
        "20":  { "p50": 23.3, "p95": 33.3 }
    },
    "female": {
        "2":   { "p50": 16.4, "p95": 19.1 },
        "2.5": { "p50": 16.0, "p95": 18.5 },
        "3":   { "p50": 15.7, "p95": 18.1 },
        "3.5": { "p50": 15.4, "p95": 17.9 },
        "4":   { "p50": 15.3, "p95": 17.9 },
        "4.5": { "p50": 15.2, "p95": 18.0 },
        "5":   { "p50": 15.2, "p95": 18.2 },
        "5.5": { "p50": 15.2, "p95": 18.6 },
        "6":   { "p50": 15.3, "p95": 19.1 },
        "6.5": { "p50": 15.4, "p95": 19.6 },
        "7":   { "p50": 15.6, "p95": 20.3 },
        "7.5": { "p50": 15.8, "p95": 21.0 },
        "8":   { "p50": 16.1, "p95": 21.7 },
        "8.5": { "p50": 16.4, "p95": 22.5 },
        "9":   { "p50": 16.7, "p95": 23.3 },
        "9.5": { "p50": 17.1, "p95": 24.1 },
        "10":  { "p50": 17.5, "p95": 24.9 },
        "10.5":{ "p50": 17.9, "p95": 25.7 },
        "11":  { "p50": 18.3, "p95": 26.5 },
        "11.5":{ "p50": 18.8, "p95": 27.2 },
        "12":  { "p50": 19.2, "p95": 28.0 },
        "12.5":{ "p50": 19.7, "p95": 28.7 },
        "13":  { "p50": 20.1, "p95": 29.3 },
        "13.5":{ "p50": 20.5, "p95": 30.0 },
        "14":  { "p50": 20.9, "p95": 30.6 },
        "14.5":{ "p50": 21.3, "p95": 31.1 },
        "15":  { "p50": 21.6, "p95": 31.6 },
        "15.5":{ "p50": 21.9, "p95": 32.1 },
        "16":  { "p50": 22.2, "p95": 32.5 },
        "16.5":{ "p50": 22.4, "p95": 32.9 },
        "17":  { "p50": 22.6, "p95": 33.2 },
        "17.5":{ "p50": 22.8, "p95": 33.5 },
        "18":  { "p50": 23.0, "p95": 33.8 },
        "18.5":{ "p50": 23.1, "p95": 34.0 },
        "19":  { "p50": 23.2, "p95": 34.2 },
        "19.5":{ "p50": 23.3, "p95": 34.4 },
        "20":  { "p50": 23.4, "p95": 34.6 }
    }
};

function calculateChildBMI() {
    const gender = document.getElementById("gender").value;
    const ageYears = parseFloat(document.getElementById("age").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const actualWeight = parseFloat(document.getElementById("weight").value);
    
    // 1. Basic Form Validations
    if (!ageYears || !heightCm || !actualWeight) {
        alert("Please fill in all fields completely.");
        return;
    }

    const heightM = heightCm / 100;
    
    // 2. Calculate Actual BMI
    const actualBMI = actualWeight / (heightM * heightM);
    
    // 3. Find closest data mapping in our CDC array
    // This looks for an exact match or drops down to the nearest half-year marker
    const ageLookupKey = String(Math.floor(ageYears * 2) / 2); 
    
    let p50_BMI;
    let p95_BMI;
    
    if (cdcBmiData[gender] && cdcBmiData[gender][ageLookupKey]) {
        p50_BMI = cdcBmiData[gender][ageLookupKey].p50;
        p95_BMI = cdcBmiData[gender][ageLookupKey].p95;
    } else {
        alert("Data is only available for pediatric ranges between 2 and 20 years old.");
        return;
    }

    // 4. Check status using the 95th percentile curve line
    let status = "Normal / Overweight range (< 95th Percentile Line)";
    let isObese = false;
    
    if (actualBMI >= p95_BMI) {
        status = "Obese (≥ 95th Percentile Line)";
        isObese = true;
    }

    // 5. Calculate Ideal Body Weight (IBW) based exactly on your formula:
    // IBW = 50th Percentile BMI * Height(m) * Height(m)
    let rawIBW = p50_BMI * heightM * heightM;
    const idealBodyWeight = Math.round(rawIBW * 10) / 10;
    
    // 6. Calculate Adjusted Body Weight (AdjBW) if Obese
   let adjustedBodyWeight = actualWeight; 
    if (actualBMI >= p95_BMI) {
        const correctionFactor = 0.4;
        // 50 - (0.4 * (50 - 33.1)) = 43.24
        let rawAdjBW = actualWeight - (correctionFactor * (actualWeight - idealBodyWeight));
        adjustedBodyWeight = Math.round(rawAdjBW * 10) / 10; // This forces it to be exactly 43.2
    }

    // 7. Update Web View Items
    document.getElementById("resBMI").innerText = actualBMI.toFixed(1);
    document.getElementById("resStatus").innerText = status;
    document.getElementById("resIBW").innerText = idealBodyWeight.toFixed(1);
    
    // Visual display handling for Adjusted Weight
    if (isObese) {
        document.getElementById("resAdjBW").innerText = adjustedBodyWeight.toFixed(1);
        document.getElementById("adjWeightRow").style.display = "block";
    } else {
        document.getElementById("adjWeightRow").style.display = "none";
    }
    
    // Open results card
    document.getElementById("results").style.display = "block";
}
