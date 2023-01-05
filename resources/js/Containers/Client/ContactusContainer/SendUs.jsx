

export default function SendUs({ children }) {
    return (
        <div className='w-full h-full'>
            {children}
        </div>
    )
}

SendUs.Container = function SendUsContainer({ children }) {
    return (
        <div className='flex flex-col justify-between'>
            {children}
        </div>
    )
}

SendUs.Form = function SendUsForm({ children, onSubmit }) {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            {children}
        </form>
    )
}

SendUs.Input = function SendUsInput({ label, type, name, value, onChange }) {
    return (
        <div className='mb-4'>
            <label className='ltr:ml-2 rtl:mr-2 text-accent bg-majorBackground'>{label}</label>
            <input className='w-full h-10 mt-1 p-2 text-sm lg:text-lg text-left rtl:text-right text-accent bg-majorBackground border-accent focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 rounded-md shadow-sm '
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e, name)} />
        </div>
    )
}

SendUs.Textarea = function SendUsTextarea({ type, name, value, label, onChange }) {
    return (
        <div className='mb-4'>
            <label className='ltr:ml-2 rtl:mr-2 text-accent bg-majorBackground'>{label}</label>
            <textarea className='w-full h-40 mt-1 p-2 text-sm lg:text-lg text-left rtl:text-right resize-none text-accent bg-majorBackground border-accent focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 rounded-md shadow-sm '
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e, "message")} />
        </div>
    )
}

SendUs.Submit = function SendUsSubmit({ type, children }) {
    return (
        <button className='font-semibold text-sm md:text-base w-[125px] md:w-[140px] h-[30px] lg:h-[35px] rounded-full text-minorBackground bg-accent hover:opacity-80 transition duration-300 mx-auto'
            type={type}>
            {children}
        </button>
    )
}




// SendUs.Phone = function SendUsPhone({ type, name, value, label, onChange }) {
//     return (
//         <div className='mb-4'>
//             <label className='ltr:ml-4 rtl:mr-4 text-accent bg-majorBackground'>{label}</label>
//             <PhoneInput
//                 inputStyle={{ width: "100%", backgroundColor: "#15161C", color: "#858d9a", borderColor: '#858d9a' }}
//                 buttonStyle={{ backgroundColor: "#15161C", borderColor: '#858d9a' }}
//                 dropdownStyle={{ backgroundColor: "#15161C", color: "#858d9a" }}
//                 inputClass="bg-majorBackground border-accent focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 rounded-md shadow-sm"
//                 country={'sa'}
//                 type={type}
//                 name={name}
//                 value={value}
//                 onChange={(value, country, e, formattedValue) => onChange(e, "phone", value, country, formattedValue)} />
//         </div>
//     )
// }