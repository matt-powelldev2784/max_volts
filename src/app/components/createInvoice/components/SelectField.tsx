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
  console.log(
    'formik.touched[htmlFor] && !formik.errors[htmlFor]',
    formik.touched[htmlFor] && !formik.errors[htmlFor]
  )
  console.log('htmlFor', htmlFor)
  console.log('formik.touched', formik.touched)
  console.log('formik.touched[htmlFor]', formik.touched[htmlFor])
  console.log('!formik.errors[htmlFor]', !formik.errors[htmlFor])
  console.log('formik.hanldeBlur', formik.handleBlur)

  return (
    <div className="relative">
      <label htmlFor={htmlFor} className="w-full p-1 text-sm text-black/50">
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
        className={`w-full rounded-lg border-2 bg-white p-2 px-4 outline-none
        ${
          formik.touched[htmlFor] && formik.errors[htmlFor]
            ? 'border-red-500'
            : 'border-black/25'
        } 
        ${
          formik.touched[htmlFor] && !formik.errors[htmlFor]
            ? 'text-black'
            : 'text-black/50'
        }
       `}
      >
        {...children}
      </select>
      <FormikError formik={formik} name={htmlFor} />
    </div>
  )
}
