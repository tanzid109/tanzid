import React from 'react';

const MagicButton = ({ title, icon, position }: {
    title: string; icon: React.ReactNode, position: string;
}) => {
    return (
        <div>
            <button className="relative inline-flex h-9 overflow-hidden rounded-lg w-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white gap-2 backdrop-blur-3xl">
                    {position === 'left' && icon}
                    {title}
                    {position === 'right' && icon}
                </span>
            </button>
        </div>
    );
};

export default MagicButton;