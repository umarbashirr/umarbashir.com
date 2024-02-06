import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  ChangeEventHandler,
} from "react";

const TextAreaInput = (props: {
  id: string;
  label:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  value: string | number | readonly string[];
  placeholder: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id} className="mb-1 capitalize">
        {props.label}
      </label>
      <textarea
        name={props.id}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        cols={30}
        rows={10}
        className="border rounded p-2 resize-none"
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
