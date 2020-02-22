### 主要内容
此工程完成的是实现本地csv文件加载入highcharts,实现图形绘制，主要的功能文件是Mystock.js和reactcsv.js。Mystock.js实现的是highcharts官网给的股票折线图的react实现。reactcsv.js是在Mstock.js的基础上实现本地csv数据文件的图形绘制。

### Mystock.js
使用了d3包来读取官网给的平安保险的json数据，highcharts默认绘制的是json数据，所以网API里送的数据也必须是json格式的，要实现最简单的时间和值的绘制，highcharts的参数基本不需要改变，导入数据即可实现图形绘制。
官网给出了highstock的react实现教程，使用下面两句导入react所需要的包：
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { format, formatSingle } from 'highcharts/highstock';
导入包，加载完数据，使用<HighchartsReact/>组件，添加相应的组件参数，即可实现自定义绘制highstock图形，详细的自定义选项请查看：https://www.highcharts.com.cn/docs/highcharts-react

### reactcsv.js
在Mystock.js的基础上，关键问题是csv文件转换为json格式，在github上面找到了一个react的example，上面就有csv转json的插件，导入需要：
import CSVReader from "react-csv-reader";详细地址为：https://reactjsexample.com/react-component-that-handles-csv-file-input/
该插件有一问题是转换后的数据最后多出一项，该项没有值，会影响图形绘制，所以需要pop去掉。

csv文件时间需要升序排序

设置了一个全局变量window.Data来保存转换之后的数据以及重新渲染，设置了一个按钮来点击之后setstate重新渲染，应该有别的更好的方法来重新渲染，请求赐教。而且这个按钮要按两下之后才会绘制，不知道为啥....rangeSelector控制自定义Zoom格式，highcharts需要毫秒级的时间戳数据。



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify