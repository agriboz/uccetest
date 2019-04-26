import moment from 'moment'

const dateFormat = 'YYYY-MM-DD HH:mm:ss'

const startOfToday = () =>
  moment()
    .startOf('day')
    .format(dateFormat)

const currentDay = () => moment().format(dateFormat)

const startOfMonth = () =>
  moment()
    .startOf('month')
    .format(dateFormat)

const endOfMonth = () =>
  moment()
    .endOf('month')
    .format(dateFormat)

const startOfYesterday = () =>
  moment()
    .add(-1, 'day')
    .startOf('day')
    .format(dateFormat)

const endOfYesterday = () =>
  moment()
    .add(-1, 'day')
    .endOf('day')
    .format(dateFormat)

const startOfthisWeek = () =>
  moment()
    .startOf('week')
    .format(dateFormat)

const endOfthisWeek = () =>
  moment()
    .endOf('week')
    .format(dateFormat)

const startOfLastWeek = () =>
  moment()
    .subtract(1, 'weeks')
    .startOf('week')
    .format(dateFormat)

const endOfLastWeek = () =>
  moment()
    .subtract(1, 'weeks')
    .endOf('week')
    .format(dateFormat)

const startOfLastMonth = () =>
  moment()
    .subtract(1, 'month')
    .startOf('month')
    .format(dateFormat)

const endOfLastMonth = () =>
  moment()
    .subtract(1, 'month')
    .endOf('month')
    .format(dateFormat)

const startOfYear = () =>
  moment()
    .startOf('year')
    .format(dateFormat)

const startOfLastYear = () =>
  moment()
    .subtract(1, 'year')
    .startOf('year')
    .format(dateFormat)

const endOfLastYear = () =>
  moment()
    .subtract(1, 'year')
    .endOf('year')
    .format(dateFormat)

export default function(id, startTime, endTime) {
  if (id === 1 && startTime) {
    return startOfToday()
  }

  if (id === 1 && endTime) {
    return currentDay()
  }

  if (id === 2 && startTime) {
    return startOfYesterday()
  }

  if (id === 2 && endTime) {
    return endOfYesterday()
  }

  if (id === 3 && startTime) {
    return startOfthisWeek()
  }

  if (id === 3 && endTime) {
    return endOfthisWeek()
  }

  if (id === 4 && startTime) {
    return startOfLastWeek()
  }

  if (id === 4 && endTime) {
    return endOfLastWeek()
  }

  if (id === 5 && startTime) {
    return startOfMonth()
  }

  if (id === 5 && endTime) {
    return endOfMonth()
  }

  if (id === 6 && startTime) {
    return startOfLastMonth()
  }

  if (id === 6 && endTime) {
    return endOfLastMonth()
  }

  if (id === 7 && startTime) {
    return startOfYear()
  }

  if (id === 7 && endTime) {
    return currentDay()
  }

  if (id === 8 && startTime) {
    return startOfLastYear()
  }

  if (id === 8 && endTime) {
    return endOfLastYear()
  }
}
