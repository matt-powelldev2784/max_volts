import { FormikProps } from 'formik'

interface FormikErrorProps {
  formik: FormikProps<any>
  name: string
  optionalClassNames?: string
}

export const FormikError = ({
  formik,
  name,
  optionalClassNames,
}: FormikErrorProps) => {
  if (formik.touched[name] && formik.errors[name]) {
    return (
      <p
        className={`absolute -bottom-5 text-sm text-red-500 ${optionalClassNames}`}
      >
        {String(formik.errors[name])}
      </p>
    )
  }
  return null
}
