# imagehover.css
*A Scaleable & Light Image Hover CSS Library*

Imagehover.css is a lovingly crafted CSS library allowing you to easily implement scaleable image hover effects. Choose from over 40 hover effect classes from a CSS library weighing in at a minified size of only 19KB. 

[Check out all the hover effects here!](http://www.imagehover.io/)

## NPM

  ```
  npm install imagehover.css
  ```
  
## CDN
  ```
  https://cdnjs.cloudflare.com/ajax/libs/imagehover.css/1.0/css/imagehover.min.css
  ```

## Basic Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="css/imagehover.min.css">
  </head>
  ```
2. Place the following markup in to your HTML document

  ```html
  <figure class="imghvr-fade">
    <img src="#">
    <figcaption>
      // Hover Content
    </figcaption>
  </figure>
  ```

3. Edit the URL to your image and add your hover content. Then simply set the imagehover.css class of your choice to the containing figure element. In the example above this has been set to 'imghvr-fade'. A full list of hover effects and their classes can be found [here!](http://www.imagehover.io/).

## Adding a Link
To link your image, add an empty &lt;a&gt; tag just after the figcaption element.

  ```html
  <figure class="imghvr-fade">
    <img src="#">
    <figcaption>
      // Hover Content
    </figcaption>
    <a href="http://www.imagehover.io"></a>
  </figure>
  ```

## SASS
`.scss` source files are available if you use Sass as your CSS precompiler. It’s customizable and modular.

### Customizing variables
Imagehover.css provides a `_custom.scss` file for easy overriding of default variables in `/scss/_variables.scss`. Copy and paste relevant lines from there into the `_custom.scss` file, modify the values, and recompile your Sass to change our default values. **Be sure to remove the `!default` flag from override values.**

For example, to change out the `background-color` and `color` for the `<figcaption>`, you'd do the following:

  ```scss
  // Imagehover.css overrides
  //
  // Copy variables from `_variables.scss` to this file to override default values without modifying source files.
  
  $figcaption-bg:  #1a480a; // Green
  $text-color:     #9C3636; // Red
  ```

#### Variable List

You can find and customize these variables in the `_variables.scss` file.

| Variable                    | Values                             | Description                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$image-bg`                   | `#2266a5` (default), or any valid CSS color value | Specifies the `background-color` for the image.                           |
| `$figcaption-bg`           | `#135796` (default), or any valid CSS color value        | Specifies the `background-color` for the figcaption element.                       |
| `$figcaption-padding`           | `30px` (default), or any length or percentage        | Sets the `padding` on the figcaption element.                         |
| `$text-color`         | `#ffffff` (default), or any valid CSS color value       | Sets the text `color` for the figcaption element and any child `<h*> elements`.      |
| `$border-color`       | `#ffffff` (default), or any valid CSS color value        | Sets the text `border-color` for ...                                |
| `$border-margin` | `5px` (default), or any valid length        | ...                                                                                    |
| `$border-width`      | `4px` (default), or any valid length        | ...     |
| `$transition-duration`      | `0.35s` (default), or any valid time value        | Sets the transition duration for the animation.                                |
| `$shift-distance`      | `10px` (default), or any valid length        | ...                              |

  
## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 9.1+ ✔ | Latest ✔ |
