function Input(props) {
    return (
        <input {...props} className="rounded-xl focus:border-(--bg-primary) bg-(--bg-btn) border-2 border-(--border-color) p-2 w-full outline-none"/>
    );
}

function GradientInput(props) {
    return (
        <input {...props} className="bg-(image:--gradient-primary) bg-(--bg-primary) 
        px-4 py-2 rounded-xl
        hover:bg-(image:--bg-primary-hover)"/>
    );
}

export { GradientInput, Input };