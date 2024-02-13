/** @jsx BdApi.React.createElement */

interface GenerateTableProps {
    magnetToPathMap: string[][];
}

interface FileEntryProps {
    path: string[];
}

function FileEntry(props: FileEntryProps) {
    return <div className="dwt-tw-mt-5 dwt-tw-grid dwt-tw-grid-cols-5 dwt-tw-grid-flow-col dwt-tw-gap-2">
        {props.path.map((path) => <div className="dwt-tw-bg-neutral-900 dwt-tw-rounded-sm dwt-tw-col-span-2 dwt-tw-text-gray-400">{path}</div>)}
        <button className="dwt-tw-bg-blue-500 hover:dwt-tw-bg-blue-600 dwt-tw-rounded-sm dwt-tw-tw-text-center dwt-tw-text-white">Edit</button>
    </div>
}

export default function GenerateTable(props: GenerateTableProps) {
    return (
        <div>
            <span className="dwt-tw-font-bold dwt-tw-text-white">FILES</span>
            <div id="itemList">
                {props.magnetToPathMap.map((path) =>
                    <FileEntry path={path} />
                )}
            </div>
      </div>
    );
}
  