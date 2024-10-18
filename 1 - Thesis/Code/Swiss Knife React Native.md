## Run a minimal example

```
> npx create-expo-app ProjectName
> cd ProjectName
> npm start

```

## Swiss knife of React Native

- To start your project:

```

> npx expo start

```

- To run on Android specifically:

```

> npx expo start --android
    
```

To run on iOS (if you're on a Mac):

```

> npx expo start --ios

```

- To run the web version:

```

> npx expo start --web

```

## Run on device (Android)

- On virtual device

```

> npm run android

```

- On physical device

```
> npx react-native run-android

```

- To choose between multiple running emulators:

```
> adb devices
> npx react-native run-android --deviceId=DEVICE_ID

```