/** @jsx BdApi.React.createElement */

import { AddToEmojiBox } from "./chatBar";

export default class QuickSendButton {
    sendButton: JSX.Element;

    constructor() {
        this.sendButton = <button onClick={() => BdApi.UI.showConfirmationModal("Ist Mayonnaise auch ein Instrument?", <div>...</div>, {
            confirmText: "Ja, aber nur Dienstags.",
            cancelText: "Nein."
        })} className="hover:dwt-tw-text-xl dwt-tw-text-lg dwt-tw-duration-100 dwt-tw-bg-transparent">🧲</button>;
        AddToEmojiBox("DiscordWebTorrent", this.sendButton); 
    }

    initialize() {

    }

    unload() {

    }
}