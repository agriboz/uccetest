import momentDurationFormatSetup from 'moment-duration-format'

export default ({ app }) => {
  momentDurationFormatSetup(app.$moment)
}
