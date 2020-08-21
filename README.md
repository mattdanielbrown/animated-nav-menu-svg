# animated-nav-menu-svg [![Build Status](https://travis-ci.com/mattdanielbrown/animated-nav-menu-svg.svg?branch=master)](https://travis-ci.com/mattdanielbrown/animated-nav-menu-svg)

> NPM Package containing an animated navigation menu icon - implemented in svg - including CSS and Javascript, for use in HTML-based web development.


## Install

### Using NPM:

```
$ npm install animated-nav-menu-svg --save
```

### Using Yarn:

```
$ yarn add animated-nav-menu-svg
```

## Usage

### Overview

There are 3 steps to implement the animated svg icon.

1. Include the stylesheet.
2. Include the javascript.
3. Add the markup (HTML/SVG) code.

All are required to get an interactive animated menu icon.

The first two are included in the NPM package, but the last step is manual, with the necessary code included below.

<br>

### Step One: Include the stylesheet

**If you're using CSS**, you can include the following inside your HTML document (usually within the `<head>` tag):

```html
<!-- Inside your <head> element -->
<link rel="stylesheet" href="PATH/TO/node_modules/animated-nav-menu-svg/animated-nav-menu-svg.css">
```

**Or**, you can *import* the stylesheet into another CSS Stylesheet:

```css
@import(PATH/TO/node_modules/animated-nav-menu-svg/animated-nav-menu-svg.css);
```

<br>

**If you're using SCSS**, import the stylesheet like so:

```scss
@import 'PATH/TO/node_module/animated-nav-menu-svg.css';
```

<br>

### Step Two: Include the javascript

Reference the javascript by adding something like the following line (usually at the end of an HTML document's `<body>` element):

```html
<!-- Wherever you import your other javascript files... -->
<script src="PATH/TO/node_modules/animated-nav-menu-svg/animated-nav-menu-svg.js"></script>
```

<br>


### Step Three: Add the HTML Markup

All that's left is to add the SVG-containing code to your HTML document (usually inside `<nav>`):

```html
<!-- Navigation Menu Button (Toggable-SVG inside a button element) -->
<button type="button" id="menu-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" id="menu-icon">
    <title>animated-hamburger-menu-icon-svg</title>
    <rect y="4" width="32" height="4"></rect>
    <rect y="16" width="32" height="4"></rect>
    <rect y="28" width="32" height="4"></rect>
  </svg>
</button>
```

<br>

*If, for some reason, you __only__ need the animated SVG icon, this is the crutial code*

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" id="animated-menu-icon-svg">
  <title>animated-hamburger-menu-icon-svg</title>
  <rect y="4" width="32" height="4" id="top-line"></rect>
  <rect y="16" width="32" height="4" id="middle-line"></rect>
  <rect y="28" width="32" height="4" id="bottom-line"></rect>
</svg>
```

## API

### animatedNavMenuSvg(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.
