import Mock from "mockjs";
import list from "./example";

// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
// 控制台network里看不到请求 结果请console出来看
Mock.mock("/listData", "post", Mock.mock(list.listData));
Mock.mock("/strings", "post", Mock.mock(list.strings));
