function InfoBlock({title, icon: icon, description}) {
    return (
        <div className="border border-(--border-color) rounded-xl bg-(--bg-card) p-6 gap-4 flex flex-col
        hover:scale-[1.05] transition-all duration-300">
            <div className="flex justify-between">
                <p>{title}</p>
                <span className="text-(--text-muted)">{icon}</span>
            </div>
            <p className="font-bold">{title === "Средний уровень" ? `${description}%` : description}</p>
        </div>
    );
}

export default InfoBlock;