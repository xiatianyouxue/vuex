import Cookies from 'js-cookie'
export function getUserInfo () {
  return Cookies.get('userinfo')
}
export function setUserinfo (userinfo) {
  return Cookies.set('userinfo', userinfo)
}
