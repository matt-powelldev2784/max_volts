import { FormikError } from './FormikError'
import { FormikProps } from 'formik'

interface InputFieldProps {
  formik: FormikProps<any>
  htmlFor: string
  labelText: string
  inputType: string
  spanText?: string
  optionalClassNames?: string
}

export const InputField = ({
  formik,
  htmlFor,
  labelText,
  inputType,
  spanText,
  optionalClassNames,
}: InputFieldProps) => {
  return (
    <div className="relative flexCol w-full">
      <label htmlFor={htmlFor} className="w-full p-1 text-sm">
        {labelText}
        {spanText ? <span className="text-xs">{spanText}</span> : null}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={inputType}
        placeholder={labelText}
        onChange={formik.handleChange}
        value={formik.values[htmlFor]}
        onBlur={formik.handleBlur}
        className={`w-full rounded-lg border-2 bg-white p-2 px-4 outline-none pl-10 text-black
        ${
          formik.touched[htmlFor] && formik.errors[htmlFor]
            ? 'border-red-500'
            : 'border-black/25'
        } 
        
        ${optionalClassNames}
        `}
      />
      <FormikError formik={formik} name={htmlFor} />
    </div>
  )
}
