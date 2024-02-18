/** @jsx BdApi.React.createElement */

// Most important contents for our use case
interface EmojiBox {
    props: {
        children: JSX.Element[]
        className: String
    }
}

export function AppendToEmojiBox(pluginName: string, elementToAppend: JSX.Element) {
    // Get the div containing Emoji and other buttons on the right of the chat bar
    const filter = BdApi.Webpack.Filters.byStrings("ChannelTextAreaButtons");
    const emojiDivObj = BdApi.Webpack.getModule(m => filter(m.type));

    // Apply after div has been loaded
    BdApi.Patcher.after(
        pluginName, 
        emojiDivObj, 
        "type", 
        // Element has list of childs, append new Element to it
        (thisObj, args, emojiBoxElement : EmojiBox) => {
            emojiBoxElement.props.children.push(elementToAppend);
            return emojiBoxElement;
        }
    );
}