import type { ReactNode } from "react"
import ImageAsset, { type ImageAsset as ImageAssetType } from './ImageAsset'
// import Button from './Button'

type Tone = 'default' | 'accent'
type BadgeTone = 'success' | 'neutral'

type Action = {
  label: string
  variant?: 'primary' | 'secondary' | 'quiet'
  href?: string
  onClick?: () => void
  icon?: ReactNode
}

// Job 1: the card shell — just padding, rounded corners, and background variant
function CardShell({
  tone = 'default',
  children,
}: {
  tone?: Tone
  children: ReactNode
}) {
  const toneClass = tone === 'accent' ? 'card card-accent' : 'card'
  return <div className={toneClass}>{children}</div>
}

// Job 2: the top visual — icon badge, image, or avatar (mutually exclusive)
function CardMedia({
  icon,
  image,
  avatar,
  alt = '',
}: {
  icon?: ReactNode
  image?: ImageAssetType
  avatar?: ImageAssetType
  alt?: string
}) {
  if (image) return <ImageAsset className="card-media-image" asset={image} alt={alt} />
  if (avatar) return <ImageAsset className="card-media-avatar" asset={avatar} alt={alt} />
  if (icon)
    return (
      <span className="card-media-icon" aria-hidden="true">
        {icon}
      </span>
    )
  return null
}

// Job 3: status/category badge — pill (colored) or plain text label
function CardBadge({
  label,
  tone = 'neutral',
}: {
  label?: string
  tone?: BadgeTone
}) {
  if (!label) return null
  return <span className={`badge badge-${tone}`}>{label}</span>
}

// Job 4: title + description text block
function CardBody({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
    </>
  )
}

export type CardProps = {
  tone?: Tone
  icon?: ReactNode
 image?: ImageAssetType
  avatar?: ImageAssetType
  badge?: string
  badgeTone?: BadgeTone
  title: string
  description?: string
  action?: Action
}

// Main component: only decides which slots to fill
export default function Card({
  tone,
  icon,
  image,
  avatar,
  badge,
  badgeTone,
  title,
  description,
  action,
}: CardProps) {
  return (
    <CardShell tone={tone}>
      <CardMedia icon={icon} image={image} avatar={avatar} alt={title} />
      <CardBadge label={badge} tone={badgeTone} />
      <CardBody title={title} description={description} />
         {/* Where button will be implemented  */}

      {/* {action &&
        (action.href ? (
          <Button
            variant={action.variant ?? 'primary'}
            href={action.href}
            icon={action.icon}
          >
            {action.label}
          </Button>
        ) : (
          <Button
            variant={action.variant ?? 'primary'}
            onClick={action.onClick}
            icon={action.icon}
          >
            {action.label}
          </Button>
        ))} */}
    </CardShell>
  )
}
