import { BookOpen } from 'lucide-react'

function Board() {
    return (
        <div className="border border-(--border-color) rounded-xl flex flex-col p-8 w-full bg-(--bg-card)">
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="rounded-full p-4 bg-(--bg-dark) border border-(--border-color)">
                    <BookOpen/>
                </div>
                <p className="font-bold text-xl">Начните отслеживать навыки</p>
                <p className="text-(--text-muted)">Добавьте свой первый навык и следите за прогрессом</p>
                <button className="bg-(image:--gradient-primary) bg-(--bg-primary) px-4 py-2 rounded-xl
                hover:bg-(image:--bg-primary-hover)">
                    + Add fist skill
                </button>
            </div>
        </div>
    );
}

export default Board;