/** @jsx BdApi.React.createElement */

interface GenerateTableProps {
    entries: string[][];
    tabeName: string;
}

interface FileEntryProps {
    path: string[];
}

function FileEntry(props: FileEntryProps) {
    return <div className="dwt-tw-mt-5 dwt-tw-mr-2 dwt-tw-bg-neutral-800 dwt-tw-p-2 dwt-tw-rounded-md dwt-tw-grid dwt-tw-grid-flow-col dwt-tw-columns-5 dwt-tw-gap-2">
        <div className="dwt-tw-grid dwt-tw-grid-flow-col-dense dwt-tw-gap-2 dwt-tw-col-span-4">
            {props.path.map((path) => <input className="dwt-tw-bg-neutral-900 dwt-tw-rounded-sm dwt-tw-text-gray-400 dwt-tw-p-1" value={path} disabled/>)}
        </div>
        <button className="dwt-tw-bg-rose-500 hover:dwt-tw-bg-rose-600 dwt-tw-rounded-sm dwt-tw-tw-text-center dwt-tw-col-span-1 dwt-tw-text-white">Remove</button>
    </div>
}

export default function GenerateTable(props: GenerateTableProps) {
    return (
        <div id={props.tabeName} className="dwt-tw-m-5">
            <span className="dwt-tw-font-bold dwt-tw-text-white dwt-tw-mr-2">{props.tabeName}</span>
            <button className="dwt-tw-font-bold dwt-tw-text-white dwt-tw-bg-green-500 hover:dwt-tw-bg-green-600 dwt-tw-rounded-sm">ADD</button>
            <div id="itemList" className="dwt-tw-overflow-y-auto dwt-tw-max-h-64 dwt-tw-rounded-md dwt-tw-mt-2">
                {props.entries.map((path) =>
                    <FileEntry path={path} />
                )}
            </div>
        </div>
    );
}
  