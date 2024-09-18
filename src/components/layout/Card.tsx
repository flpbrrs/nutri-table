import type { ReactElement, ReactNode } from "react"

interface CardProps {
    label: string
    icon: ReactElement
    children: ReactNode
    unit: string
}

export default function Card(props: CardProps) {

    const saldo: number = -1200;

    return (
        <div className="select-none rounded-md overflow-hidden bg-gradient-to-r from-emerald-400 pt-2 to-indigo-800 w-full hover:scale-110 hover:mx-8 transition-all shadow-lg [&:not(:hover)]:m-1 hover:px-2">
            <div className="bg-blp-400 p-4 w-full flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-1 justify-center items-center text-zinc-400">
                    {props.icon}
                    <p className="text-xs font-bold">
                        {props.label}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[56px] leading-10 mb-2 font-bold">
                        {props.children}
                    </p>
                    <span className="uppercase text-sm tracking-widest text-zinc-400 font-thin leading-none">
                        {props.unit}
                    </span>
                </div>
                <small className={`font-bold ${saldo > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {saldo}
                </small>
            </div>
        </div>
    )
}