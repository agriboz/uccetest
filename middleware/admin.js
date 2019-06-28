export default function({ store, error }) {
  if (store.state.user.agentId !== -1) {
    error({
      message: 'You are not allowed to see this page',
      statusCode: 401
    })
  }
}
