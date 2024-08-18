# 0. Using official Deno documentation.

https://docs.deno.com/runtime/tutorials/how_to_with_npm/express/

# 1. crate main.ts

# 1.1. types

// @deno-types="npm:@types/express@4.17.15" - TS directive specific for Deno. Telling Deno explic. Where to fund the Typescript type definitions fo a module...
When working with deno, you my use JS or non-TS modules. To keep benefits of types, you let the Deno know where these types are.
@types/express is the DefinitelyTyped package that provides TypeScript types for the Express library.

# 1.2. DEV fast reloading

I try DENON, will gladly use something MORE mainstream. If there is such a thing.
But to run denon I need deno ^1.6.0.
Deno says current version is 1.45.5.
Dont know why.
NB NB NB !!! add Denon to path!!!! -> %USERPROFILE%\.deno\bin
"Deno requests read access to <CWD>." - is this because of Deno security settings???

---

Further reading

1. Everytime I use Deno.js it is harder to go back to Node.
   https://www.reddit.com/r/node/comments/xumtg9/everytime_i_use_denojs_it_is_harder_to_go_back_to/
