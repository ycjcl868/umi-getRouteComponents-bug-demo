# umi-getRouteComponents-bugs

复现：

```bash
$ npm i
# bug
$ npm run start
# no bug
$ npm run start:noui
```

发现是 [umi-build-dev/src/Service.js#L277](https://github.com/umijs/umi/blob/ba81613eb6312e13975260610b84fb78c7c04b58/packages/umi-build-dev/src/Service.js#L277) `api.getRouteComponents` bug。

而这个 API 只有 Umi UI [commands/block/ui](https://github.com/umijs/umi/blob/ba81613eb6312e13975260610b84fb78c7c04b58/packages/umi-build-dev/src/plugins/commands/block/ui/index.ts#L36) 使用了，所以造成了 bug。
