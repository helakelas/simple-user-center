const config = {
    connectMicroservice: 3001, // 微服务端口
    port: 8881,
    tokenSetTimeOut: 7200,
};
export const mysqlConfig = {
    host: '47.106.104.22',
    userName: 'root',
    password: 'root',
};
export const redisConfig = {
    name: 'user_token',
    url: 'redis://47.106.104.22:6379',
    // url: 'redis://127.0.0.1:6379',
};

export const emailConfig = {
    authPass: 'mlemxnogjqcfecba', // qq邮箱授权码
    fromUser: '"Marvin" <1970305447@qq.com>',
    user: '1970305447@qq.com',
};

export default config;