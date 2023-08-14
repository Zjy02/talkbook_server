// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportBill = require('../../../app/controller/bill');
import ExportHome = require('../../../app/controller/home');
import ExportType = require('../../../app/controller/type');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    bill: ExportBill;
    home: ExportHome;
    type: ExportType;
    upload: ExportUpload;
    user: ExportUser;
  }
}
