# Master's Thesis: Designing an Accessibility Learning Toolkit

**Bridging the Gap Between Guidelines and Implementation**

**Author:** Gabriel Rovesti  
**Institution:** University of Padua, Department of Mathematics "Tullio Levi-Civita"  
**Degree:** Master of Science in Computer Science  
**Academic Year:** 2024-2025  
**Supervisor:** Prof. Ombretta Gaggi
**Co-relator:** Prof. Catia Prandi

---

## Abstract

This thesis presents a systematic comparative analysis of accessibility implementation approaches in React Native and Flutter mobile development frameworks. Through the development of AccessibleHub—an educational toolkit application—this research quantifies implementation overhead, evaluates WCAG 2.2 compliance patterns, and establishes formal metrics for cross-platform accessibility assessment.

The investigation demonstrates that React Native requires 45% less implementation overhead while maintaining higher screen reader compatibility scores (4.2 vs 3.8) compared to Flutter. Neither framework provides comprehensive accessibility by default (38% vs 32% respectively), confirming the necessity for deliberate developer intervention in accessible mobile development.

## Research Contribution

### Primary Research Questions

1. **RQ1 (Default Accessibility Support):** What percentage of components are accessible by default without modification in React Native versus Flutter?
2. **RQ2 (Implementation Feasibility):** How do frameworks differ in their ability to achieve WCAG 2.2 compliance through additional development effort?
3. **RQ3 (Development Overhead):** What is the quantitative implementation overhead required for accessibility features in each framework?

### Novel Contributions

- **Formal Evaluation Framework:** Introduction of six quantitative metrics (CAS, IMO, CIF, SRSS, WCR, DTE) for systematic accessibility assessment
- **AccessibleHub Toolkit:** A React Native application serving as both research vehicle and practical developer resource
- **Comparative Implementation Analysis:** Screen-by-screen analysis of accessibility patterns across frameworks with empirical testing
- **Technical Developer Appendix:** Comprehensive implementation guide bridging theoretical guidelines with practical code patterns

## Methodology

### Evaluation Metrics

| Metric | Description | Formula/Scale |
|--------|-------------|---------------|
| **Component Accessibility Score (CAS)** | Percentage of components accessible by default | 0-100% |
| **Implementation Overhead (IMO)** | Additional lines of code for accessibility features | Absolute LOC count |
| **Complexity Impact Factor (CIF)** | Weighted complexity measure | CIF = (IMO/TC) × CF |
| **Screen Reader Support Score (SRSS)** | Empirical screen reader compatibility | 1-5 scale |
| **WCAG Compliance Ratio (WCR)** | WCAG 2.2 success criteria satisfaction | 0-100% |
| **Developer Time Estimation (DTE)** | Implementation time requirements | Minutes |

### Testing Environment

- **iOS Testing:** iPhone 14, iOS 16, VoiceOver
- **Android Testing:** Google Pixel 7, Android 15, TalkBack
- **Framework Versions:** React Native 0.72.x, Flutter 3.13.x
- **Standards Compliance:** WCAG 2.2 Level AA, MCAG

## Repository Structure

```
Master-Thesis-UniPD/
├── Thesis/
│   ├── Thesis.tex                    # Main LaTeX document
│   ├── Thesis.pdf                    # Compiled thesis (191 pages)
│   ├── chapters/                     # Chapter source files
│   │   ├── 1_introduction.tex
│   │   ├── 2_guidelines.tex
│   │   ├── 3_toolkit.tex
│   │   ├── 4_analysis.tex
│   │   └── 5_conclusions.tex
│   ├── config/                       # LaTeX configuration
│   ├── figures/                      # All diagrams and screenshots
│   ├── listings/                     # Code implementation examples
│   └── bibliography.bib              # Academic references
├── Technical Appendix/
│   └── AccessibleHub - Extended screen analysis.pdf
└── README.md                         # This document
```

## Key Research Findings

### Quantitative Results

- **Implementation Overhead Reduction:** React Native demonstrates 45% less code requirement for equivalent accessibility implementations
- **Default Accessibility Gap:** Neither framework achieves 40% default accessibility coverage, highlighting implementation requirements
- **Screen Reader Performance:** React Native achieves superior compatibility across VoiceOver and TalkBack testing
- **WCAG Compliance:** React Native shows 92% compliance on Perceivable principles versus Flutter's 85%

