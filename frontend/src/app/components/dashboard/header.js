import { Plus, LogOut } from 'lucide-react'

function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="flex flex-col justify-start">
                <h1 className="bg-(image:--gradient-primary) text-transparent bg-clip-text font-bold text-4xl">Skill Tracker</h1>
                <p className="text-(--text-muted)">Track your progress and achieve your goals</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-(image:--gradient-primary) bg-(--bg-primary)
                px-4 py-2 rounded-xl 
                hover:bg-(image:--bg-primary-hover)
                flex gap-2 items-center">
                    <Plus size={'1rem'}/> Add skill
                </button>
                <button className="border border-(--border-color) bg-(--bg-btn) 
                hover:bg-(--accent-color) hover:text-(--bg-btn)
                px-4 py-2 rounded-xl flex items-center gap-2">
                    <LogOut size={'1rem'}/> Sign Out
                </button>
            </div>
        </header>
    );
}

export default Header;