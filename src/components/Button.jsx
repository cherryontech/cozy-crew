
// Job 1: build the class string
function getButtonClass(variant, size, className) {
  return ["btn", `btn-${variant}`, `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");
}

// Job 2: lay out icon and label
function ButtonContent({ icon, iconPosition, children }) {
  const iconEl = icon && (
    <span className="icon" aria-hidden="true">{icon}</span>
  );

  return (
    <>
      {iconPosition === "start" && iconEl}
      {children && <span>{children}</span>}
      {iconPosition === "end" && iconEl}
    </>
  );
}

// Job 3a: render as a link, with link-specific disabled handling
function LinkButton({ href, disabled, onClick, ...rest }) {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      {...rest}
    />
  );
}

// Job 3b: render as a native button
function NativeButton({ type = "button", ...rest }) {
  return <button type={type} {...rest} />;
}

// Main component: only decides which pieces to combine
export default function Button({
  variant = "primary",
  size = "md",
  icon = null,
  iconPosition = "start",
  href,
  children,
  className,
  ...rest
}) {
  const Element = href ? LinkButton : NativeButton;
  const elementProps = href ? { href, ...rest } : rest;

  return (
    <Element
      className={getButtonClass(variant, size, className)}
      {...elementProps}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </Element>
  );
}