import { withBasePath } from '@/lib/utils'

// Images live in public/scenes/. Expected filenames:
// agent-fleet.jpg, finance.jpg, eternel.jpg, revalida.jpg
export interface SceneProps {
  number: string
  slugline: string
  inProduction?: boolean
  title: string
  body: string
  bullets?: string[]
  crew: string
  image?: string
  imageAlt?: string
  flip?: boolean
}

// Stand-in shown until a scene has a real image: a film frame with the scene number
function SceneSlate({ number, slugline }: { number: string; slugline: string }) {
  return (
    <div aria-hidden="true" className="aspect-[16/10] bg-film rounded py-[14px] flex flex-col">
      <div className="sprockets mx-[14px]" />
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-display font-black uppercase leading-[0.9] text-[clamp(64px,8vw,120px)] text-text">
          SC. {number}
        </span>
        <span className="font-mono text-[13px] tracking-[0.06em] text-muted">{slugline}</span>
      </div>
      <div className="sprockets mx-[14px]" />
    </div>
  )
}

export default function Scene({
  number,
  slugline,
  inProduction,
  title,
  body,
  bullets,
  crew,
  image,
  imageAlt,
  flip,
}: SceneProps) {
  const text = (
    <div className="flex-[1_1_420px] min-w-0">
      <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] tracking-[0.06em] text-muted">
        <span className="text-accent">SC. {number}</span>
        <span>{slugline}</span>
        {inProduction && (
          <span className="text-accent-ink bg-accent px-2 rounded-sm">IN PRODUCTION</span>
        )}
      </div>
      <h3 className="mt-[14px] mb-4 font-display font-extrabold uppercase text-[clamp(36px,4vw,52px)] leading-[0.95]">
        {title}
      </h3>
      <p className="text-lg leading-[1.6] text-body">{body}</p>
      {bullets && (
        <ul className="mt-[18px] flex flex-col gap-3 text-[17px] leading-[1.55] text-body">
          {bullets.map((bullet) => (
            <li key={bullet} className="pl-[18px] border-l-2 border-[#3A2D23]">{bullet}</li>
          ))}
        </ul>
      )}
      <p className="mt-5 font-mono text-[13px] leading-[1.7] text-muted">CREW: {crew}</p>
    </div>
  )

  const media = (
    <div className="flex-[1_1_420px] min-w-0">
      {image ? (
        <img
          src={withBasePath(`/scenes/${image}`)}
          alt={imageAlt ?? ''}
          loading="lazy"
          className="w-full aspect-[16/10] object-cover bg-surface"
        />
      ) : (
        <SceneSlate number={number} slugline={slugline} />
      )}
    </div>
  )

  // Flipped scenes put the image first; wrap-reverse keeps text on top when stacked
  return (
    <article
      className={`flex gap-x-12 gap-y-8 items-start pt-7 border-t border-line ${flip ? 'flex-wrap-reverse' : 'flex-wrap'}`}
    >
      {flip ? media : text}
      {flip ? text : media}
    </article>
  )
}
