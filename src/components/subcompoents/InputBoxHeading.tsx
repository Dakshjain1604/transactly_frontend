interface InputContent {
  Heading: string;
  line1?: string;
  line2?: string;
}

export function InputBoxHeading(props: InputContent) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-3xl text-black font-bold">{props.Heading}</div>
        <div className="text-gray-400 text-center text-wrap mt-2">
          {props.line1} <br></br> {props.line2}
        </div>
      </div>
    </div>
  );
}
