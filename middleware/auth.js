export default function({ store, redirect, route }) {
  if (!store.state.user.token) {
    store.state.redirect = route
    return redirect('/')
  }
}
