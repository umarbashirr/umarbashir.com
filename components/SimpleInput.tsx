import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  ChangeEventHandler,
} from "react";

const SimpleInput = (props: {
  id: string;
  label:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  type: string | (string & {});
  value: string | number | readonly string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id} className="mb-2 capitalize">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="border rounded p-2"
      />
    </div>
  );
};

export default SimpleInput;
