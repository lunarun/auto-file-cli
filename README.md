### Introduce
auto-file-cli 意在实现自动编译自定义组件模板脚手架，生成对应的模板目录结构

【注】**组件模板包的入口文件需命名为 index.js**

### Usage

#### 1.使用包管理工具安装auto-file-cli
```
npm install auto-file-cli -g

// 使用yarn
yarn global add auto-file-cli
```
安装后输入 a-file --version, 显示版本号则安装成功

#### 2.添加组件目录模板到列表

例如：目前例子模板是 community_promotion 项目 src/pages目录下组件生成目录模板: **auto-file-h5**
```
// 输入
a-file
```
在选项中选择 ==Add a template generator== 添加到组件列表list中

输入template name：**auto-file-h5** (需要和组件模板包名一样)

输入template description: 组件模板的描述 (需要输入至少一个字~)

输入template npm: **auto-file-h5**

回车即添加到组件列表中，再次输入 a-file 选择 **List all templates** 可以查看到安装的组件模板列表

#### 3.下载指定模板并初始化模板目录

输入
```
a-init auto-file-h5
```
**下载包并进行初始化，自动执行模板包的入口文件index.js，进行模板初始化**

接着上面的例子，然后输入要生成的pages的名字 例如 luna-page1（输入pages名字这步是封装在auto-file-h5组件模板里的自定义指令执行的),在项目目录里就生成对应的luna-page1目录结构了


#### 4.继续生成新的当前模板目录

输入 a-gene auto-file-h5 后，重复步骤3的过程，输入新的名字，例如luna-page2, 生成新的luna-page2目录


### 5.可以进行删除模板
输入指令 a-file 选择删除模板，输入模板的包名 (auto-file-h5), 即可删除。










