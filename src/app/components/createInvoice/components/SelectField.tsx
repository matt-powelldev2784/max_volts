import { FormikError } from './FormikError'
import { FormikProps } from 'formik'
import Image from 'next/image'

interface InputFieldProps {
  formik: FormikProps<any>
  htmlFor: string
  labelText: string
  spanText?: string
  children: React.ReactNode[]
  imagePath: string
}

export const SelectField = ({
  formik,
  htmlFor,
  labelText,
  spanText,
  children,
  imagePath,
}: InputFieldProps) => {
  return (
    <div className="relative">
      <label htmlFor={htmlFor} className="w-full p-1 text-sm text-black/50">
        {labelText}
        {spanText ? <span className="text-xs">{spanText}</span> : null}
      </label>
      <Image
        src={imagePath}
        alt="arrow-down"
        width={20}
        height={20}
        className="absolute top-[34.5px] left-3"
      />
      <select
        id={htmlFor}
        name={htmlFor}
        placeholder={labelText}
        onChange={formik.handleChange}
        value={formik.values[htmlFor]}
        onBlur={formik.handleBlur}
        className={`w-full rounded-lg border-2 bg-white p-2 px-4 outline-none pl-10
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
