# Master-Thesis-UniPD

This repository hosts the **LaTeX source files** for the Master’s Thesis:

> **Designing an accessibility learning toolkit: bridging the gap between guidelines and implementation**  
> **Author:** Gabriel Rovesti  
> **University of Padua, Department of Mathematics “Tullio Levi-Civita”**  
> **Academic Year 2024–2025**

---

## ⚠️ TO-DO (Latest Update - 09-05)
- Check in detail ALL of the thesis and see if there are errors and cross-search here and appendix to fix everything properly
- Check in detail all of the code to see redundancy (I think everything was fixed properly)
- Read carefully: https://www.w3.org/TR/2025/DNOTE-wcag2mobile-22-20250506/ to see if we can reference the WCAG2Mobile Draft, very interesting for my thesis (from supervisor email)

## ✨ Overview

This thesis conducts a **comparative analysis** of two popular cross-platform frameworks—**React Native** and **Flutter**—with respect to **accessibility** implementation. Building upon prior research (including Budai’s work on Flutter accessibility and Perinello & Gaggi’s comparative study), this project introduces **AccessibleHub**, a developer-focused toolkit designed to:

1. Translate abstract accessibility guidelines (WCAG 2.2, MCAG) into **practical** implementation patterns for mobile apps.
2. Provide **side-by-side comparisons** of React Native and Flutter code snippets, highlighting differences in default accessibility and the overhead needed to meet standards.
3. Offer **quantitative metrics** (Implementation Overhead, Complexity Impact Factor, WCAG Compliance Ratio, etc.) to inform best practices in creating **inclusive** mobile user interfaces.

The final PDF, [Thesis.pdf](./Thesis.pdf), details the full methodology, experiments, and results.

---

## 📑 Thesis Structure

1. **Chapter 1 – Introduction**  
   Provides an overview of the **mobile accessibility** context, foundational definitions, and the motivation for comparing React Native and Flutter.

2. **Chapter 2 – Mobile Accessibility: Guidelines, Standards, and Related Works**  
   Summarizes relevant **legislative frameworks** (ADA, Section 508, EU Directives, etc.) and outlines key **WCAG** (Web Content Accessibility Guidelines) and **MCAG** (Mobile Content Accessibility Guidelines) considerations.

3. **Chapter 3 – AccessibleHub: Transforming Guidelines Into Code**  
   Introduces the **AccessibleHub** project, built in React Native:
   - Architectural decisions  
   - Educational design (explaining how guidelines map to component-level implementations)  
   - Screens, code snippets, and examples of how to integrate accessibility features  

4. **Chapter 4 – Accessibility Analysis: Framework Comparison and Implementation Patterns**  
   Presents the **systematic comparison** between React Native and Flutter:
   - Formal metrics (CAS, IO, CIF, SRSS, WCR, DTE)  
   - Detailed code listings (e.g., headings, form controls, custom gestures)  
   - Overhead calculations, complexity trade-offs, developer experience insights  

5. **Chapter 5 – Conclusions and Future Research**  
   Summarizes **key findings**, outlines practical **framework selection** guidelines, and explores directions for further research on cross-platform accessibility.

---

## 🗂️ Repository Layout

```
.
├── config/            # Thesis-wide configurations (styles, macros, packages)
├── chapters/          # Main chapters (1_introduction.tex, 2_guidelines.tex, etc.)
├── figures/           # All diagrams, screenshots, images used in the thesis
├── listings/          # Code listings in .tex or .lst format
├── frontmatter/       # Title page, acknowledgments, abstract, table of contents
├── backmatter/        # Bibliography, index, glossary, acronyms
├── references/        # Additional references or smaller side sections
├── Thesis.tex         # Main LaTeX file orchestrating all chapters
├── README.md          # This file
└── bibliography.bib   # BibTeX references cited in Thesis.tex
```

---

## ⚙️ Build Instructions

1. **Clone** this repository:
   ```bash
   git clone https://github.com/YourUsername/accessibility-thesis.git
   cd accessibility-thesis
   ```
2. **Install** a LaTeX distribution (e.g., TeX Live, MiKTeX) with the packages required in `config/thesis_config.tex`.
3. **Compile** the thesis:
   ```bash
   pdflatex Thesis
   bibtex Thesis
   pdflatex Thesis
   pdflatex Thesis
   ```
4. The **output PDF** (named `Thesis.pdf`) will appear in the same directory.

---

## 📐 Key Accessibility Metrics

The thesis defines several **formal metrics** used to evaluate accessibility overhead:

- **CAS (Component Accessibility Score)**: Measures percentage of components accessible by default.  
- **IO (Implementation Overhead)**: Additional lines of code or effort required beyond the baseline.  
- **CIF (Complexity Impact Factor)**: Weighted measure factoring in nesting depth, property counts, etc.  
- **SRSS (Screen Reader Support Score)**: Empirical 1–5 rating based on VoiceOver (iPhone 14 / iOS 16) and TalkBack (Pixel 7 / Android 15).  
- **WCR (WCAG Compliance Ratio)**: Measures conformance to applicable WCAG 2.2 criteria.  
- **DTE (Developer Time Estimation)**: Approximate time in minutes needed to implement each accessibility feature.

Complete definitions and calculation formulas appear in **Chapter 4** of the thesis.

---

## 💡 Highlights

- **AccessibleHub**: A React Native application that serves as a **learning toolkit**, featuring multiple screens demonstrating accessible components.  
- **Flutter Comparison**: Each React Native example is **mirrored** with a Flutter code snippet to illustrate how to achieve the **same** accessibility outcome, albeit with different overhead.  
- **Empirical Testing**: All examples tested with VoiceOver on an **iPhone 14** (iOS 16) and TalkBack on a **Pixel 7** (Android 15).

---

## 🔖 References

- Budai, M. *Mobile content accessibility guidelines on the Flutter framework*, Master’s Thesis, 2024.  
- Perinello, L. & Gaggi, O. *Accessibility of Mobile User Interfaces using Flutter and React Native*, 2024.  
- W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023.  
- ...and additional citations in the [bibliography](./bibliography.bib).

See **Bibliography** in Chapter 5 for a full list of references.

---

## 📄 License & Credits

© 2025 by **Gabriel Rovesti**. All rights reserved.  
Master’s Thesis submitted to the **University of Padua**, Department of Mathematics “Tullio Levi-Civita” for partial fulfillment of the requirements for the Master Degree in Computer Science.

Please contact the author or supervisor for any inquiries regarding reproduction or distribution. All third-party content in this repository (figures, packages, libraries) remains property of their respective owners.

---

## 🤝 Contributing

This repository primarily serves as an **academic deliverable**. However, contributions such as typo fixes or clarifications are welcome. To contribute:

1. **Open an Issue** describing the concern (e.g., formatting errors, unclear sections).
2. **Submit a Pull Request** for minor improvements or corrections.

---

**Enjoy exploring the code and thesis content—thank you for your interest in **accessible mobile development**!**