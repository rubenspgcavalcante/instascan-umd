# Instascan UMD
## A pre-compiled, minified version of Instascan!

This port was made to be compatible with module bundlers like **Webpack**

### Installing:
With npm:
```npm install instascan-umd --save```

With yarn:
```yarn add instascan-umd```

## Using:
Just use as you do with istascan:

With ES imports:  
```js
import Instascan, {Scanner, Camera} from "instascan-umd";
```

With CommonsJS:  
```js
const {Scanner, Camera} = require("instascan-umd");
```

Or directly in the browser:
```js
window.instascan.Scanner;
window.instascan.Camera;
```

# License
This port is under the [MIT license](https://opensource.org/licenses/MIT)
