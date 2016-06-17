# Wistia External API Wapper

Wistia has a nice new uploader, but if you're trying to integrate it
into a project using modules they don't support that.

The handle needs to be created once.

```js
import wistiaPromise from 'wistia/external';

wistiaPromise().then(Wistia => {
    const uploader = new Wistia.Uploader({
      ...
    })
})
```

After its been created once, you can access the handle directly

```js
import { Wistia } from 'wistia/external';

const uploader = new Wistia.Upliader({ ...  });
```
