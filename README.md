# math.gs

> general 'low level' math functions

This is a math library which is built for [goboscript](https://github.com/aspizu/goboscript).
 It is based on [the stdlib implementation](https://github.com/goboscript/std/), but it is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- aspizu for original version in stdlib

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/math`

add math to your `inflator.toml` config:
```toml
[dependencies]
# ...
math = "https://github.com/FAReTek1/math"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/math`
2. `cd math`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
