# Yasamin Tavakoli | Python Developer · NLP · Computer Vision

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-7c3aed)](https://ysmniall.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yasamin%20Tavakoli-0A66C2)](https://www.linkedin.com/in/yasamin-tavakoli-800943236/)
[![GitHub](https://img.shields.io/badge/GitHub-ysmniall-181717)](https://github.com/ysmniall)

Personal portfolio of **Yasamin Tavakoli**, a Python software developer whose work spans production software, NLP, computer vision, deep learning, image/video processing, and reliability-aware intelligent systems.

## About

I currently work as a **Software Developer at Steel Alborz**, primarily with Python. My background combines software engineering with academic and applied work across visual, textual, multimedia, and time-series data.

My academic path includes:

- **M.Sc. in Computer Engineering — Systems Architecture**, Sharif University of Technology
- **B.Sc. in Computer Engineering — Software Engineering**, Babol Noshirvani University of Technology

I am especially interested in building systems that turn research ideas into practical software, with a focus on **NLP, Computer Vision, multimodal processing, and intelligent systems**.

## Featured Work

### 1. Fault-Tolerant Virtual Sensor for EV Battery Systems
**M.Sc. Thesis — Sharif University of Technology · January 2026**  
Official thesis title: *Sensor-Based Virtual Approaches for Enhancing the Reliability of Electric Vehicles*

Designed a BiGRU-based virtual sensor for estimating lithium-ion battery temperature and improving Battery Management System reliability when physical sensors become inaccurate or fail.

**Highlights**
- Two-stage training: nominal learning followed by robust fine-tuning
- Physics-informed training constraint for thermal consistency
- Evaluation under transient and permanent sensor faults
- More than **8 million time-series samples**
- **1.59°C MAE** under nominal conditions
- **4,477 independent test files**
- Approximately **1.7 MB** model footprint
- Approximately **264 ms CPU inference latency**
- Reliability evaluation in the context of automotive functional safety and **ISO 26262**

**Technologies:** Python, PyTorch Lightning, BiGRU, Pandas, NumPy, Scikit-learn, time-series modeling, fault injection, reliability analysis

---

### 2. Persian Sign Language Recognition
**B.Sc. Thesis — Babol Noshirvani University of Technology · June 2023**

Built an end-to-end deep-learning system for recognizing **static Persian Sign Language alphabet signs**, starting with original data collection and continuing through preprocessing, model training, and evaluation.

**Dataset & pipeline**
- Built a custom dataset of **4,070 images**
- Collected images from **36 participants** under varied backgrounds and capture conditions
- Covered **37 Persian Sign Language classes**
- Used **MediaPipe** for hand detection and cropping
- Resized model inputs to **224 × 224**
- Used augmentation during training

**Model comparison**

| Model | Test Accuracy |
| --- | ---: |
| ResNet18 | 94.97% |
| ViT | 93.34% |
| **ResNet152** | **96.4%** |

The project also explored a broader communication workflow using speech-to-text and sign-image output as part of the translation concept.

**Technologies:** Python, PyTorch, MediaPipe, ResNet18, ResNet152, Vision Transformer (ViT), Hugging Face, Computer Vision

---

### 3. Sharif University Mountaineering Group Website

Designed and developed the website for the **Sharif University Mountaineering Group**, combining my involvement in the group with practical web development for a real community.

> GitHub repository and live website links will be added after publication.

---

### 4. Text, Image & Video Processing — QCRI

Worked on projects involving **text, image, and video processing**, expanding my practical experience across NLP, computer vision, and multimedia data.

> Public details are intentionally limited to non-confidential information.

## Technical Focus

**Programming**  
Python · JavaScript · HTML · CSS

**AI / ML / Vision**  
PyTorch · PyTorch Lightning · MediaPipe · ResNet18 · ResNet152 · Vision Transformer · BiGRU

**Data**  
Pandas · NumPy · Scikit-learn · dataset creation · preprocessing · augmentation · evaluation

**Areas**  
NLP · Computer Vision · Image Processing · Video Processing · Time-Series Modeling · Fault Tolerance · Reliability Analysis

**Web / Software**  
Node.js · JavaScript · HTML · CSS · GitHub Pages

## Portfolio Structure

| Page | Purpose |
| --- | --- |
| `index.html` | Home and professional introduction |
| `profile.html` | Background, interests, and profile |
| `skills.html` | Technical skills and research toolkit |
| `projects.html` | Academic, software, and research projects |
| `journey.html` | Professional, community, and academic timeline |

## Repository Structure

```text
.
├── index.html
├── profile.html
├── skills.html
├── projects.html
├── journey.html
├── css/
│   ├── site.css
│   ├── style.css
│   └── profile.css
├── js/
│   └── main.js
├── fig/
│   └── portfolio and project visuals
├── assets/
│   ├── Yasamin_Tavakoli_MSc_Thesis.pdf
│   └── Yasamin_Tavakoli_BSc_Thesis_PSL.pdf
└── README.md
```

## Run Locally

No build step is required.

```bash
git clone https://github.com/ysmniall/ysmniall.github.io.git
cd ysmniall.github.io
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The site is deployed using **GitHub Pages**:

**https://ysmniall.github.io/**

## Contact

- **Portfolio:** [ysmniall.github.io](https://ysmniall.github.io/)
- **LinkedIn:** [Yasamin Tavakoli](https://www.linkedin.com/in/yasamin-tavakoli-800943236/)
- **GitHub:** [@ysmniall](https://github.com/ysmniall)

---

<p align="center"><sub>Designed and developed by Yasamin Tavakoli.</sub></p>
