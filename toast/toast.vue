<template>
  <transition name="fade">
    <div class="ds-toast" v-if="isShow">
      <div class="toast-content">
        {{message}}
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        message: '',
        duration: 3000,
        isShow: true,
        type: ''
      }
    },
    mounted () {
      this.close()
    },
    methods: {
      close () {
        const that = this
        window.setTimeout(function () {
          that.isShow = false
        }, that.duration)
      },
      hide() {
        this.isShow = false
      }
    }
  }
</script>

<style>
  .ds-toast {
    position: fixed;
    padding: .15rem .2rem;
    color: #fff;
    font-size: .3rem;
    border-radius: .2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
