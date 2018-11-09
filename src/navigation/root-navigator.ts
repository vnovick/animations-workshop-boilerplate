import { createDrawerNavigator } from "react-navigation"
import { DrawerContent } from "../views/drawer"
import { BasicAnimations } from "../views/example/basic-animations-screen"
import { Interpolation } from "../views/example/interpolation-screen"
import { GestureScreen } from "../views/example/gesture-screen"
import { LottieScreen } from "../views/example/lottie-screen"
import { AnimatableScreen } from "../views/example/animatable"
import { CustomTransitions } from "../navigation/custom-transitions-navigator"
import { useScreens } from "react-native-screens"

useScreens()
console.disableYellowBox = true

export const RootNavigator = createDrawerNavigator(
  {
    BasicAnimations: { screen: BasicAnimations },
    Animatable: { screen: AnimatableScreen },
    Interpolation: { screen: Interpolation },
    CustomTransitions: { screen: CustomTransitions },
    GesturesAnimation: { screen: GestureScreen },
    Lottie: { screen: LottieScreen },
  },
  {
    contentComponent: DrawerContent,
  },
)
