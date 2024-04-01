import {DefaultTrackerList} from './trackerlist/trackers'

export interface SettingsTemplateType {
    trackerList: string[],
    torrentToFile: {}
    clientSettings: {}
    torrentSettings: {}
}

export const SettingsTemplate : SettingsTemplateType = {
    trackerList: DefaultTrackerList,
    torrentToFile: {},
    clientSettings:{
        maxConns: 55,
        tracker: {
          announce: [],
          rtcConfig: {
            iceServers: [
              {
                urls: ['stun:stun.l.google.com:19305', 'stun:stun1.l.google.com:19305']
              }
            ]
          }
        },
        dht: true,
        lsd: true,
        webSeeds: true,
        utp: true,
        downloadLimit: -1,
        uploadLimit: -1
    },
    torrentSettings: {
        
    }
}