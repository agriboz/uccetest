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
            <span class="account-user-name"
              >{{ user.firstname }} {{ user.lastname }}</span
            >
            <span class="account-position">{{ user.teamname }}</span>
          </span>
        </template>
        <b-dropdown-item>
          <n-link :to="'/logout'" class="side-nav-link">
            <i class="mdi mdi-logout mr-1" />
            <span>Sign Out</span>
          </n-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
    <button
      class="button-menu-mobile open-left disable-btn"
      @click.prevent="initMenu"
    >
      <i class="mdi mdi-menu"></i>
    </button>
  </div>
  <!-- end Topbar -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },

  methods: {
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
