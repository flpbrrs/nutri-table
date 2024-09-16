import { ReactNode } from "react"

interface PageProps {
    children: ReactNode
}

export default function Page(props: PageProps) {
    return (
        <div className="min-h-screen pb-8">
            <div className="bg-blp-800 h-48 rounded-bl-3xl rounded-br-3xl" />
            <div className="container mx-auto px-32 h-full -mt-36">
                {props.children}
            </div>
        </div>
    )
}