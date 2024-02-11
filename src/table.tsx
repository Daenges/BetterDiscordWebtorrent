import * as React from "react";

interface GenerateTableProps {
    magnetToPathMap: string[][];
  }
  

export default function GenerateTable(props: GenerateTableProps) {
    return (
    <table>
        {props.magnetToPathMap.map((path) => (
        <tr>
            <td>{path[0]}</td>
            <td>{path[1]}</td>
        </tr>
        ))}
    </table>
    );
}
  