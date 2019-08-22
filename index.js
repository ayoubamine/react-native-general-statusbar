import React from "react";
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
);

const STATUSBAR_HEIGHT =
	Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight;

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT
	}
});

export default GeneralStatusBarColor;
