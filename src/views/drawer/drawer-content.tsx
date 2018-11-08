import * as React from "react"
import { SafeAreaView, Button } from "react-native"
import { DrawerItems } from "react-navigation"

interface DrawerContentProps {
  navigation: any
}

export class DrawerContent extends React.Component<DrawerContentProps> {
  static navigationOptions = {
    drawerLabel: "Menu",
  }

  render() {
    return (
      <SafeAreaView>
        <DrawerItems {...this.props} />
        <Button
          onPress={() => this.props.navigation.closeDrawer() }
          title="Go back home"
        />
      </SafeAreaView>
    )
  }
}
