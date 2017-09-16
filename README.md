# Stylesheet

A fast and simple way to handle injecting styles on the server or client.

This is a shameless copy of threepointone's stylesheet api in Glamor which is used in other packages as well.

Decided to re-write it using some es6 features (class instead of function).

## Use:

```Javascript
import Stylesheet from 'stylesheet'

const sheet = new Stylesheet();

sheet.inject();

sheet.insert(`[css rule here]`);

sheet.flush();
```