# RNmovies

**20160327**

xcode的模拟器终于可以运行成功了，react-web的例子本身有问题，既然`ReactJsonp`和`ReactFetch`，ios是不支持的，就分开来写嘛。现在只要把`SearchScreen`分成web和ios，把fecth的定义在ios中去掉就可以了。

但又遇到另外一个问题，`ReactDissKeyboard`又找不到，嘛，先暂时把这个注释掉，总算可以跑起来了。

---

想了解下react-web，然后拿里面的movies的例子来练习下，现在卡在一个问题，前进不了，问issue，没人理。

```
var fetch = Platform.OS === 'web'? require('ReactJsonp'): require('ReactFetch');
```
web运行，浏览器打开没问题，可是在xcode下run，就报错了。

报`Unable to resolve module ReactJsonp`的错误。