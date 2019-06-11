# sha1

[![Travis](http://img.shields.io/travis/chiefbiiko/sha1.svg?style=flat)](http://travis-ci.org/chiefbiiko/sha1) [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/sha1?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/sha1)

SHA1 for [`deno`](https://deno.land).

## Usage

``` ts
import { sha1 } from "https://denopkg.com/chiefbiiko/sha1/mod.ts";

console.log('SHA1 of ""', sha1(""))
```

## API

#### `new SHA1()`

Creates a new SHA1 instance.

#### `SHA1#init(): SHA1`

Initializes a hash instance.

#### `SHA1#update(msg?: string | Uint8Array): SHA1`

Updates a hash with additional data.

#### `SHA1#digest(msg?: string | Uint8Array): Uint8Array`

Finalizes the hash, optionally with additional message data.

#### `sha1(msg: string | Uint8Array): Uint8Array`

Convenience function for hashing singular data.

## License

[MIT](./LICENSE)
