import {X} from 'lucide-react'
import { Input } from '../inputs/input';

function CreateSkill() {
    return (
        <div className="w-screen h-screen bg-(--bg-dark) flex justify-center items-center">
            <div className="max-w-[500px] p-4 border border-(--border-color) rounded-xl bg-">
                <p className='text-(--text-muted)'><X size={'1rem'}/></p>
                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-bold">Add New Skill</h2>
                    <p className="text-(--text-muted)">Add a new skill to track your progress</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <label>
                        <p className='text-bold'>Skill Name *</p>
                        <Input placeholder={'React, FastApi, Docker...'} type={'text'} required/>
                    </label>
                    <label>
                        <p className='text-bold'>Category</p>
                        <Input placeholder={'Frontend, Backend, DevOps...'} type={'text'}/>
                    </label>
                    <label>
                        <p className='text-bold'>Goal</p>
                        <Input placeholder={'What do you want to achieve?'} type={'text'}/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CreateSkill;