import { FiSend } from "react-icons/fi";


const NeumorphismButton = ({text}) => {
  return (
    <button
      className={`
        bg-gray-700
        px-6 py-3 rounded-full 
        flex items-center gap-2 
        text-xl font-extrabold
        text-slate-200
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all
        hover:scale-105

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-300
    `}
    >
      <FiSend color="white"/>
      <span>{text}</span>
    </button>
  );
};

export default NeumorphismButton;