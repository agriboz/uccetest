<template>
  <!-- Topbar Start -->
  <div class="navbar-custom">
    <ul class="list-unstyled topbar-right-menu float-right mb-0">
      <b-nav-item-dropdown
        no-caret
        extra-toggle-classes="nav-user"
        class="notification-list"
      >
        <template slot="button-content">
          <span class="account-user-avatar">
            <img
              src="../../assets/images/avatar.svg"
              alt="user-image"
              class="rounded-circle"
            />
          </span>
          <span>
            <span class="account-user-name">Domddinic Keller</span>
            <span class="account-position">Founder</span>
          </span>
        </template>
        <b-dropdown-item>one</b-dropdown-item>
        <b-dropdown-item>two</b-dropdown-item>
        <b-dropdown-item>
          <i class="mdi mdi-logout mr-1"></i>
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
    <button
      class="button-menu-mobile open-left disable-btn"
      @click.prevent="initMenu"
    >
      <i class="mdi mdi-menu"></i>
    </button>
    <div class="app-search">
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." />
          <span class="mdi mdi-magnify"></span>
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- end Topbar -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      toggleDarkTheme: 'toggleDarkTheme'
    }),
    initMenu() {
      const body = document.getElementsByTagName('body')[0]
      const width = document.documentElement.clientWidth
      body.classList.toggle('sidebar-enable')

      if (width >= 768) {
        body.classList.toggle('enlarged')
      } else {
        body.classList.remove('enlarged')
      }
    }
  }
}
</script>
