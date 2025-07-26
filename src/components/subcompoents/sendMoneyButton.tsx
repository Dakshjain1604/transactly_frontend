import type { MouseEventHandler } from "react"


interface content{
    label:string,
    onClick:MouseEventHandler
}

export function SendMoneyButton(props:content){

    return <button 
        onClick={props.onClick}
        className="bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        {props.label}
    </button>
}