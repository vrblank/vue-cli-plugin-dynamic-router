module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    // api.extendPackage({
    //     dependencies: {
    //         'element-ui': '^2.4.5'
    //     }
    // })

    api.injectImports("src/main.js", `import "./dynamicRouter"`)

    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render({
        './src/dynamicRouter.js': './template/dynamicRouter.js'
    })
  
    if (options.foo) {
      // 有条件地生成文件
    }
  }