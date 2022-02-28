import { apiHelper } from '../utils/helper.js'

export default {
  // 取得當下帳戶資料
  getCurrent() {
    return apiHelper.get('/users/account')
  },

  getProfile({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },

  // 修改帳戶資料
  editAccount({ account, name, email, password }) {
    return apiHelper.put('/users/account/setting', {
      account,
      name,
      password,
      email
    })
  }
}
