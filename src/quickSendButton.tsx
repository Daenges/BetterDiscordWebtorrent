/** @jsx BdApi.React.createElement */

export default class QuickSendButton {
    emojiButtonDiv: HTMLDivElement;
    sendButton: JSX.Element;
    parentDiv: HTMLDivElement

    constructor() {
        this.emojiButtonDiv = document.querySelector("." + BdApi.Webpack.getByKeys("expressionPickerPositionLayer").buttons);
    }

    initialize() {
        this.parentDiv = document.createElement('div');
        this.emojiButtonDiv.appendChild(this.parentDiv);
        this.sendButton = <div className="dwt-tw-bg-green-500">HELO</div>;
        BdApi.ReactDOM.render(this.sendButton, this.parentDiv);
        
        BdApi.DOM.onRemoved(this.parentDiv, () => {
            this.emojiButtonDiv.appendChild(this.parentDiv);
        });
    }

    unload() {
        BdApi.ReactDOM.unmountComponentAtNode(this.parentDiv)
        this.emojiButtonDiv.removeChild(this.parentDiv);
    }
}