import * as React from "react"
import { View, Image, ViewStyle, TextStyle, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { Header } from "../../shared/header"
import { color, spacing } from "../../../theme"
import LottieView from "lottie-react-native"


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


export interface LottieScreenScreenProps extends NavigationScreenProps<{}> {}

export class LottieScreen extends React.Component<LottieScreenScreenProps, {}> {

  animation = null
  loadinganimation = null

  render() {
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
              <Text style={ALMOST} text="Lottie" />
            </Text>
            <LottieView
              style={{flex: 1, width: "100%" }}
              ref={animation => {
                this.animation = animation
              }}
              source={require("./precomp.json")}
            />
             <TouchableOpacity onPress={() =>  {
              setTimeout(() => {
                this.animation.play()
              }, 1000)
                this.loadinganimation.play()
              }
            }>
              <LottieView
                style={{flex: 1, width: "100%" }}
                ref={animation => {
                  this.loadinganimation = animation
                }}
                source={require("./loading_animation.json")}
              />
             </TouchableOpacity>
          </Screen>
        </SafeAreaView>
      </View>
    )
  }
}
