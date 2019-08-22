# react-native-general-statusbar

[![npm package](https://img.shields.io/npm/v/react-native-general-statusbar.svg)](https://www.npmjs.com/package/react-native-general-statusbar)
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-lightgrey.svg)
![MIT License](https://img.shields.io/npm/l/react-native-general-statusbar.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> General StatusBar color for Android and IOS!

## HOW TO INSTALL ?

```javascript
npm i --save react-native-general-statusbar
```

## HOW TO USE ?

```javascript
import GeneralStatusBarColor from "react-native-general-statusbar";

function MyComponent() {
	return (
		<View>
			<GeneralStatusBarColor
				backgroundColor="#00AEEF"
				barStyle="light-content"
			/>
		</View>
	);
}
```

## Reference

## Props

### `backgroundColor`

The background color of the status bar.

| Type | Required |
| ---- | -------- |
| color | No       |

---

### `barStyle`

Sets the color of the status bar text.

| Type | Required |
| ---- | -------- |
| enum('default', 'light-content', 'dark-content') | No       |

## LICENSE

MIT
