<template>
  <div class="container-fluid">
    <!-- start page title -->
    <page-title title="" />
    <!-- end page title -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <p>Home Page</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
  layout: 'authenticated',
  components: {
    PageTitle
  }
}
</script>
