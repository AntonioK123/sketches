# Generative Art NFT Series of Sketches Documentation

## Overview

This documentation provides details about a series of seven generative art sketches created as NFTs. Each sketch generates unique variations using vanilla JavaScript and the p5.js library, with new artwork created each time the page is refreshed. Each variation is associated with a unique token, thanks to the fxhash template used for creating these sketches.

## Features

- **7 Unique Sketches**: Each sketch represents a different piece of generative art.
- **Dynamic Variations**: Refreshing the browser generates new variations of each sketch.
- **Unique Tokens**: Every variation has a unique token associated with it.
- **Downloadable Resolutions**: Each sketch can be downloaded in different resolutions by pressing specific keys.

## Downloadable Resolutions

Users can download each sketch in varying resolutions by pressing the following keys:

- **`A`**: Smallest resolution
- **`S`**: Small resolution
- **`D`**: Medium resolution
- **`F`**: Largest resolution

## Technologies Used

- **HTML**: Structure of the page.
- **CSS**: Basic styling for layout.
- **JavaScript**: Logic for generating art and handling downloads.
- **p5.js**: Library for graphic and interactive experiences.
- **fxhash**: Template used for creating sketches and managing unique tokens.

## Code Structure

### index.html

The main HTML file containing links to each generative art sketch.

### styles.css

Basic styles for layout and design.

### sketch.js

JavaScript code for generating the art and handling resolution downloads. Each sketch function utilizes p5.js and the fxhash template.

## Generating New Variations

- **Refresh the Page**: Each refresh will create new variations of the sketches, each with a unique token.


