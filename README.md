# DevJourney

A personal developer portfolio application built with React Native and TypeScript.

DevJourney documents my development journey, showcases the applications I have built, presents my technical skills and education, and provides direct access to my resume, portfolio, GitHub and LinkedIn profiles.

---

## Overview

DevJourney is a mobile portfolio application developed using React Native Community CLI.

Instead of creating a traditional web-only portfolio, the application presents my developer profile and technical journey as a native-style mobile experience.

The application includes:

- Personal profile and introduction
- Technical skills and areas of expertise
- Education history
- Certifications and achievements
- Complete learning and development journey
- Project showcase
- Individual project detail pages
- GitHub repository links
- Live project links
- Resume viewer
- Contact form
- Portfolio, GitHub, LinkedIn and email links

---

## Features

### Home

The Home screen introduces the developer and provides quick access to the main sections of the application.

It includes:

- Developer introduction
- Profile identity
- Current technology stack
- Selected projects
- Navigation to the project section

### Projects

The Projects section showcases the applications and systems I have worked on.

Current projects include:

1. HelpDesk
2. FlowForge
3. Spraylite Storefront
4. Clip Vault
5. MLOps Prediction API

Each project has its own detailed page containing:

- Project overview
- Category
- Development status
- Technologies used
- Key features
- Source code link
- Live demo link where available

### Journey

The Journey section documents the progression from school education through university and software development.

The timeline covers:

- The Bishop's School
- SM Choksey Junior College
- B.Tech Information Technology at MIT ADT University
- Java Programming
- iOS Development
- Android Development
- Frontend Development
- Backend Development
- Cross-platform and Immersive Application Development

### Profile

The Profile section provides a detailed overview of:

- About
- Technical expertise
- Education
- Spoken languages
- Certifications
- Achievements
- Portfolio
- GitHub
- LinkedIn
- Email
- Resume

### Resume

The application includes the developer's resume as a locally bundled PDF.

The resume can be opened directly from the Profile section.

### Contact

The Contact section provides a simple form for:

- Name
- Email
- Message

The application generates an email with the submitted information. If an email application is unavailable on the device, the application falls back to Gmail in the browser.

---

## Projects

### HelpDesk

A full-stack support ticket management platform designed to help organizations manage customer support requests through a centralized system.

**Technologies**

- Java
- Spring Boot
- PostgreSQL
- Docker

**Features**

- Create and manage support tickets
- Assign tickets to support agents
- Track ticket status and priority
- Add comments to tickets
- REST API architecture

Source code:

https://github.com/ipoonawala9/helpdesk-ticketing-system

---

### FlowForge

A self-hosted workflow automation platform for visually building and executing automated workflows.

The system supports workflow triggers, conditions, delays and multiple actions while using a Redis-backed job queue for workflow execution.

**Technologies**

- React
- Node.js
- Express.js
- TypeScript
- Redis
- MySQL
- Docker

**Features**

- Visual workflow builder
- Conditional workflow branching
- Webhook triggers
- Scheduled triggers
- Delay nodes
- Email and WhatsApp actions
- Execution history
- JWT authentication
- Redis-backed job processing

Source code:

https://github.com/ipoonawala9/FlowForge

Live application:

https://flow-forge-alpha-three.vercel.app/

---

### Spraylite Storefront

A responsive e-commerce storefront designed around an interactive product experience.

**Technologies**

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand

**Features**

- Interactive product hero
- Product filtering and sorting
- Quick product view
- Shopping cart
- Wishlist
- Cart and wishlist persistence
- Responsive interface
- Product discovery experience

Source code:

https://github.com/ipoonawala9/spraylite-e-commerce

Live application:

https://spraylite-e-commerce.vercel.app/

---

### Clip Vault

A cross-platform clipboard management application that monitors clipboard activity and organizes clipboard history.

**Technologies**

- React Native
- TypeScript
- Android

**Features**

- Automatic clipboard monitoring
- Clipboard history
- Clipboard type detection
- Persistent local storage
- Cross-platform architecture

Source code:

https://github.com/ipoonawala9/clipvault

---

### MLOps Prediction API

A machine learning prediction service exposed through a REST API and prepared for deployment.

**Technologies**

- Python
- FastAPI
- Machine Learning
- Docker

**Features**

- Machine learning prediction endpoint
- REST API
- Model serving
- Dockerized application
- Deployment-oriented architecture

Source code:

https://github.com/ipoonawala9/MLOps

---

## Technology Stack

### Mobile Development

- React Native
- TypeScript
- React Navigation
- React Native Community CLI

### Navigation

- React Navigation Bottom Tabs
- React Navigation Native Stack

### Development

- TypeScript
- JavaScript
- React Native components
- Local application assets

### Android

- Android Studio
- Gradle
- Android SDK
- Android Emulator

### iOS

- Xcode
- CocoaPods
- React Native iOS project

### Version Control

- Git
- GitHub

---

## Application Architecture

The project follows a modular structure separating screens, navigation, reusable components, application data and design constants.

```text
src/
├── assets/
│   ├── profile.jpeg
│   └── ResumeIbrahimPoonawala.pdf
│
├── components/
│   ├── AchievementCard.tsx
│   ├── CertificationCard.tsx
│   ├── EducationCard.tsx
│   ├── ProjectCard.tsx
│   ├── SkillSection.tsx
│   ├── SocialButton.tsx
│   └── TimelineItem.tsx
│
├── constants/
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
│
├── data/
│   ├── achievements.ts
│   ├── certifications.ts
│   ├── journey.ts
│   ├── links.ts
│   ├── profile.ts
│   └── projects.ts
│
├── navigation/
│   ├── AppNavigator.tsx
│   ├── ProfileStackNavigator.tsx
│   ├── ProjectsStackNavigator.tsx
│   ├── TabNavigator.tsx
│   └── types.ts
│
└── screens/
    ├── ContactScreen.tsx
    ├── HomeScreen.tsx
    ├── JourneyScreen.tsx
    ├── ProfileScreen.tsx
    ├── ProjectDetailsScreen.tsx
    ├── ProjectsScreen.tsx
    └── ResumeScreen.tsx

    Design

DevJourney follows an Apple-inspired design philosophy rather than directly copying Apple’s interface.

The design focuses on:

* Minimal visual elements
* Strong typography
* Dark visual theme
* Editorial-style layouts
* Consistent spacing
* Thin separators
* Clear hierarchy
* Minimal cards
* Subtle interaction elements
* Consistent navigation

The goal was to make the application feel like a carefully designed product rather than a traditional developer portfolio.

⸻

Getting Started

Prerequisites

Make sure the following are installed:

* Node.js
* Java Development Kit
* Android Studio
* Android SDK
* Xcode (for iOS development)
* CocoaPods (for iOS)
* Git

Clone the repository
git clone https://github.com/ipoonawala9/DevJourney.git
cd DevJourney

Install Dependencies 
npm install

Android
Start an android emulator and run npx react-native run-android

iOS
Install Dependencies
cd ios
pod install
cd ..

Then run: npx react-native run-ios

Developer

Ibrahim Poonawala

Software Engineer | Full Stack Developer

Pune, Maharashtra

Portfolio:

https://ibrahimpoonawala.vercel.app/

GitHub:

https://github.com/ipoonawala9

LinkedIn:

https://www.linkedin.com/in/ibrahimpoonawala/

Email:

poonawalaibrahim9@gmail.com

⸻

License

This project is a personal portfolio application.

The source code is publicly available for learning and reference purposes.