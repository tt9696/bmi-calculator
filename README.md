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
