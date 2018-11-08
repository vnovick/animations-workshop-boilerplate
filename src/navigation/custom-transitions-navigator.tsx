import * as React from "react"
import { createStackNavigator } from "react-navigation"
import { View, Button, Text, ViewStyle, SafeAreaView} from "react-native"
import { color, spacing } from "../theme"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const Home = (props) => (
  <SafeAreaView style={FULL}>
    <Text>Home</Text>
    <Button title="Next" onPress={() => props.navigation.navigate("NextScreen")} />
  </SafeAreaView>
)

const NextScreen = (props) => (
  <SafeAreaView style={FULL}>
    <Text>Next Screen</Text>
    <Button title="GoBack" onPress={() => props.navigation.goBack()} />
  </SafeAreaView>
)

export const CustomTransitions = createStackNavigator(
  {
    Home: { screen: Home },
    NextScreen: { screen: NextScreen },
  },
)
