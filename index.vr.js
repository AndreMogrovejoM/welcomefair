import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
} from "react-vr";
import { Z_FIXED } from "zlib";

export default class WelcomeFair extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("B360.jpg")} />
        <View>
          <Fixed>
            <VrButton style={{ transform: [{ translate: [-50, 5, -100] }] }}>
              <Image
                style={{
                  width: 8,
                  height: 8,
                  // transform: [{ translate: [-3, 0.6, -20] }],
                }}
                source={asset("question.png")}
              />
            </VrButton>
          </Fixed>
        </View>
        <View>
          <VrButton style={{ transform: [{ translate: [30, 12, -80] }] }}>
            <Fixed>
              <Image
                style={{
                  width: 8,
                  height: 8,
                  // transform: [{ translate: [-3, 0.6, -20] }],
                }}
                source={asset("question.png")}
              />
            </Fixed>
          </VrButton>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeFair", () => WelcomeFair);
