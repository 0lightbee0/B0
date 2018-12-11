# WebBone
快速建立网站结构的起点

## config
在`config/server.yaml`中更改服务程序的IP和Port
在`config/resType.yaml`中指定后缀名对应的资源类型

## 静态资源的存放位置
资源存在对应分类`res/*/`目录中

比如`.js`默认对应`Actions`，则应该将所有的`.js`静态文件放入`res/Actions/`下，使用`<scirpt src="test.js"></scirpt>`来引用。
如果真实的位置是`res/Actions/a/b/c.js`，使用`<scirpt src="a/b/c.js"></scirpt>`来引用。

密钥存放在`keys/`下

## 注意
使用`.view`而不是`.html`来引用页面