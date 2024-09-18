import type { ReactNode } from "react"

interface HeaderProps {
    title: string
    subtitle?: string
    larger?: boolean
    renderActions?: () => ReactNode
}

export default function Header({ title, subtitle, larger = false, renderActions = () => null }: HeaderProps) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className={`font-extrabold ${larger ? 'text-3xl' : 'text-xl'}`}>
                    {title}
                </p>
                <small className={`text-slate-400 font-bold ${larger ? 'text-base' : 'text-xs'}`}>
                    {subtitle}
                </small>
            </div>
            {renderActions()}
        </div>
    )
}