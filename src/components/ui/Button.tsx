export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 active:scale-95";
    const variants = {
        primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        secondary: "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
