import { DefaultTrackerList } from "./trackers";

export function GetRandomTrackers(amount: number) : Array<String> {
    var returnList : Array<String> = []
    var arrayCounter: number = Math.floor(Math.random() * DefaultTrackerList.length)
    
    for(var i = 0; i < amount; i++) {
        returnList.push(DefaultTrackerList[(arrayCounter + i) % DefaultTrackerList.length]);
    }

    return returnList;
}