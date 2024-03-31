/** @jsx BdApi.React.createElement */

// Most important contents for our use case
interface EmojiBox {
    props: {
        children: JSX.Element[]
        className: String
    }
}

export function AddToEmojiBox(pluginName: string, elementToAdd: JSX.Element) {
    // Get the div containing Emoji and other buttons on the right of the chat bar
    const filter = BdApi.Webpack.Filters.byStrings(".default.isSubmitButtonEnabled", ".default.getActiveCommand");
    const emojiDivObj = BdApi.Webpack.getModule(m => filter(m.type));

    // Apply after div has been loaded
    BdApi.Patcher.after(
        pluginName, 
        emojiDivObj, 
        "type", 
        // Element has list of childs, prepend new Element to it
        (thisObj, args, emojiBoxElement : EmojiBox) => {
            emojiBoxElement.props.children.unshift(elementToAdd);
            return emojiBoxElement;
        }
    );
}