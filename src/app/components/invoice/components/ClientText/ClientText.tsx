import Image from 'next/image'

interface ClientTextProps {
  clientText: string | undefined
}

export const ClientText = ({ clientText }: ClientTextProps) => {
  return (
    <div className="w-full min-w-[320px] sm:px-2 md:px-0">
      <div className="relative">
        <div className="flexRow justify-end ">
          <Image
            src="/icons/person.svg"
            alt="arrow-down"
            width={22}
            height={22}
            className="relative left-1"
          />

          <label className="relative left-1 w-full p-1 text-sm text-darkBlack/50">
            Client
          </label>
        </div>

        <p className="w-full rounded-lg border-2 bg-white p-2 outline-none pl-3 h-[42px] border-darkBlack/25 text-darkBlack/50 truncate">
          {clientText ? clientText : 'Loading...'}
        </p>
      </div>
    </div>
  )
}
