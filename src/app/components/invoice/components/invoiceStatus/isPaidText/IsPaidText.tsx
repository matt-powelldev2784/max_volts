import { Button } from '@/app/ui/button/button'

export const IsPaidText = () => {
  return (
    <>
      <Button
        type="button"
        optionalClasses="text-white text-sm h-full w-[160px] max-h-[40px] bg-mvGreen"
        buttonText="Invoice Is Paid"
      />
    </>
  )
}