### Architectural Insights

| Aspect | React Native | Flutter |
|--------|-------------|---------|
| **Implementation Approach** | Property-based integration | Widget-based semantic wrapping |
| **Code Organization** | Inline accessibility properties | Explicit wrapper widget hierarchy |
| **Testing Framework** | Manual testing focus | Robust built-in testing tools |
| **Learning Curve** | Gradual accessibility adoption | Steep initial semantic model comprehension |

## AccessibleHub Application

The AccessibleHub toolkit serves as both a research instrument and practical developer resource, featuring:

### Core Functionality

1. **Component Examples:** Interactive demonstrations with copyable accessible implementations
2. **Framework Comparison:** Side-by-side React Native and Flutter code analysis
3. **Testing Tools:** Integrated utilities for screen reader and assistive technology validation
4. **Implementation Guidelines:** Direct mapping from WCAG requirements to practical code patterns

### Technical Implementation

- **Platform:** React Native with TypeScript
- **Architecture:** Modular component system with accessibility-first design patterns
- **Testing Integration:** Built-in screen reader testing workflows
- **Code Portability:** Reusable patterns adaptable across mobile projects

## Academic Context

### Literature Foundation

This research extends previous work by:

- **Budai (2024):** Flutter-specific accessibility framework analysis
- **Perinello & Gaggi (2024):** Initial React Native and Flutter accessibility comparison
- **W3C WCAG 2.2 (2023):** Current accessibility standard implementations

### Methodological Rigor

- **Reproducible Metrics:** Formal mathematical definitions for all evaluation criteria
- **Empirical Validation:** Real-device testing with actual assistive technologies
- **Statistical Analysis:** Weighted scoring systems accounting for component usage frequency
- **Cross-Platform Consistency:** Equivalent functional mapping ensuring fair framework comparison

## Future Research Directions

### Technical Expansion

- **Automated Implementation Tools:** Development of tools for automatic accessibility enhancement
- **Cross-Framework Patterns:** Investigation of universal accessibility patterns
- **Maintenance Cost Analysis:** Longitudinal studies of accessibility technical debt

### Educational Research

- **Knowledge Transfer Methods:** Optimal accessibility training approaches for development teams
- **Organizational Impact:** Accessibility implementation within different team structures
- **Tool Effectiveness:** Quantitative assessment of educational toolkit impact

## Compilation Instructions

### Requirements

- LaTeX distribution (TeX Live, MiKTeX)
- Required packages listed in `config/thesis_config.tex`

### Build Process

```bash
git clone https://github.com/gabrielrovesti/Master-Thesis-UniPD.git
cd Master-Thesis-UniPD/Thesis
pdflatex Thesis
bibtex Thesis
pdflatex Thesis
pdflatex Thesis
```

The compiled `Thesis.pdf` contains the complete 191-page research document.

## Citation

```bibtex
@mastersthesis{Rovesti2025AccessibilityToolkit,
  author    = {Gabriel Rovesti},
  title     = {Designing an accessibility learning toolkit: bridging the gap between guidelines and implementation},
  school    = {University of Padua, Department of Mathematics "Tullio Levi-Civita"},
  year      = {2025},
  type      = {Master's Thesis},
  address   = {Padova, Italy},
  supervisor = {Prof. Ombretta Gaggi}
}
```

## Copyright and Usage

© 2025 Gabriel Rovesti. All rights reserved.

This academic work is submitted to the University of Padua for partial fulfillment of Master's degree requirements. The AccessibleHub application code and research methodology are available for academic use with proper attribution. Commercial applications require explicit permission.

## Contact

For academic inquiries, collaboration opportunities, or accessibility implementation questions:

- **Academic Institution:** University of Padua, Department of Mathematics "Tullio Levi-Civita"
- **Research Focus:** Mobile accessibility implementation, cross-platform development frameworks
- **Supervisor Contact:** Prof. Ombretta Gaggi, University of Padua

---

*This thesis advances the field of accessible mobile development by providing empirical, quantitative analysis of cross-platform accessibility implementation, supported by practical developer tools and rigorous academic methodology.*