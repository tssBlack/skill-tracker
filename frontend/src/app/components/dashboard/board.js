import { BookOpen } from 'lucide-react'
import { GradientInput } from '../inputs/input';

function Board() {
    return (
        <div className="border border-(--border-color) rounded-xl flex flex-col p-8 w-full bg-(--bg-card)">
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="rounded-full p-4 bg-(--bg-dark) border border-(--border-color)">
                    <BookOpen/>
                </div>
                <p className="font-bold text-xl">Start Tracking Skills</p>
                <p className="text-(--text-muted)">Add your first skill and track your progress</p>
                <GradientInput type={'button'} value={'+ Add First Skill'}/>
            </div>
        </div>
    );
}

export default Board;