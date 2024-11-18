# Master-Thesis-UniPD

This repository contains the LaTeX source files for a Master's thesis comparing accessibility implementations between React Native and Flutter frameworks, extending previous research on mobile application accessibility.

## 📝 Abstract

This thesis conducts a comparative analysis of accessibility features and guidelines for mobile application development, focusing on React Native and Flutter frameworks. It extends previous research on Flutter's accessibility capabilities to include React Native, providing a comprehensive examination of both frameworks' approaches to creating accessible mobile user interfaces.

The research includes:
- Creation of an application focused on implementing accessibility features
- Identification of similarities and differences in accessibility implementation between frameworks
- Literature review establishing current state of mobile accessibility research
- In-depth analysis of React Native's accessibility tools and guidelines
- Code sample comparisons demonstrating accessibility features in both frameworks

## 🗂️ Repository Structure

```
thesis/
├── chapters/               # Main thesis chapters
│   ├── introduction.tex    # Context and foundations
│   ├── guidelines.tex      # Mobile accessibility guidelines
│   ├── frameworks.tex      # Cross-platform development
│   ├── analysis.tex        # Comparative analysis
│   └── conclusions.tex     # Conclusions and future work
├── figures/                # Thesis figures and diagrams
├── listings/               # Code listings and examples
├── frontmatter/           # Title page, abstract, acknowledgments
├── backmatter/            # Bibliography, appendices
├── thesis.tex             # Main thesis document
└── bibliography.bib       # BibTeX references
```

## 🔧 Setup and Compilation

### Prerequisites
- A LaTeX distribution (e.g., TeX Live or MiKTeX)
- A text editor with LaTeX support
- Bibliography management system (BibTeX)

### Building the Document
1. Clone this repository
2. Ensure all required LaTeX packages are installed
3. Compile using:
```bash
pdflatex thesis
bibtex thesis
pdflatex thesis
pdflatex thesis
```

## 📚 References and Citations

The thesis builds upon previous research, particularly:
- Budai's analysis of Flutter accessibility (2024)
- Perinello and Gaggi's comparative framework study (2024)
- Various WCAG guidelines and mobile accessibility standards

## 📄 License

© Gabriel Rovesti, July 2025. All rights reserved. Master's Thesis, University of Padua, Department of Mathematics "Tullio Levi-Civita".

## 🤝 Contributing

While this is an academic thesis, suggestions and corrections are welcome through:
- Opening issues for technical problems or content clarifications
- Submitting pull requests for typo fixes or formatting improvements