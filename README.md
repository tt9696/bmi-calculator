---
# Pediatric BMI & Weight Calculator (Ages 2–20 Only)

A highly accessible, client-side clinical web utility tool designed for healthcare practitioners, nutritionists, and students. This application accurately determines a child's standard BMI and flags obesity status **strictly for the pediatric population aged 2 to 20 years old** using official CDC metrics.

When a child's BMI maps onto or above the $95^{\text{th}}$ percentile curve line (signaling obesity), the calculator automatically implements adjusted pediatric formulas to supply safe dosing and nutritional target metrics.

---

## 🚀 Live Demo

Access the live web application immediately from any smartphone, tablet, or desktop browser here:
👉 **[https://tt9696.github.io/bmi-calculator-children/](https://tt9696.github.io/bmi-calculator-children/)**

---

## 📊 Core Calculation & Logic Flow

### 📥 Required Inputs
To initiate the clinical assessment engine, the following user inputs are required:
* **Weight:** Measured in kilograms (**kg**).
* **Height:** Measured in centimeters (**cm**) *(internally converted to meters ($m$) for BMI computation)*.
* **Age:** Measured in years (**years old**), spanning a strict boundary of 2 to 20 years.
* **Biological Sex:** Selected as Male or Female (to map against sex-specific CDC growth curves).

---

### 🧮 Mathematical Pipeline
The application processes these inputs sequentially using specific mathematical rounding standards to eliminate floating-point calculation anomalies native to modern web browsers:

1. **Actual BMI Calculation:**
   $$\text{Actual BMI} = \frac{\text{Actual Weight (kg)}}{\left(\frac{\text{Height (cm)}}{100}\right)^2}$$

2. **CDC Data Matrix Lookup:**
   The app converts the inputted age to the nearest half-year interval step to cross-reference against the official **CDC Growth Chart Matrix** to find the target $50^{\text{th}}$ and $95^{\text{th}}$ percentile values.


3. **Obesity Verification:**
   If $\text{Actual BMI} \ge 95^{\text{th}}\text{ Percentile}$, the child is flagged as **Obese**. Otherwise, the child is flagged as **Non-Obese**.
   
4. **Ideal Body Weight (IBW):**
   Determined by mapping the median $50^{\text{th}}$ percentile target BMI against the squared height:
   $$\text{IBW (kg)} = 50^{\text{th}}\text{ Percentile BMI} \times \left(\frac{\text{Height (cm)}}{100}\right)^2$$

5. **Adjusted Body Weight (AdjBW):**
   If the user triggers the obesity threshold flag, the tool applies a custom $0.4$ clearance correction factor:
   $$\text{AdjBW (kg)} = \text{Actual Weight} - 0.4 \times (\text{Actual Weight} - \text{IBW})$$
---

## 🛠️ Features & Safety Parameters

* **Strict Safety Boundaries (Ages 2–20 Only):** System inputs are tightly restricted to pediatric age scales spanning **exactly 2 to 20 years old**. The app explicitly blocks calculations for any values outside this range to mirror the ceiling thresholds of CDC graph limits.
* **Smart UI Display:** The **Adjusted Body Weight** readout automatically hides itself if a child is determined to be within a healthy or overweight weight profile, minimizing clinical clutter.
* **100% Client-Side:** Operates strictly on client-side vanilla architecture (HTML5, CSS3, and modern block-scoped JavaScript) requiring zero external software installations, tracking bugs, database setups, or server costs.

---
## 📜 References & Data Sources

The calculation benchmarks and data maps embedded within this application are extracted directly from the official CDC BMI-for-Age Percentile Growth Charts. You can access the clinical visual data sheets here:

* 🧑‍🤝‍🧑 **Boys BMI-for-Age Growth Curve Chart:** [CDC Chart cj41c023 (PDF)](https://www.cdc.gov/growthcharts/data/set1clinical/cj41c023.pdf)
* 👭 **Girls BMI-for-Age Growth Curve Chart:** [CDC Chart cj41c024 (PDF)](https://www.cdc.gov/growthcharts/data/set1clinical/cj41c024.pdf)

> [!NOTE]
> Data tables are restricted to pediatric monitoring benchmarks spanning exactly 2 to 20 years old. Values outside this range are clinically omitted from this tracking tool.
---
## 📁 Project Architecture

The directory layout of this repository is lightweight and direct:

```text
├── index.html   # Main HTML structural layout & DOM endpoints
├── style.css    # Clean UI visual styling & responsive layout configurations
└── script.js    # CDC core data engine array and formula calculation functions


