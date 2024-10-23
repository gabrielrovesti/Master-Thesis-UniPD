## Create from scratch an example

```
> npx react-native init <projectName>

```

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
(in this case, open Android Studio and switch on a device, so to have the app immediately deployed)
    
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

If project does not have an Android folder, we do:
> npx react-native eject

> npx expo prebuild (what I did)
> npx react-native run-android

```