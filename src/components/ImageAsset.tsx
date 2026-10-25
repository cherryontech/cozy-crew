import type { ComponentProps } from 'react'

type ImageAsset = {
  src: string
  width?: number
  height?: number
}

type ImageAssetProps = Omit<ComponentProps<'img'>, 'src'> & {
  asset: ImageAsset
  alt: string
}

export default function ImageAsset({
  asset,
  alt,
  width,
  height,
  ...rest
}: ImageAssetProps) {
  return (
    <img
      src={asset.src}
      width={width ?? asset.width}
      height={height ?? asset.height}
      alt={alt}
      {...rest}
    />
  )
}