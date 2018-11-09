import * as React from "react"
import { View, StyleSheet, ViewStyle, TextStyle, Animated, SafeAreaView, StatusBar, PanResponder } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { color, spacing } from "../../../theme"

const FULL: ViewStyle = { flex: 1 }

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

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




const SWIPE_THRESHOLD = 120;

const profiles = [
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400',
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400/',
]



export interface GestureScreenScreenProps extends NavigationScreenProps<{}> {}

export class GestureScreen extends React.Component<GestureScreenScreenProps, {}> {

  _panResponder = null
  _value = { x: 0, y: 0}

  state = {
    person: profiles[0],
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.5),
  }
  componentWillMount() {
    this._value = {x: 0, y: 0}
    this.state.pan.addListener((value) => this._value = value)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,


      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this._value.x,
          y: this._value.y,
        })
        this.state.pan.setValue({ x: 0, y: 0 })
      },

      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),

      onPanResponderRelease: (e, { vx, vy }) => {
        this.state.pan.flattenOffset()
        if (Math.abs(this._value.x) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: { x: vx, y: vy },
            deceleration: 0.98,
          }).start(() => this.switchToNextProfile())
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start()
        }
      },
    })
  }

  componentDidMount() {
    this.scaleAnimationTrigger()
  }

  scaleAnimationTrigger() {
    Animated.spring(
      this.state.scale,
      { toValue: 1, friction: 7 },
    ).start()
  }


  switchToNextProfile() {
    this.resetState()
    const currentPersonId = profiles.indexOf(this.state.person);
    let nextPersonId = currentPersonId + 1
    this.setState({
      person: profiles[nextPersonId > profiles.length - 1 ? 0 : nextPersonId],
    })
    this.scaleAnimationTrigger()
  }

  resetState() {
    this.state.pan.setValue({ x: 0, y: 0 })
    this.state.scale.setValue(0)
  }

  render() {
    const { scale, pan } = this.state;
    const [translateX, translateY] = [pan.x, pan.y]

    const rotate = pan.x.interpolate({
      inputRange: [-250, 0, 250], outputRange: ["-30deg", "0deg", "30deg"]
    })
    const opacity = pan.x.interpolate({
      inputRange: [-250, 0, 250], outputRange: [0.5, 1, 0.5]
    })
    const likeOpacity = pan.x.interpolate({
      inputRange: [0, 150], outputRange: [0, 1]
    });
    const nopeOpacity = pan.x.interpolate({
      inputRange: [-150, 0], outputRange: [1, 0]
    });
    const likeScale = pan.x.interpolate({ inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp' });

    const nopeScale = pan.x.interpolate({ inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp' });


    let cardTransformStyle = {
      transform: [
        { translateX },
        { translateY },
        { rotate },
        { scale },
      ], opacity,
    }
    let nopeTransformStyle = {
      transform: [
        { scale: nopeScale },
      ],
      opacity: nopeOpacity,
    }
    let likeTransformStyle = {
      transform: [{
        scale: likeScale,
      }],
      opacity: likeOpacity,
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
        <SafeAreaView style={styles.container}>
          <Animated.Image source={{
              uri: this.state.person,
            }}
              style={[styles.card, cardTransformStyle]} {...this._panResponder.panHandlers} >
            </Animated.Image>

            <Animated.View style={[styles.nope, nopeTransformStyle]}>
              <Text style={CONTINUE_TEXT}>Nope!</Text>
            </Animated.View>
            <Animated.View style={[styles.like, likeTransformStyle]}>
              <Text style={CONTINUE_TEXT}>Like!</Text>
           </Animated.View>
        </SafeAreaView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  card: {
    width: 300,
    height: 400,
  },
  like: {
    borderColor: "gray",
    backgroundColor: "green",
    borderWidth: 2,
    position: "absolute",
    padding: 10,
    bottom: 10,
    borderRadius: 5,
    right: 20,
  },
  likeText: {
    fontSize: 14,
  },
  nope: {
    borderColor: "gray",
    backgroundColor: "red",
    borderWidth: 2,
    position: "absolute",
    bottom: 10,
    padding: 10,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 14,
  }
});
