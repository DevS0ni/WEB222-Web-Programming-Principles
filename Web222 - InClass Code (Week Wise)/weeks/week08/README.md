# WEB222 - Week 8

## Suggested Readings

* [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
* [Learning to Style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [CSS: Cascading Style Sheets on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Exercise: Using Third-Party CSS Libraries

We've been focused on the mechanics of writing CSS ourselves, and this is an
important skill.  In addition, it's a good idea to know how to use third-party
CSS libraries created by other developers.  There are many pre-existing CSS
libraries and frameworks we can use to help us create the web pages and apps
we desire.

### How to use Third-Party CSS

There is a general pattern to using any CSS library in your web page.

1. Find a library you want to use.  We've listed a number of interesting ones below.
2. Read the documentation.  Every library is different, and the "installation" and "usage" instructions will usually guide you on next steps.  Get used to reading technical documentation, so that you can learn to solve your own problems.
3. Figure out which file or files you need to include in your HTML.  This will typically include one or more `.css` files, and maybe `.js` ,fonts, etc.  You will likely need to use `<link>` and `<script>` elements
4. See if the CSS library you want to use is available via a [Content Delivery Network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network).  Try searching for your chosen library on [cdnjs](https://cdnjs.com/) or another CDN.
5. Read the docs for your library to see if you need to include any special markup, classes, or other info in your HTML file in order for things to work.  CSS libraries operate on HTML, and sometimes they will expect it to be in a particular format.

### Popular CSS Libraries

Here's a list of some popular CSS libraries and frameworks to get you started.

First, a few examples of simple "drop in" style libraries, where you simply include
the CSS file, and everything "Just Works":

* [Normalize.css](http://necolas.github.io/normalize.css/) - normalizes CSS so it is the same in all browsers ([CDN link](https://cdnjs.com/libraries/normalize))
* [Milligram](https://milligram.io/) - tiny set of default styles to make your site look great ([CDN link](https://cdnjs.com/libraries/milligram))
* [Tacit](https://yegor256.github.io/tacit/) - CSS framework with no classes.

Next, there are lots of stylesheets you can use to improve the readability of your text:

* [TufteCSS](https://edwardtufte.github.io/tufte-css/) - a stylesheet based on the ideas of Edward Tufte about typography and text ([CDN link](https://cdnjs.com/libraries/tufte-css))
* [Gutenberg](https://github.com/BafS/Gutenberg) - a drop-in stylesheet for Printing to a printer
* [Font Awesome](https://fontawesome.com/) - beautiful fonts and icons

In addition to changing how our text looks, a lot of CSS libraries add interesting
and playful animations and effects to spice up our HTML:

* [Hover](http://ianlunn.github.io/Hover/) - hover effects for links, buttons, and logs
* [Balloon.css](http://kazzkiq.github.io/balloon.css/) - tooltips and popups
* [Animate.css](http://daneden.github.io/animate.css) - animations for HTML elements
* [CSShake](http://elrumordelaluz.github.io/csshake/) - more animations for HTML elements ([CDN link](https://cdnjs.com/libraries/csshake))
* [CSSgram](https://una.im/CSSgram/) - Instagram style filters for HTML images


Another common problem CSS can solve is what to do while we wait for things to finish
loading:

* [SpinKit](http://tobiasahlin.com/spinkit/) - loading animations ([CDN link](https://cdnjs.com/libraries/spinkit))
* [CSS Loader](http://www.raphaelfabeni.com.br/css-loader/) - more loading animations ([CDN link](https://cdnjs.com/libraries/css-loader))

Many CSS libraries have grown into more complex suites of layout, component, typography,
navigation, and other solutions.  We often refer to these as "frameworks" to indicate the
expanded scope.  There are many to choose from, including:

* [Pure.css](https://purecss.io/) - tiny CSS framework for responsive layouts, buttons, forms, menus, etc. 
* [PaperCSS](https://www.getpapercss.com/) - playful, hand-drawn style UI kit
* [Bootstrap](http://getbootstrap.com/) - one of the most popular UI grid and component system for mobile and desktop web.  Lots of themed versions of this too, for example [Material UI](http://daemonite.github.io/material/)
* [UIKit](https://getuikit.com/) - lightweight toolkit for building web app front-ends
* [Semantic UI](https://semantic-ui.com/) - UI framework, lots of responsive components ([CDN link](https://cdnjs.com/libraries/semantic-ui))
