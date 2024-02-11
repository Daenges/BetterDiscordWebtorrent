/** @jsx BdApi.React.createElement */

interface GenerateTableProps {
    magnetToPathMap: string[][];
  }
  

export default function GenerateTable(props: GenerateTableProps) {
    return (
    <table className="dwt-tw-bg-green-600">
        {props.magnetToPathMap.map((path) => (
        <tr>
            <td>{path[0]}</td>
            <td>{path[1]}</td>
        </tr>
        ))}
    </table>
    );
}
  