'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.home.index);
  // {
  //   "username":"jack",
  //   "password":"123456"
  // }
  router.post('/api/user/register', controller.user.register);
  // {
  //   "username":"jack",
  //   "password":"123456"
  // }
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo); // 获取用户信息
  // {
  //   "signature": "爷就是jack"
  // }
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo); // 修改用户个性签名
  // file: picture
  router.post('/api/upload', controller.upload.upload);
  // {
  //   "old_pass": "1234567",
  //   "new_pass": "123456",
  //   "new_pass2": "123456"
  // }
  router.post('/api/user/modify_pass', _jwt, controller.user.modifyPass); // 修改用户密码
  router.get('/api/user/test', _jwt, controller.user.test);
  // {
  //   "amount": 20.00,
  //   "type_id": 1,
  //   "type_name": "餐饮",
  //   "date": "1621581570000",
  //   "pay_type": 1,
  //   "remark": "备注信息"
  // }
  router.post('/api/bill/add', _jwt, controller.bill.add); // 添加账单
  // http://localhost:7001/api/bill/list?date=2021-05&page=1
  router.get('/api/bill/list', _jwt, controller.bill.list); // 获取账单列表
  // http://localhost:7001/api/bill/detail?id=1
  router.get('/api/bill/detail', _jwt, controller.bill.detail); // 获取详情
  // {
  //   "amount": 100.00,
  //   "type_id": 1,
  //   "type_name": "餐饮",
  //   "date": 1621581570000,
  //   "pay_type": 1,
  //   "remark": "不想上班啦",
  //   "id": 1
  // }
  router.post('/api/bill/update', _jwt, controller.bill.update); // 账单更新
  // {
  //   "id": 1
  // }
  router.post('/api/bill/delete', _jwt, controller.bill.delete); // 删除账单
  // http://localhost:7001/api/bill/data?date=2021-05
  router.get('/api/bill/data', _jwt, controller.bill.data); // 获取数据
  router.get('/api/type/list', _jwt, controller.type.list); // 获取消费类型列表
};
