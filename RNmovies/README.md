# RNmovies

想了解下react-web，然后拿里面的movies的例子来练习下，现在卡在一个问题，前进不了，问issue，没人理。

```
var fetch = Platform.OS === 'web'? require('ReactJsonp'): require('ReactFetch');
```
web运行，浏览器打开没问题，可是在xcode下run，就报错了。

报`Unable to resolve module ReactJsonp`的错误。