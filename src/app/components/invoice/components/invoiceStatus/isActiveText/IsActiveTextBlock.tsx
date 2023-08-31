import { Button } from '@/app/ui/'

export const IsActiveText = () => {
  return (
    <>
      <Button
        type="button"
        optionalClasses="text-white text-sm h-full w-[150px] md:w-[160px] max-h-[37px] bg-mvGreen"
        buttonText="Invoice Is Closed"
      />
    </>
  )
}
