# Angular Compiler CLI 12.2.7 Bug

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

---

## Description
This project contains an example to reproduce the type-checker bug, introduced in v12.2.7 with [PR 43511](https://github.com/angular/angular/pull/43511).

Overall:
- **Lib2** contains generic base `Lib2Component` class with type parameters
- **Lib1** contains implementation `Lib1Component` which extends on `Lib2Component`
- **LibN** imports `Lib1Component` and uses it in `LibNComponent` template
- Build of **LibN** fails with `Unable to write a reference to ValueOf` error

---

## Running
Run `npm run build` to build libN project.

The build will fail with message of `Unable to write a reference to ValueOf...`
