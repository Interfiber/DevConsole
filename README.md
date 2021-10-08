# DevConsole
A very basic js console for when you're google admin blocked it.

## NOTE
This program is a VERY basic js console for you're google admin(school) blocks it. Don't use it as a normal console

## How to inject the console into a page
To inject the code into a webpage goto any page, then type ```javascript:``` into the URL bar, and paste the following code in after it:
```javascript
const script = document.createElement("script"); script.src = "https://raw.githack.com/Interfiber/DevConsole/main/console.js"; document.body.appendChild(script);
```
If everything works well you should see a box somewhere on the webpage titled ```Dev Console```


## How this works
Even if you're google admin disabled the dev console this DOES NOT disable the use of ```javascript``` URLS, as many websites may use this.
So the inject script uses this to its advantage, by injecting itself into the webpage using the javascript url

## TODO
    - Add Inspect Element like features
    - Make it look better
    - Allow tracebacks
   
