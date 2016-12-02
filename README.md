# [mount-koa2-routers](https://github.com/lk125454242/mount-koa2-routers)

[![NPM version](https://img.shields.io/badge/npm-v5.4.0-blue.svg?style=flat)](https://npmjs.org/package/koa-router) 
[![Build Status](https://img.shields.io/badge/gitter-join%20chat-1dce73.svg?style=flat)](https://github.com/lk125454242/mount-koa2-routers/issues)

auto mount koajs routes（base on koa-router） with routes_folder_path
自动加载koa2路由文件。
---

> 设计初衷由于使用[mount-koa-routes](https://github.com/moajs/mount-koa-routes/blob/master/README.md)在koa2中调用[koa-router](https://github.com/alexmingoia/koa-router)会出现回调顺序反向等问题书写的。

## Install

    npm install --save mount-koa2-routes

## Usages

```
var app = require('koa')();

require('mount-koa2-routes')(app, process.cwd() + '/routes');

app.use(router.routes(), router.allowedMethods());

app.listen(3000);
```
## [Bugs](https://github.com/lk125454242/mount-koa2-routers/issues)