import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, Animated, TouchableOpacity, Easing } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { Header } from "../../shared/header"
import { color, spacing } from "../../../theme"
import { bowserLogo } from "."

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const MENU: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  alignSelf: "flex-start",
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

const CIRCLE: ViewStyle = {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "red",
}


export interface BasicAnimationsScreenProps extends NavigationScreenProps<{}> {}

export class BasicAnimations extends React.Component<BasicAnimationsScreenProps, {}> {

  state = {
    animatedValue: new Animated.Value(1),
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.animatedValue, {
        toValue: 1000,
        duration: 3000,
      }),
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 3000,
      }),
    ]).start()
  }
  render() {
    const centerCyrcleColorAnimation = {
      backgroundColor: this.state.animatedValue.interpolate({
        inputRange: [0, 1, 50, 100],
        outputRange: ["#FF9900", "red", "blue", "yellow"],
      }),
    }

    const centerCyrcleOpacityAnimation = {
      opacity: this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    }

    const transformStyle = {
      transform: [{
        translateX: this.state.animatedValue.interpolate({
          inputRange: [0, 1, 100],
          outputRange: [100, 0, -100],
          extrapolate: "clamp",
        }),
      }, {
        translateY: this.state.animatedValue.interpolate({
          inputRange: [0, 1, 100, 1000],
          outputRange: [0, 0, -100, -400],
          extrapolate: "clamp",
        }),
      }, {
        scale: this.state.animatedValue.interpolate({
          inputRange: [0, 1, 50, 100, 1000],
          outputRange: [1, 1, 10, 1, 3],
          extrapolate: "clamp",
        }),
      }],
    }

    const transformShape = {
      transform: [{
        skewX: this.state.animatedValue.interpolate({
          inputRange: [0, 1, 100, 1000],
          outputRange: ["45deg", "0deg", "-45deg", "120deg"],
        }),
      }],
    }



    return (
      <View style={FULL}>
        <StatusBar barStyle="light-content" />
        <Wallpaper />
        <Button
          style={MENU}
          textStyle={CONTINUE_TEXT}
          text="Menu"
          onPress={this.props.navigation.openDrawer}
        />
        <SafeAreaView style={FULL}>
          <Screen style={CONTAINER} backgroundColor={color.transparent} preset="scrollStack">
            <Header
              headerText="Let's learn"
              style={HEADER}
              titleStyle={HEADER_TITLE}
            />
            <Text style={TITLE_WRAPPER}>
              <Text style={ALMOST} text="Basic Animations" />
            </Text>
            <Image source={bowserLogo} style={BOWSER} />
            <Text style={CONTENT}>
             <View style={[FULL, { width: "100%", flexDirection: "row", justifyContent: "space-around"}]}>
              <TouchableOpacity onPress={this.startAnimation}><Animated.View style={[CIRCLE, transformShape]} /></TouchableOpacity>
              <TouchableOpacity onPress={this.startAnimation}><Animated.View style={[CIRCLE, centerCyrcleOpacityAnimation, centerCyrcleColorAnimation]} /></TouchableOpacity>
              <TouchableOpacity onPress={this.startAnimation}><Animated.View style={[CIRCLE, transformStyle, centerCyrcleColorAnimation]} /></TouchableOpacity>
             </View>
            </Text>
          </Screen>
        </SafeAreaView>
      </View>
    )
  }
}
