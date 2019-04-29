<template>
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <nuxt-link :to="'/'">Home</nuxt-link>
            </li>
            <li class="breadcrumb-item active">
              <a>{{ title }}</a>
            </li>
          </ol>
        </div>
        <h4 class="page-title">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>
