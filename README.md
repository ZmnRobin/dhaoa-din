# Dhaoa-Din

🚀 **Dhaoa-Din** is a crowdsourced real-time alert system that helps citizens and law enforcement quickly respond to unnecessary protests that block roads in Dhaka. Users can report issues, receive alerts, and organize to clear the way efficiently.

## 🌟 Features

- **📍 Report Issues:** Users can report road blockages with location, message, and an optional image.
- **🔔 Real-time Alerts:** Notifies nearby users (within 500m – 1km) about ongoing issues.
- **👥 Join or Ignore:** Users can decide whether to join the response team or ignore the alert.
- **✅ Issue Resolution:** Once the road is cleared, the issue creator can mark it as resolved.
- **📡 Live Participation Tracking:** Users can see how many people are joining in real-time.

## 🛠️ Tech Stack

- **Frontend:** React Native (Expo), Redux Toolkit, React Native Paper
- **Backend:** Firebase (Firestore, Firebase Auth, Firebase Cloud Messaging)
- **Notifications:** Firebase Cloud Messaging (FCM)
- **Location Services:** Expo Location API

## 🚀 Quick Start

1. **Clone the Repository**
   ```sh
   git clone https://github.com/ZmnRobin/dhaoa-din.git
   cd dhaoa-din
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Setup Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore, Firebase Auth, and Firebase Cloud Messaging
   - Add your Firebase config in `src/config/firebaseConfig.js`
4. **Run the App**
   ```sh
   npx expo start
   ```

## 💡 Contribution Guidelines

We welcome contributions! 🚀

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a Pull Request.

## 📜 License

This project is open-source and licensed under the **MIT License**.

---

💡 **Join the movement! Let's make Dhaka's roads more organized and traffic-free!**

