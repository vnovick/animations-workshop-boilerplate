import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { Header } from "../../shared/header"
import { color, spacing } from "../../../theme"
import * as Animatable from "react-native-animatable"

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

const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  marginVertical: spacing[4],
  paddingHorizontal: spacing[4],
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}


export interface AnimatableScreenProps extends NavigationScreenProps<{}> {}

export class AnimatableScreen extends React.Component<AnimatableScreenProps, {}> {

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
              <Text style={ALMOST} text="Animatable" />
            </Text>
            <Animatable.View animation="bounce" easing="ease-out" delay={1000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "#5D2555",
            }]}>
              <Text>bounce</Text>
            ️ </Animatable.View>
            <Animatable.View animation="flash" easing="ease-out" delay={2000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "red",
            }]}>
              <Text>flash</Text>
            ️ </Animatable.View>
            <Animatable.View animation="jello" easing="ease-out" delay={3000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "green",
            }]}>
              <Text>jello</Text>
            ️ </Animatable.View>
            <Animatable.View animation="pulse" easing="ease-out" delay={4000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "yellow",
            }]}>
              <Text>pulse</Text>
            ️ </Animatable.View>
            <Animatable.View animation="rotate" easing="ease-out" delay={5000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "pink",
            }]}>
              <Text>rotate</Text>
            ️ </Animatable.View>
            <Animatable.View animation="rubberBand" easing="ease-out" delay={6000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "blue",
            }]}>
              <Text>rubberBand</Text>
            ️ </Animatable.View>
            <Animatable.View animation="shake" easing="ease-out" delay={7000}  iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "cyan",
            }]}>
              <Text>shake</Text>
            ️ </Animatable.View>
            <Animatable.View animation="swing" easing="ease-out" delay={8000}  iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "magenta",
            }]}>
              <Text>swing</Text>
            ️ </Animatable.View>
            <Animatable.View animation="tada" easing="ease-out" delay={9000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "orange",
            }]}>
              <Text>tada</Text>
            ️ </Animatable.View>
            <Animatable.View animation="wobble" easing="ease-out" delay={10000} iterationCount="infinite" style={[BUTTON,{
                backgroundColor: "aqua",
            }]}>
              <Text>wobble</Text>
            ️ </Animatable.View>
          </Screen>
        </SafeAreaView>
      </View>
    )
  }
}
