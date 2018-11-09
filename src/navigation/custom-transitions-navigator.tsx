import * as React from "react"
import { createStackNavigator } from "react-navigation"
import { Image, Button, Text, StyleSheet, View} from "react-native"
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions"

const LogoImage = (props) => (
  <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
)

class Screen1 extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo" appear="flip">
          <LogoImage style={styles.largeLogo}/>
        </Transition>
        <Transition shared="welcome" disappear="bottom">
          <View>
            <Text style={styles.paragraph}>
              Welcome to this fantastic app!
            </Text>
            <Button title="Next" onPress={() => this.props.navigation.navigate("screen2")} />
          </View>
        </Transition>
      </View>
    )
  }
}

class Screen2 extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo" appear="flip">
          <LogoImage style={styles.smallLogo}/>
        </Transition>
        <Transition shared="logo" appear="scale">
          <Text style={styles.paragraph}>
            <Text style={{fontWeight:"normal"}}>
              Now you should have a basic understanding of how this app works.
              Please sign up and take part in this fantastic user experience!
            </Text>
          </Text>
        </Transition>
        <Text style={styles.paragraph}>
            This is the last page of the onboarding.
        </Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
})

export const CustomTransitions = FluidNavigator(
  {
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
  },
)
