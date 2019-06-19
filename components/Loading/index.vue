<template>
  <div v-if="loading" class="loading-page">
    <i
      class="mdi mdi-close cancel-request"
      title="Cancel Requests"
      @click="cancelRequest"
    ></i>
    <div class="spinner">
      <div class="double-bounce1" />
      <div class="double-bounce2" />
    </div>
  </div>
</template>

<script>
import { cancelTokenSources } from '@/plugins/axios'

export default {
  props: {
    loading: {
      required: true,
      type: Boolean
    }
  },

  methods: {
    cancelRequest() {
      for (const [cancel] of cancelTokenSources) {
        cancel('Requests Cancelled')
      }
    }
  }
}
</script>

<style scoped>
.cancel-request {
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  right: 20px;
}
.loading-page {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  z-index: 999999999;
  position: fixed;
}
.loading-wrapper {
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
}
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #2b3643;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}
@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
