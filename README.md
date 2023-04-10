#### npm install

#### npm run pm2
> 自动执行pm2配置文件


> npm i pm2 -g

> 启动 node 服务：pm2 start index.js

> 查看所有服务表格：pm2 list

> 停止某个服务：pm2 stop id

> 重启某个服务：pm2 restart id

> 去除某个服务：pm2 delete id

> 持续监听服务端数据变化(类似 nodemon)：pm2 start index --watch

> 负载均衡-分配多少线程提供服务：pm2 start index --watch i max/线程数
查看电脑线程数量：const os = require('os');   os.cpus()

> 自定义服务名：pm2 start index.js --watch -n name

> 打开 pm2 监视器：pm2 monit
