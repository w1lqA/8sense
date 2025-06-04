import Link from "next/link"

export const DropDownMenu = ({ title, data }: { title: string; data: string[] }) => {
    return (
        <details>
            <summary className="text-black-600 mt-4 font-medium uppercase cursor-pointer">{title}</summary>
            <div className="ml-4 mt-4 gap-4 flex flex-col text-mobile-text-medium text-black-600">
                {data.map((item, index) => (
                    <Link key={index} href="#">{item}</Link>
                ))}
            </div>
        </details>
    )
}
