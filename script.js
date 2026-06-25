//the graph calculation references -https://www.cdc.gov/growthcharts/data/set1clinical/cj41c023.pdf and https://www.cdc.gov/growthcharts/data/set1clinical/cj41c024.pdf

const cdcBmiData = {
    "male": {
        "2":   { "p50": 16.6, "p95": 19.3 },
        "2.5": { "p50": 16.3, "p95": 18.7 },
        "3":   { "p50": 16.0, "p95": 18.3 },
        "3.5": { "p50": 15.8, "p95": 18.0 },
        "4":   { "p50": 15.6, "p95": 17.8 },
        "4.5": { "p50": 15.5, "p95": 17.8 },
        "5":   { "p50": 15.4, "p95": 17.9 },
        "5.5": { "p50": 15.4, "p95": 18.1 },
        "6":   { "p50": 15.4, "p95": 18.4 },
        "6.5": { "p50": 15.4, "p95": 18.8 },
        "7":   { "p50": 15.5, "p95": 19.2 },
        "7.5": { "p50": 15.6, "p95": 19.6 },
        "8":   { "p50": 15.8, "p95": 20 },
        "8.5": { "p50": 16.0, "p95": 20.6 },
        "9":   { "p50": 16.2, "p95": 21 },
        "9.5": { "p50": 16.4, "p95": 21.6 },
        "10":  { "p50": 16.6, "p95": 22.1 },
        "10.5":{ "p50": 16.9, "p95": 22.6 },
        "11":  { "p50": 17.2, "p95": 23.2 },
        "11.5":{ "p50": 17.5, "p95": 23.7 },
        "12":  { "p50": 17.8, "p95": 24.2 },
        "12.5":{ "p50": 18.2, "p95": 24.7 },
        "13":  { "p50": 18.4, "p95": 25.2 },
        "13.5":{ "p50": 18.8, "p95": 25.6 },
        "14":  { "p50": 19.2, "p95": 26.0 },
        "14.5":{ "p50": 19.5, "p95": 26.4 },
        "15":  { "p50": 19.8, "p95": 26.8 },
        "15.5":{ "p50": 20.2, "p95": 27.2 },
        "16":  { "p50": 20.6, "p95": 27.6 },
        "16.5":{ "p50": 20.9, "p95": 27.9 },
        "17":  { "p50": 21.2, "p95": 28.2 },
        "17.5":{ "p50": 21.6, "p95": 28.6 },
        "18":  { "p50": 21.9, "p95": 28.9 },
        "18.5":{ "p50": 22.2, "p95": 29.2 },
        "19":  { "p50": 22.5, "p95": 29.7 },
        "19.5":{ "p50": 22.8, "p95": 30.1 },
        "20":  { "p50": 23.0, "p95": 30.6 }
    },
    "female": {
        "2":   { "p50": 16.4, "p95": 19.1 },
        "2.5": { "p50": 16.0, "p95": 18.6 },
        "3":   { "p50": 15.7, "p95": 18.3 },
        "3.5": { "p50": 15.4, "p95": 18.1 },
        "4":   { "p50": 15.3, "p95": 18.0 },
        "4.5": { "p50": 15.2, "p95": 18.1 },
        "5":   { "p50": 15.2, "p95": 18.2 },
        "5.5": { "p50": 15.2, "p95": 18.5 },
        "6":   { "p50": 15.2, "p95": 18.8 },
        "6.5": { "p50": 15.3, "p95": 19.2 },
        "7":   { "p50": 15.4, "p95": 19.6 },
        "7.5": { "p50": 15.6, "p95": 20.1 },
        "8":   { "p50": 15.8, "p95": 20.7 },
        "8.5": { "p50": 16.0, "p95": 21.2 },
        "9":   { "p50": 16.3, "p95": 21.8 },
        "9.5": { "p50": 16.6, "p95": 22.4 },
        "10":  { "p50": 16.8, "p95": 22.9 },
        "10.5":{ "p50": 17.2, "p95": 23.5 },
        "11":  { "p50": 17.5, "p95": 24.1 },
        "11.5":{ "p50": 17.8, "p95": 24.6 },
        "12":  { "p50": 18.1, "p95": 25.2 },
        "12.5":{ "p50": 18.4, "p95": 25.8 },
        "13":  { "p50": 18.7, "p95": 26.2 },
        "13.5":{ "p50": 19, "p95": 26.8 },
        "14":  { "p50": 19.3, "p95": 27.2 },
        "14.5":{ "p50": 19.6, "p95": 27.6 },
        "15":  { "p50": 19.9, "p95": 28.1 },
        "15.5":{ "p50": 20.2, "p95": 28.5 },
        "16":  { "p50": 20.4, "p95": 28.9 },
        "16.5":{ "p50": 20.7 "p95": 29.2 },
        "17":  { "p50": 20.9, "p95": 29.6 },
        "17.5":{ "p50": 21.1, "p95": 30.0 },
        "18":  { "p50": 21.3, "p95": 30.3 },
        "18.5":{ "p50": 21.4, "p95": 30.6 },
        "19":  { "p50": 21.5, "p95": 31.0 },
        "19.5":{ "p50": 21.6, "p95": 31.4 },
        "20":  { "p50": 21.8, "p95": 31.8 }
    }
};

