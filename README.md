# Instascan UMD
## A pre-compiled, minified version of Instascan!

This port was made to be compatible with module bundlers like **Webpack**

### Installing:
With npm:
```npm install instascan-umd --save```

With yarn:
```yarn add instascan```

## Using:
Just use as you do with istascan:

With ES imports:  
```js
import Instascan, {Scanner, Cameras} from "instascan-umd";
```

With CommonsJS:  
```js
const {Scanner, Cameras} = require("instascan-umd");
```

Or directly in the browser:
```js
window.instascan.Scanner;
window.instascan.Cameras;
```

# License
This port is under the [MIT license](https://opensource.org/licenses/MIT)