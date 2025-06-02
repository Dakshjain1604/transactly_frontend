import type React from "react"

interface items{
    Heading:string,
    type:string,
    placeholder?:string,
    reference?:React.Ref<HTMLInputElement>
    onChange:Function
}

export function InputwithHeading(props:items){
    return <div className="flex flex-col ">
    {props.Heading}
    <div>
        <input
            type={props.type}
            placeholder={props.placeholder}
            className="border-2 border-gray-500 rounded-md px-2 w-80 py-2"
            ref={props.reference}
        ></input>
    </div>
</div>
}