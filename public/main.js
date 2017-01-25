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
    "body": {
        "height": "100%"
    },
    "container-fluid": {
        "backgroundColor": "#f5f5f5"
    },
    "logo-image": {
        "width": 40,
        "height": 40,
        "float": "left"
    },
    "logo-text": {
        "textAlign": "right"
    },
    "header": {
        "width": "100%",
        "height": 400,
        "color": "#ffffff",
        "textAlign": "center",
        "backgroundImage": "url(\"images/GusHeader.jpg\")"
    },
    "header-text": {
        "marginTop": "10%",
        "marginLeft": "30%",
        "paddingTop": "5%",
        "paddingRight": "5%",
        "paddingBottom": "5%",
        "paddingLeft": "5%",
        "borderStyle": "solid",
        "borderColor": "#ffffff",
        "borderWidth": "medium",
        "backgroundColor": "hsl(16, 0%, 81%)"
    },
    "header-text h1": {
        "fontSize": 60
    },
    "home": {
        "paddingTop": "5%",
        "width": "100%"
    },
    "nav": {
        "paddingTop": 5,
        "textAlign": "right",
        "color": "#ffffff !important"
    },
    "nav-link li a": {
        "color": "#fff !important"
    },
    "nav-link li a:hover": {
        "color": "grey !important"
    },
    "nav-item": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "nav flex-column": {
        "textAlign": "left"
    },
    "footer": {
        "position": "sticky",
        "width": "100%",
        "height": 60,
        "bottom": 0,
        "lineHeight": 60,
        "textAlign": "center"
    },
    "carousel": {
        "marginBottom": 4
    },
    "carousel-caption": {
        "zIndex": 10,
        "bottom": 3
    },
    "carousel-item": {
        "height": 32,
        "backgroundColor": "#777"
    },
    "carousel-item > img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "minWidth": "100%",
        "height": 32
    },
    "marketing col-lg-4": {
        "marginBottom": 1.5,
        "textAlign": "center"
    },
    "marketing h2": {
        "fontWeight": "normal"
    },
    "marketing col-lg-4 p": {
        "marginRight": 0.75,
        "marginLeft": 0.75
    },
    "featurette-divider": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "featurette-heading": {
        "fontWeight": "300",
        "lineHeight": 1,
        "letterSpacing": -0.05
    }
});