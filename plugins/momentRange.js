import { extendMoment } from 'moment-range'

// const moment = extendMoment(Moment)

export default ({ app }) => {
  extendMoment(app.$moment)
}
