import { FormikError } from './FormikError'
import { FormikProps } from 'formik'

interface InputFieldProps {
  formik: FormikProps<any>
  htmlFor: string
  labelText: string
  spanText?: string
  children: React.ReactNode[]
}

export const SelectField = ({
  formik,
  htmlFor,
  labelText,
  spanText,
  children,
}: InputFieldProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="w-full p-1 text-sm">
        {labelText}
        {spanText ? <span className="text-xs">{spanText}</span> : null}
      </label>
      <select
        id={htmlFor}
        name={htmlFor}
        placeholder={labelText}
        onChange={formik.handleChange}
        value={formik.values[htmlFor]}
        onBlur={formik.handleBlur}
        className={`w-full rounded-lg border-2 border-black bg-white p-2 px-4 outline-none ${
          formik.touched[htmlFor] &&
          formik.errors[htmlFor] &&
          'border-2 border-red-500'
        }`}
      >
        {...children}
      </select>
      <FormikError formik={formik} name={htmlFor} />
    </>
  )
}
