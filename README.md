# Angular Compiler CLI 12.2.7 Bug

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

---

## Description
This project contains an example to reproduce the type-checker bug, introduced in v12.2.7 with [PR 43511](https://github.com/angular/angular/pull/43511).

Overall:
- **Lib2** contains `Lib2Component` class with type parameters
- **Lib1** contains `Lib1Component` which uses `Lib2Component` in its template
- Build of **Lib1** fails with `Unable to write a reference to ValueOf` error

---

## Running
Run `npm run demo` to build the project.

The build will fail with message of `Unable to write a reference to ValueOf...` during lib1 compilation.
