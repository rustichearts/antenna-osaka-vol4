# antenna-osaka-vol4

## create react app

Ref. https://github.com/facebook/create-react-app

```
npx create-react-app antenna-osaka-vol4 --scripts-version=react-scripts-ts
```

## react x p5.js x typescript

* p5js

http://p5js.org/get-started/

* samples

https://forum.processing.org/two/discussion/26322/using-react-with-p5-js-es6-support

* code
 
https://github.com/atorov/fractal-tree-simulator

https://github.com/atorov/react-p5js

- npmとwebpackで作るいい感じのp5.js開発環境 2016年5月の場合。
https://shigekitakeguchi.github.io/2016/06/01/1.html

* instance mode

https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace

- p5.js を instance mode で使う
https://qiita.com/turusuke/items/c92a13602523d6378cc0

```
var s = function( p ) {

  var x = 100; 
  var y = 100;

  p.setup = function() {
    p.createCanvas(700, 410);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};

var myp5 = new p5(s);
```

## types

```
npm install -S p5 @types/p5
```
