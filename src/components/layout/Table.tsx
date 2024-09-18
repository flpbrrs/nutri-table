import { IconFridgeOff } from "@tabler/icons-react"
import type { ReactNode } from "react"

interface TableProps {
    children: ReactNode
}

interface ItemProps {
    data: string,
    scope: 'col' | 'row'
}

export function Table({ children }: TableProps) {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg my-4 border-2 border-blp-400">
            <table className="w-full text-sm text-left text-gray-400">
                {children}
            </table>
        </div>
    )
}

export function TableHeader({ children }: TableProps) {
    return (
        <thead className="text-xs uppercase text-gray-200">
            {children}
        </thead>
    )
}

export function TableBody({ children = null }: Partial<TableProps>) {
    return (
        <tbody className="text-right">
            {children ? children : <TableEmpty />}
        </tbody>
    )
}

export function TableRow({ children }: TableProps) {
    return (
        <tr>
            {children}
        </tr>
    )
}

export function TableItem({ data, scope }: ItemProps) {
    if (scope === 'col') {
        return (
            <th scope={scope} className="px-4 py-3 w-36 odd:bg-blp-400 first:w-auto first:text-left">
                {data}
            </th>
        )
    }
    return (
        <td className="p-4 odd:bg-blp-400 first:w-auto first:text-left">
            {data}
        </td>
    )
}

export function TableEmpty() {
    return (
        <tr>
            <td colSpan={5}>
                <div className="flex flex-col justify-center items-center py-12 text-blp-400">
                    <IconFridgeOff className="size-36" stroke={1} />
                    <p className="text-xl font-bold leading-none">
                        Vamos lá! Prepare alguma coisa...
                    </p>
                </div>
            </td>
        </tr>
    )
}