export default function Guest({ children, className }) {
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center ` + className}>
            {children}
        </div>
    );
}
