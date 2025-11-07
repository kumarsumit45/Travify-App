# 🌍 Travifai - Discover Places You Love

<div align="center">

![Travifai](./assets/images/icon.png)

**A commission-free space to connect, book, and explore**

[![Made with React Native](https://img.shields.io/badge/Made%20with-React%20Native-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Powered by Expo](https://img.shields.io/badge/Powered%20by-Expo-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![State Management](https://img.shields.io/badge/State-Zustand-8B5CF6?style=for-the-badge)](https://github.com/pmndrs/zustand)

</div>

---

## ✨ About Travifai

**Travifai** is a modern, feature-rich travel booking application built with React Native and Expo. It provides a seamless experience for travelers to discover, search, and book their perfect stay without any commission fees. With an elegant UI and smooth animations, Travifai makes travel planning a delightful experience.

### 🎯 Key Highlights

- 🆓 **Zero Commission Bookings** - Save more on every booking
- 🏨 **10,000+ Hotels** - Extensive collection of accommodations
- ⭐ **98% Satisfaction** - Trusted by thousands of travelers
- 🤝 **4,500+ Hoteliers** - Growing network of trusted partners

---

## 🚀 Features

### 🔐 Authentication
- Secure sign-in/sign-up flow
- Password visibility toggle
- Form validation
- Animated splash screen

### 🏠 Home Screen
- Beautiful hero section with background imagery
- Smart search functionality
- Real-time statistics display
- Featured destinations carousel
- Hotel listings with detailed information

### 🔍 Search & Discovery
- Advanced search capabilities
- Filter and sort options
- Location-based recommendations

### ❤️ Wishlist Management
- Save favorite hotels
- Quick access to saved properties
- State persistence with Zustand

### 💬 Chat Support
- In-app communication
- Customer support integration

### 📱 Navigation
- Drawer navigation for easy access
- Bottom tab navigation
- Smooth transitions between screens

### 📋 Additional Features
- **Bookings Management** - Track your reservations
- **Payment Integration** - Secure payment processing
- **Treels** - Travel reels and stories
- **About & Contact** - App information and support
- **Logout** - Secure session management

---

## 📁 Project Structure

```
Travelly/
│
├── 📱 app/                          # Main application screens
│   ├── (auth)/                      # Authentication group
│   │   ├── index.jsx               # Sign-in screen
│   │   └── _layout.jsx             # Auth layout wrapper
│   │
│   ├── (drawers)/                   # Drawer navigation group
│   │   ├── (tabs)/                 # Tab navigation group
│   │   │   ├── index.jsx           # Home screen
│   │   │   ├── search.jsx          # Search screen
│   │   │   ├── wishlist.jsx        # Wishlist screen
│   │   │   ├── chat.jsx            # Chat screen
│   │   │   └── _layout.jsx         # Tab layout wrapper
│   │   │
│   │   ├── about.jsx               # About screen
│   │   ├── bookings.jsx            # Bookings management
│   │   ├── contact.jsx             # Contact screen
│   │   ├── payments.jsx            # Payment screen
│   │   ├── treels.jsx              # Travel reels
│   │   ├── wishlist.jsx            # Full wishlist view
│   │   ├── logout.jsx              # Logout handler
│   │   └── _layout.jsx             # Drawer layout wrapper
│   │
│   ├── hotelDetails.jsx            # Hotel details modal
│   ├── splash.jsx                  # Splash screen
│   └── _layout.jsx                 # Root layout
│
├── 🧩 components/                   # Reusable UI components
│   ├── featuresList/
│   │   ├── CardItem.jsx            # Feature card component
│   │   └── HorizontalCardList.jsx  # Horizontal scroll list
│   │
│   ├── hotelDetails/
│   │   ├── HotelCard.jsx           # Hotel card component
│   │   └── HotelsList.jsx          # Hotels list view
│   │
│   ├── DrawerToggle.jsx            # Custom drawer toggle
│   └── header.jsx                  # Header component
│
├── 🎨 assets/                       # Static assets
│   ├── images/                      # App images & icons
│   │   ├── icon.png                # App icon
│   │   ├── splash-icon.png         # Splash screen icon
│   │   ├── favicon.png             # Web favicon
│   │   └── beach-background.jpg    # Background image
│   │
│   └── styles/                      # StyleSheet files
│       └── signIn.styles.js        # Sign-in screen styles
│
├── 🎨 constants/                    # App constants
│   └── colors.js                   # Color palette
│
├── 💾 store/                        # State management
│   └── useWishlistStore.js         # Wishlist Zustand store
│
├── ⚙️ Configuration Files
│   ├── app.json                    # Expo configuration
│   ├── package.json                # Dependencies & scripts
│   ├── eas.json                    # EAS Build configuration
│   ├── tsconfig.json               # TypeScript config
│   ├── eslint.config.js            # ESLint configuration
│   └── expo-env.d.ts               # Expo type definitions
│
└── 📝 README.md                     # You are here!
```

---

## 🛠️ Tech Stack

### Core Technologies
- **React Native** `0.81.5` - Cross-platform mobile framework
- **Expo** `~54.0.22` - Development and build tooling
- **Expo Router** `~6.0.14` - File-based routing system
- **React** `19.1.0` - UI library

### Navigation
- **@react-navigation/drawer** `^7.7.2` - Drawer navigation
- **@react-navigation/bottom-tabs** `^7.4.0` - Tab navigation
- **@react-navigation/native** `^7.1.8` - Navigation core

### State Management
- **Zustand** `^5.0.8` - Lightweight state management

### UI & Animations
- **react-native-reanimated** `~4.1.1` - Advanced animations
- **react-native-gesture-handler** `~2.28.0` - Touch gestures
- **@expo/vector-icons** `^15.0.3` - Icon library
- **expo-image** `~3.0.10` - Optimized image component

### Additional Features
- **expo-splash-screen** `~31.0.10` - Splash screen management
- **expo-status-bar** `~3.0.8` - Status bar customization
- **expo-haptics** `~15.0.7` - Haptic feedback
- **expo-font** `~14.0.9` - Custom fonts support

### Development Tools
- **TypeScript** `~5.9.2` - Type safety
- **ESLint** `^9.25.0` - Code linting
- **eslint-config-expo** `~10.0.0` - Expo ESLint config

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (optional but recommended)
- **iOS Simulator** (for Mac users) or **Android Studio** (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travifai.git
   cd Travelly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

### 📱 Running on Specific Platforms

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

---

## 🔑 Test Credentials

To test the authentication flow, use these credentials:

```
Email: sumit@gmail.com
Password: 123456
```

---

## 🎨 Color Palette

The app uses a beautiful, calming blue-themed color scheme:

```javascript
{
  primary: "#1976D2",       // Primary blue
  button: "#1976D2",        // Button color
  textPrimary: "#1a4971",   // Dark blue text
  textSecondary: "#6d93b8", // Light blue text
  background: "#E8D5F2",    // Light purple background
  tabBackground: "#e3f2fd", // Tab background
  cardBackground: "#f5f9ff",// Card background
  white: "#ffffff",
  black: "#000000"
}
```

---

## 📦 Build & Deploy

### EAS Build

This project is configured with EAS (Expo Application Services) for building and deploying.

```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios

# Build for both
eas build --platform all
```

### Project ID
```
EAS Project ID: e96676c4-e020-4064-a08e-9920a5ffd77a
```

---

## 🗺️ Routing Structure

The app uses Expo Router's file-based routing system:

```
/                          → Redirects to splash
/splash                    → Splash screen (3s delay)
/(auth)                    → Authentication group
  /                        → Sign-in screen
/(drawers)                 → Drawer navigation
  /(tabs)                  → Tab navigation
    /                      → Home screen
    /search                → Search screen
    /wishlist              → Wishlist screen
    /chat                  → Chat screen
  /about                   → About screen
  /bookings                → Bookings screen
  /contact                 → Contact screen
  /payments                → Payments screen
  /treels                  → Travel reels
  /logout                  → Logout
/hotelDetails              → Hotel details modal
```

---

## 🎯 Key Features Explained

### 🔥 State Management with Zustand
The app uses Zustand for efficient, lightweight state management. The wishlist functionality is powered by a Zustand store that persists user preferences.

### 🎭 Smooth Animations
Built with `react-native-reanimated` for performant, native-driven animations throughout the app.

### 📱 File-Based Routing
Expo Router provides a file-system-based routing solution that makes navigation intuitive and scalable.

### 🎨 Custom Theming
Centralized color management through `constants/colors.js` ensures consistent styling across the entire app.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Scripts

```json
{
  "start": "expo start",              // Start development server
  "android": "expo start --android",   // Start on Android
  "ios": "expo start --ios",           // Start on iOS
  "web": "expo start --web",           // Start on web
  "lint": "expo lint",                 // Run ESLint
  "reset-project": "node ./scripts/reset-project.js"
}
```

---

## 🐛 Known Issues

- Sign-up functionality is currently under development
- Some screens are using placeholder data

---

## 🔮 Future Enhancements

- [ ] Complete sign-up flow
- [ ] Integrate real payment gateway
- [ ] Add map view for hotel locations
- [ ] Implement real-time chat functionality
- [ ] Add reviews and ratings system
- [ ] Multi-language support
- [ ] Dark mode support
- [ ] Push notifications
- [ ] Social sharing features

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Developer

**Sumit Kumar**

- Package: `com.kumarsumit45.Travifai`
- Email: sumit@gmail.com

---

## 🙏 Acknowledgments

- Expo team for the amazing development experience
- React Native community for the robust ecosystem
- All open-source contributors who made this project possible

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ for travelers around the world**

</div>
