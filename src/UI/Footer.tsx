import Link from "next/link";

export default function Footer () {
    return (
        <footer className={"pt-24"}>
            <div className={"flex justify-between bg-cw_brown text-cw_tan p-8"}>
                <span>Copyright © 2023 Fake Garrett Company</span>
                <Link href={"https://github.com/gbstorey"}>My GitHub</Link>
            </div>
        </footer>
    )
}