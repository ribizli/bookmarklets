# bookmarklets



## mount vertical_line.js

```
function callback() {
  createVerticalLine({ dir: 'vertical' });
  createVerticalLine({ dir: 'horizontal' });
}

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/ribizli/bookmarklets@main/vertical_line.js";
script.onload = callback;

document.body.appendChild(script);
```