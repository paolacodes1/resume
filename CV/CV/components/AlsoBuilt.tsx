import Kicker from '@/components/Kicker'

const credits: { name: string; description: string; link?: string }[] = [
  {
    name: 'Transcritor',
    description: 'Free, private transcription for Mac. Whisper runs on the computer itself, so nothing gets uploaded.',
  },
  {
    name: 'Piccolo Italiano',
    description: "An Italian app for my nephew, who can't read yet. Help in Portuguese, Italian always last, and it cheers him on by name.",
  },
  {
    name: 'Hotel Maerkli guest app',
    description: 'Guest information in three languages, works offline.',
    link: 'https://paolacodes1.github.io/hotel_maerkli/',
  },
  {
    name: 'ChalkUp',
    description: 'My bouldering tracker. I build for myself first.',
    link: 'https://paolacodes1.github.io/climbing/',
  },
  {
    name: 'Clipboard Manager',
    description: 'A menu bar tool for macOS, in Python.',
    link: 'https://github.com/paolacodes1/clipboard_manager',
  },
]

export default function AlsoBuilt() {
  return (
    <section className="border-b border-line bg-bg-deep">
      <div className="max-w-credits mx-auto px-6 py-[clamp(64px,8vw,104px)] text-center">
        <Kicker className="mb-10">Also built</Kicker>
        <div className="flex flex-col gap-[26px]">
          {credits.map((credit) => (
            <div key={credit.name}>
              <p className="font-display font-extrabold uppercase text-[30px]">
                {credit.link ? (
                  <a href={credit.link} className="inline-block py-1 -my-1 text-text hover:text-[#FF8A45] no-underline">{credit.name}</a>
                ) : (
                  credit.name
                )}
              </p>
              <p className="mt-1 text-base text-muted">{credit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
