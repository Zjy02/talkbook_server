CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(20) NOT NULL UNIQUE,
	password VARCHAR(20) NOT NULL,
    -- 个性签名
	signature VARCHAR(1000),
    -- 头像
	avatar VARCHAR(2000),
    -- 创建时间
	createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bill (
	id INT PRIMARY KEY AUTO_INCREMENT,
	-- 账单类型
	pay_type INT NOT NULL,
	-- 账单价格
	amount VARCHAR(100) NOT NULL,
	date VARCHAR(100) NOT NULL,
	-- 账单标签id
	type_id INT NOT NULL,
	-- 账单标签名字
	type_name VARCHAR(100) NOT NULL,
	user_id INT NOT NULL,
	-- 账单备注
	remark VARCHAR(100) NOT NULL
);

