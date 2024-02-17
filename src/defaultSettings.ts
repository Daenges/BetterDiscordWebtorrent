import {defaultTrackerList} from './trackerlist/trackers'

export interface SettingsTemplateType {
    trackerList: string[],
    torrentToFile: {}
}

export const SettingsTemplate : SettingsTemplateType = {
    trackerList: defaultTrackerList,
    torrentToFile: {}
}