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
      <div className="flexRow justify-end">
        <Image
          src={imagePath}
          alt="arrow-down"
          width={22}
          height={22}
          className="relative left-1"
        />

        <label
          htmlFor={htmlFor}
          className="relative left-1 w-full p-1 text-sm text-darkBlack/50"
        >
          {labelText}
          {spanText ? <span className="text-darkRed">{spanText}</span> : null}
        </label>
      </div>

      <select
        id={htmlFor}
        name={htmlFor}
        placeholder={labelText}
        onChange={formik.handleChange}
        value={formik.values[htmlFor]}
        onBlur={formik.handleBlur}
        className={`w-full rounded-lg border-2 bg-white p-2 px-4 outline-none pl-3 h-[42px]
        ${
          formik.touched[htmlFor] && formik.errors[htmlFor]
            ? 'border-red-500'
            : 'border-darkBlack/25'
        } 
        ${
          formik.touched[htmlFor] && !formik.errors[htmlFor]
            ? 'text-darkBlack'
            : 'text-darkBlack/50'
        }
       `}
      >
        {...children}
      </select>
      <FormikError formik={formik} name={htmlFor} />
    </div>
  )
}
