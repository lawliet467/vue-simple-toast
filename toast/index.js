import Vue from 'vue'
import Toast from './toast.vue'
var component = null
Toast.show = function(options) {
  if (options === undefined || options === null) {
    return
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  options.isShow = true
  var toast = Vue.extend(Toast)

  component = new toast({
    data: options
  }).$mount()
  // // 不重复弹出
  if (document.querySelectorAll('.ds-toast').length < 1) {
    document.querySelector('body').appendChild(component.$el)
  }
}

Toast.hide = function() {
  // 销毁
  if (component) {
    component.hide()
  }
}

Vue.prototype.$toast = Toast

export default Toast
