# 为什么要用 pnpm?

#### 为什么要用 pnpm?

pnpm 的优点：

- 节省磁盘空间
- 速度快

使用 pnpm，他的方式是 100 个项目用到一个依赖，他会将不同项目中的版本之间的**差异**存储在本地类似中央仓库的样子，这样一个依赖包假设有 50 个文件，两个同依赖但不同版本不会全部修改，只会更改如 1 个文件的形式，比较完美的解决 npm 和 pnpm 的两个缺点

- 安全性

npm 安装包的安全性问题，如果 A 依赖 B， B 依赖 C，那么 A 当中是可以直接使用 C 的，但问题是 A 当中并没有声明 C 这个依赖，因此会出现这种非法访问的情况。 pnpm 采用的方式是依赖分割 npm 安装一个指定依赖包 express 的 node_module 目录

**通过.pnpm 做目录结构依赖树**

所依赖的是不会被展示在根目录的，通过.pnpm 里面的关系树软链到真实的代码目录

#### npm 扁平化、pnpm 不扁平化 ?不懂

pnpm 在安装时，将每一个包，和它们的依赖放到同一个文件夹中。将依赖提升至和包同一层级。同时，形成与依赖树结构一致的软链接，标注每一个依赖的位置。

#### 清除幽灵依赖
