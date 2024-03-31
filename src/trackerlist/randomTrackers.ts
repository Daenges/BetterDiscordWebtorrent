import { DefaultTrackerList } from "./trackers";

export function GetRandomTrackers(amount: number) {
    var returnArr: Array<String> = Array(amount)
    var arrayCounter: number = Math.floor(Math.random() * DefaultTrackerList.length)
    
    for(var i = 0; i < amount; i++) {
        returnArr[i] = DefaultTrackerList[arrayCounter];
        arrayCounter = (arrayCounter++) % DefaultTrackerList.length;
    }

    return returnArr;
}