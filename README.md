# 🐺 LXR Whitelist Evaluator - Enterprise Edition

```
██╗     ██╗  ██╗██████╗        ██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗     ██╗███████╗████████╗
██║     ╚██╗██╔╝██╔══██╗       ██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
██║      ╚███╔╝ ██████╔╝█████╗ ██║ █╗ ██║███████║██║   ██║   █████╗  ██║     ██║███████╗   ██║   
██║      ██╔██╗ ██╔══██╗╚════╝ ██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██║     ██║╚════██║   ██║   
███████╗██╔╝ ██╗██║  ██║       ╚███╔███╔╝██║  ██║██║   ██║   ███████╗███████╗██║███████║   ██║   
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   
```

<div align="center">

**🐺 The Land of Wolves - Enterprise Whitelist Evaluation System**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/CrKcWdfd3A)
[![GitHub](https://img.shields.io/github/stars/iboss21/lxr-whitelist?style=for-the-badge)](https://github.com/iboss21/lxr-whitelist)
[![License](https://img.shields.io/badge/License-CC0--1.0-green?style=for-the-badge)](LICENSE)

*Production-grade AI-powered whitelist evaluation for RedM Georgian RP*

[Features](#-features) • [Quick Start](#-quick-start) • [AI Integration](#-ai-integration) • [Documentation](#-documentation) • [Support](#-support)

</div>

---

## 🎯 Overview

**LXR Whitelist Evaluator** is an enterprise-grade React application that revolutionizes RedM roleplay server whitelist applications using advanced AI-powered analysis. Built specifically for **The Land of Wolves** Georgian RP server with TypeScript, shadcn/ui, and multi-provider AI support.

### 🌟 What Makes It Enterprise

- **🤖 Multi-AI Provider Support** - OpenAI GPT-4, Anthropic Claude, xAI Grok
- **🧠 Advanced Analytics** - Deep character psychology and behavioral predictions
- **🚨 Suspicion Detection** - Automated red flag identification for RDM/PowerRP/FailRP
- **💎 Premium UI** - Glassmorphism, 3D effects, luxury black/gold theme
- **📊 Data Visualization** - Real-time charts and analytics dashboards
- **🔒 Production Ready** - TypeScript, Docker, environment-based configuration
- **⚡ Performance Optimized** - < 2s load time, < 3s evaluation

---

## ✨ Features

### Core Evaluation System
- ⚡ **Real-time Evaluation** - Instant AI-powered whitelist assessment
- 📊 **6-Category Scoring** - Comprehensive character analysis with weighted scoring
- 🎨 **wolves.land Branding** - Professional Western/Georgian theme
- 📋 **Detailed Reports** - Exportable evaluation with specific recommendations
- 🌐 **Responsive Design** - Mobile-friendly interface with adaptive layouts
- 📝 **Georgian Language Support** - Native Georgian RP integration

### AI Analytics Engine
- 🤖 **Multi-Provider AI** - Choose between OpenAI, Claude, or Grok
- 🧠 **Character Profiling** - Deep psychological analysis and archetype detection
- 🚨 **Suspicion Scoring** - 0-100 risk assessment with severity levels
- 🎯 **Behavioral Predictions** - RDM, Powerplay, Fail RP likelihood percentages
- 🔍 **Pattern Detection** - Automated red/green flag identification
- 💡 **Smart Recommendations** - AI-generated actionable feedback
- 🛡️ **Fallback System** - Rule-based analysis when AI unavailable

### Premium UI Components
- ✨ **Glowing Effects** - Mouse-interactive border animations from 21st.dev
- 💎 **Glassmorphism** - Modern glass-style card components
- 🌊 **Smooth Animations** - Motion library for fluid transitions
- 🎨 **Luxury Theme** - Black (#0a0a0a) + Gold (#d4af37) color palette
- 📱 **Mobile-First** - Responsive design for all devices
- 🔤 **Custom Typography** - Western + Georgian font stack

---

## 📊 Evaluation Criteria

| Category | Weight | Min Score | Description |
|----------|--------|-----------|-------------|
| ლორი და ეპოქასთან შესაბამისობა<br>*(Lore & Era Consistency)* | 15% | 8.0/10 | Historical accuracy and setting appropriateness |
| პერსონაჟის სიღრმე<br>*(Character Depth)* | 20% | 8.0/10 | Psychological complexity and background detail |
| მოტივაციის სიცხადე<br>*(Motivation Clarity)* | 20% | 8.0/10 | Clear, realistic character goals and drives |
| RP მდგრადობა<br>*(RP Sustainability)* | 20% | 8.0/10 | Long-term roleplay potential and development |
| რისკები / წითელი ნიშნები<br>*(Risk / Red Flags)* | 15% | 8.0/10 | Power-gaming, RDM, and fail RP indicators |
| ენა და სტრუქტურა<br>*(Language & Structure)* | 10% | 8.0/10 | Writing quality and application completeness |

**Minimum Passing Score:** 8.0/10

---

## 🚀 Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/iboss21/lxr-whitelist.git
cd lxr-whitelist

# Install dependencies
npm install

# Configure environment (optional for AI)
cp .env.example .env
# Edit .env with your API keys

# Start development server
npm run dev
```

Visit `http://localhost:3000` 🚀

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment

```bash
# Build Docker image
docker build -t lxr-whitelist .

# Run container
docker run -p 8080:80 lxr-whitelist
```

---

## 🤖 AI Integration

### Supported Providers

| Provider | Model | Use Case |
|----------|-------|----------|
| **OpenAI** | GPT-4o | Fast, accurate general analysis |
| **Anthropic** | Claude 3.5 Sonnet | Deep psychological insights |
| **xAI** | Grok | Creative character interpretation |

### Configuration

1. Create `.env` file from template:
```bash
cp .env.example .env
```

2. Add your API keys:
```env
# Choose your provider
VITE_AI_PROVIDER=openai

# OpenAI Configuration
VITE_OPENAI_API_KEY=sk-your-key-here
VITE_OPENAI_MODEL=gpt-4o

# Anthropic Configuration  
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
VITE_ANTHROPIC_MODEL=claude-3-5-sonnet-20241022

# xAI Grok Configuration
VITE_GROK_API_KEY=your-grok-key-here
VITE_GROK_MODEL=grok-beta
```

3. Restart development server

---

## 🏗️ Tech Stack

- **React 18 + TypeScript** - Type-safe UI development
- **Vite** - Lightning-fast builds
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Premium component library
- **Motion** - Advanced animations
- **Recharts** - Data visualization
- **Multi-AI Support** - OpenAI, Claude, Grok

---

## 📚 Documentation

- 📖 [Implementation Guide](IMPLEMENTATION_GUIDE.md) - Complete setup guide
- 💬 [Discord Dev Log](DISCORD_DEV_LOG.md) - Latest updates
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment

---

## 🐺 Support

### Server Information
- **Server**: The Land of Wolves 🐺
- **Type**: Serious Hardcore Roleplay
- **Language**: Georgian RP 🇬🇪
- **Tagline**: მგლების მიწა - რჩეულთა ადგილი!

### Developer
- **Author**: iBoss21 / The Lux Empire
- **GitHub**: [@iboss21](https://github.com/iboss21)
- **Discord**: [Join Server](https://discord.gg/CrKcWdfd3A)
- **Website**: [wolves.land](https://www.wolves.land)
- **Store**: [The Lux Empire](https://theluxempire.tebex.io)

---

## 📄 License

**CC0 1.0 Universal (Public Domain)**

See [LICENSE](LICENSE) for more information.

---

<div align="center">

**🐺 Made with 💛 for The Land of Wolves**

*მგლების მიწა - რჩეულთა ადგილი!*

© 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved

</div>
