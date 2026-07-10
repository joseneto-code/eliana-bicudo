import { whatsappLink } from "@/lib/site"

export function WhatsappFloat() {
  return (
    <div className="animate-in fade-in zoom-in slide-in-from-bottom-4 fixed bottom-5 right-5 z-50 duration-700 [animation-delay:1s] [animation-fill-mode:backwards]">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-soft-pulse inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5a]"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.68 4.68 1.86 6.605L3 29l7.09-2.32A12.42 12.42 0 0 0 16 28.5c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3Zm0 22.72a10.2 10.2 0 0 1-5.212-1.428l-.374-.222-4.207 1.377 1.397-4.1-.244-.396A10.19 10.19 0 0 1 5.78 15.5c0-5.646 4.575-10.22 10.221-10.22 5.645 0 10.219 4.574 10.219 10.22 0 5.645-4.574 10.22-10.22 10.22Zm5.61-7.65c-.307-.154-1.817-.897-2.099-1-.281-.103-.486-.154-.69.154-.204.307-.792.999-.972 1.204-.179.205-.358.23-.665.077-.307-.154-1.296-.478-2.469-1.524-.912-.813-1.528-1.817-1.707-2.124-.179-.307-.019-.473.135-.626.139-.138.307-.358.46-.538.154-.179.205-.307.307-.512.103-.205.051-.384-.026-.538-.077-.154-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.538.077-.819.384-.281.307-1.075 1.05-1.075 2.56s1.101 2.969 1.255 3.174c.154.205 2.166 3.307 5.248 4.636.733.316 1.305.505 1.751.646.735.234 1.404.201 1.933.122.59-.088 1.817-.743 2.074-1.46.256-.717.256-1.332.18-1.46-.077-.128-.282-.205-.589-.359Z" />
        </svg>
      </a>
    </div>
  )
}
