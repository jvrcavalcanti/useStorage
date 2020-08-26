```js
const { useStoreage } = require('use-storeage');

storage.set("foo", "bar", 1000); // Milliseconds

storage.get("foo"); // "bar"

setTimeout(() => console.log(storage.get("foo")), 1000); // null
```