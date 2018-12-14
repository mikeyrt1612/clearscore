import { getJSON } from '../../app/utils/fetch'
import config from '../../config/environment'

const { api: { host }} = config

export const getCreditReportInfo = () => getJSON(`${host}/creditReportInfo.json`)
