# Projeto Integrado 1

Academic mobile app prototype for the Projeto Integrado 1 course of the Sistemas e Mídias Digitais degree. It sets up separate flows for students and clients around projects, ideas and teams. The interface is in Portuguese.

## Technology

- **React Native 0.59 (bare workflow):** a standard React Native project without Expo, with its own `android/` and `ios/` native folders.
- **Firebase 6 Authentication:** handles sign up and login with email and password.
- **React Navigation 3:** combines all of its main navigator types. A switch navigator chooses between the welcome flow and each user type's area, and each area nests a drawer, a stack and bottom tabs.
- **NativeBase:** provides the form, button and dropdown components.
- **Jest:** includes the default render test.

## Current state

The navigation structure is the main part of this prototype:

- **Student area:** tabs for profile, projects, teams and project search.
- **Client area:** tabs for profile, projects, new idea and volunteer search.

The dashboard screens are placeholders, and the registration forms do not save their data yet.

## Running locally

You need Node.js and the Android or iOS development tools that React Native 0.59 supports.

```bash
npm install
npx react-native run-android
```

Because of its age, this project may need older versions of Node.js, the JDK and the Android SDK.
