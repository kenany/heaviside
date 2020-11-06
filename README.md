# heaviside

The Heaviside step function.

## Example

``` javascript
var heaviside = require('heaviside');

heaviside(1);
// => 1

heaviside(42);
// => 1

heaviside(-1);
// => 0

heaviside(-26);
// => 0

heaviside(0);
// => 1
```

## Installation

``` bash
$ npm install heaviside
```

## API

``` javascript
var heaviside = require('heaviside');
```

### `heaviside(n)`

Returns `1` if `n` is a positive _Number_. Returns `0` if `n` is a negative
_Number_. If `n === 0`, then `1` is returned. If you need to be able to
configure `heaviside(0)` to return some other value like `0.5` for some reason,
just send a pull request.
