import React from "react"
import Link from "next/link"

function Button({link, children, className = ''}) {
    return <Link href={link}><a className={`bg-red-500`}>{children}</a></Link>
}

export default Button