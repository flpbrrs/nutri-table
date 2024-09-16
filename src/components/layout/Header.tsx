interface HeaderProps {
    title: string
    subtitle?: string
    larger?: boolean
}

export default function Header({ title, subtitle, larger = false }: HeaderProps) {
    return (
        <div>
            <p className={`font-extrabold ${larger ? 'text-3xl' : 'text-xl'}`}>
                {title}
            </p>
            <small className={`text-slate-400 font-bold ${larger ? 'text-base' : 'text-xs'}`}>
                {subtitle}
            </small>
        </div>
    )
}