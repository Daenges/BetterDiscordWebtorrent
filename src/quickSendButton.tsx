/** @jsx BdApi.React.createElement */

import { AddToEmojiBox } from "./chatBar";

export default class QuickSendButton {
    sendButton: JSX.Element;

    constructor() {
        this.sendButton = <div className="dwt-tw-bg-blue-500 ">HELO</div>;
        AddToEmojiBox("DiscordWebTorrent", this.sendButton); 
    }

    initialize() {

    }

    unload() {

    }
}