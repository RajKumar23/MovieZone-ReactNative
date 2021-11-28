import React, { useState } from 'react';
import Home from './screens/home';
import About from './screens/about';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from "./routes/homeStack";
import RootNavigationDrawer from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "light": require("./assets/fonts/Merriweather-Light.ttf"),
    "regular": require("./assets/fonts/Merriweather-Regular.ttf"),
    "Bold": require("./assets/fonts/Merriweather-Bold.ttf")
  });
}

export default function App() {

  const [getFrontLoad, setFontLoad] = useState(false);

  if (getFrontLoad) {
    return (
      <RootNavigationDrawer />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoad(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}