function calculateChildBMI() {
    // Force reset visibility to prevent UI freeze state errors
    document.getElementById("results").style.display = "none";

    const gender = document.getElementById("gender").value;
    const ageYears = parseFloat(document.getElementById("age").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const actualWeight = parseFloat(document.getElementById("weight").value);
    
    if (!ageYears || !heightCm || !actualWeight) {
        alert("Please fill in all fields completely.");
        return;
    }

    const heightM = heightCm / 100;
    const actualBMI = actualWeight / (heightM * heightM);
    
    // Fix key assignment mapping by forcing exact matching text string types
    let ageLookupKey = (Math.floor(ageYears * 2) / 2).toString();
    if (ageLookupKey.endsWith(".0")) {
        ageLookupKey = ageLookupKey.replace(".0", "");
    }
    
    // Safety Fallback variables matching your custom requirements
    let p50_BMI = 16.9; 
    let p95_BMI = 23.0; 
    
    if (cdcBmiData[gender] && cdcBmiData[gender][ageLookupKey]) {
        p50_BMI = cdcBmiData[gender][ageLookupKey].p50;
        p95_BMI = cdcBmiData[gender][ageLookupKey].p95;
    }

    let status = "Normal / Overweight range (< 95th Percentile Line)";
    let isObese = false;
    
    if (actualBMI >= p95_BMI) {
        status = "Obese (≥ 95th Percentile Line)";
        isObese = true;
    }

    // Step-by-step rounding to maintain your precise 33.1 calculation sequence
    let rawIBW = p50_BMI * heightM * heightM;
    const idealBodyWeight = Math.round(rawIBW * 10) / 10;
    
    let adjustedBodyWeight = actualWeight; 
    if (isObese) {
        const correctionFactor = 0.4;
        let rawAdjBW = actualWeight - (correctionFactor * (actualWeight - idealBodyWeight));
        adjustedBodyWeight = Math.round(rawAdjBW * 10) / 10;
    }

    // Output variables to DOM targets
    document.getElementById("resBMI").innerText = actualBMI.toFixed(1);
    document.getElementById("resStatus").innerText = status;
    document.getElementById("resIBW").innerText = idealBodyWeight.toFixed(1);
    
    const adjWeightRow = document.getElementById("adjWeightRow");
    if (isObese) {
        document.getElementById("resAdjBW").innerText = adjustedBodyWeight.toFixed(1);
        adjWeightRow.style.display = "block";
    } else {
        adjWeightRow.style.display = "none";
    }
    
    // Reveal everything
    document.getElementById("results").style.display = "block";
}
