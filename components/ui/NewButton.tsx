import React from 'react';

const NewButton = ({ title, icon, position, handleClick, otherClasses }: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
    return (
        <div>
            <p className="relative inline-flex overflow-hidden w-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#FFFFFF_0%,#00FFFF_100%)]
" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-none bg-purple px-3 py-1 text-sm font-medium text-black gap-2 backdrop-blur-3xl">
                    
                    {position === 'right' && icon}
                    {title}
                    {position === 'left' && icon}
                </span>
            </p>
        </div>
    );
};

export default NewButton;