export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
    const baseStyles = "inline-flex items-center justify-center rounded px-6 py-3.5 font-bold tracking-wide transition-all duration-300 relative overflow-hidden active:scale-95";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30",
        secondary: "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/40 hover:shadow-xl hover:shadow-accent-500/60 hover:-translate-y-0.5",
        outline: "border border-white/20 text-white hover:bg-white/10"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            <span className="relative z-10">{children}</span>
        </button>
    );
}
