import {DefaultTrackerList} from './trackerlist/trackers'

export interface SettingsTemplateType {
    trackerList: string[],
    torrentToFile: {}
}

export const SettingsTemplate : SettingsTemplateType = {
    trackerList: DefaultTrackerList,
    torrentToFile: {}
}