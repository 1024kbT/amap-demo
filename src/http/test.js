/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-23 15:42:37
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-23 17:32:30
 */

let obj1 = {
  name: 1233,
  sortvoger: {
    status: 1
  }
}
let obj2 = {
  name: 1233,
  sortvoger: {
    status: null
  }
}
if (obj2?.sortvoger?.status == 1) {
  console.log(123123);
}