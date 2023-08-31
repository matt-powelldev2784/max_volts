import Image from 'next/image'

export const IsLoadingJsx = () => {
  return (
    <div className="fixed bottom-0 w-full flexRow">
      <div className="">
        <Image
          src="/icons/loading.svg"
          alt="Person icon"
          width={40}
          height={40}
          className="animate-spin p-2"
        />
      </div>
    </div>
  )
}
