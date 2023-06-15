# rehype-line-count

**[rehype][]** plugin to add `data-line-count`s to code tags.

## What is this?

This package is a [unified][] ([rehype][]) plugin to add a data attribute to HTML code tags with the number of lines inside the element. The plugin looks for code elements inside the document, counts the lines, and adds a data-line-count attribute with the number of code lines. 

## When should I use this?

The plugin is useful when you have a large code block on a page and want to collapse it when the block exceeds a certain number of code lines. 

This package is not a complete solution to have collapsable code elements on a page. This plugin only adds the data attribute, which can be used further by a third-party script to provide a collapsable element experience. 

## Install

Install the plugin with the NPM package manager:

```sh
npm install --save rehype-line-count
```

## Use

```javascript
const rehype = require('rehype');
const rehypeLineCount = require('rehype-line-count');

rehype()
  .use(rehypeLineCount)
  .process(/* some html */);
```

Please note that if you use this plugin in conjunction with rehype-prism, or any other plugin that alters the code element, it must go first before any of the other plugins. Otherwise, the result may not be as expected.  

```javascript
const rehype = require('rehype');
const rehypePrism = require('rehype-prism');
const rehypeLineCount = require('rehype-line-count');

rehype()
  .use(rehypeLineCount) // rehype-line-count goes before rehype-prism
  .use(rehypePrism)
  .process(/* some html */);
```

### Sample

### Input

```html
<pre>
  <code>
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    </script>
  </code>
</pre>
```

### Output

```html
<pre>
  <code data-line-count="5">
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    </script>
  </code>
</pre>
```

## License

MIT

[unified]: https://github.com/unifiedjs/unified
[rehype]: https://github.com/rehypejs/rehype
