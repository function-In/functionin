// 作者
const Author = "functionIn";
// 联系邮箱
const Email = "functionIn@foxmail.com";
// 联系QQ
const QQ = 1440723735;
// 联系WeChat
const WeChat = "function-in";
// 联系手机
const Phone = 13838383388;

// QQ头像接口
const QQHeaderImageApi = "https://q.qlogo.cn/headimg_dl?dst_uin=%UID%&spec=640&img_type=jpg"
// QQ头像获取
const getQQImage = () => QQHeaderImageApi.replace("%UID%", QQ);

// 定义暴露接口
export const Conf = {
    Author, Email, QQ, WeChat, Phone, getQQImage
}