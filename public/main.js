import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "fontFamily": "Futura, \"Trebuchet MS\", Arial, sans-serif"
    },
    "h2": {
        "fontFamily": "Futura, \"Trebuchet MS\", Arial, sans-serif"
    },
    "h3": {
        "fontFamily": "Futura, \"Trebuchet MS\", Arial, sans-serif"
    },
    "h4": {
        "fontFamily": "Futura, \"Trebuchet MS\", Arial, sans-serif"
    },
    "p": {
        "fontFamily": "Futura, \"Trebuchet MS\", Arial, sans-serif"
    },
    "logo-image": {
        "width": 40,
        "height": 40,
        "float": "left"
    },
    "logo-text": {
        "textAlign": "right",
        "float": "right"
    },
    "header": {
        "borderStyle": "dashed",
        "borderColor": "blue",
        "borderWidth": "thin"
    },
    "home": {
        "borderStyle": "dashed",
        "borderColor": "blue",
        "borderWidth": "thin"
    },
    "footer": {
        "borderStyle": "dashed",
        "borderColor": "blue",
        "borderWidth": "thin"
    },
    "nav": {
        "textAlign": "right"
    }
});