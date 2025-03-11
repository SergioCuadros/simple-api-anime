export const Button = ({ onClick, disabled, className, text }) => {
    return (
        <>
            <button onClick={onClick} disabled={disabled} className={`${className} w-full`}>
                <p className="text-white lg:text-base md:text-md text-sm font-bold uppercase"> 
                  {text}
                </p>
            </button>
        </>
    );
};
