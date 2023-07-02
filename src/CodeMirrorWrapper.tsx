import { useState } from 'react'

interface CodeMirrorWrapperProps {
  children: React.ReactNode
  title: string
  className?: string
}

function CodeMirrorWrapper({
  children,
  title,
  className,
}: CodeMirrorWrapperProps) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <section className={`${className} ${!isOpen && 'isOpen flex-grow-0'}`}>
      <div className="flex justify-between rounded-t-md bg-gray-700 p-1">
        <span className="pl-1 text-slate-50">{title}</span>
        <button
          className=" ml-1 text-slate-50"
          onClick={() => setIsOpen((oldValue) => !oldValue)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${!isOpen && ' hidden'} scale-75 hover:scale-100`}
          >
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="14" x2="21" y1="10" y2="3" />
            <line x1="3" x2="10" y1="21" y2="14" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isOpen && ' hidden'} scale-75 hover:scale-100`}
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" x2="14" y1="3" y2="10" />
            <line x1="3" x2="10" y1="21" y2="14" />
          </svg>
        </button>
      </div>
      {children}
    </section>
  )
}

export default CodeMirrorWrapper
