import Image from 'next/image'

export const PdfIsLoading = () => {
  return (
    <>
      <div className="flexCol gap-2 w-full mt-4 mb-4">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="flexRow text-lg text-center">PDF Invoice Generating...</p>
        <Image
          src="/icons/loading.svg"
          alt="Person icon"
          width={40}
          height={40}
          className="animate-spin p-2"
        />
      </div>
    </>
  )
}
