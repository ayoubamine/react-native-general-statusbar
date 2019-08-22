# react-native-general-statusbar

> General status bar color!

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
