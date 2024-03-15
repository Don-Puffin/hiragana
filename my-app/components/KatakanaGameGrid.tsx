//produces the 'bingo card' style grid which users need to select the right answer from.
'use client'
import { katakanaDummyData } from '@/constants/KatakanaDummyData';

const KatakanaGameGrid = ({ onButtonClick }: {
  onButtonClick: (katakana: string) => void;
}) => {
  return (
    <div className="grid grid-cols-4 gap-0">
      {/* maps over the dummy data to produce the grid.  */}
      {katakanaDummyData
      .map((characterClicked, index) => (
        <button
          key={index}
          // below adds alternating colours to the grid and hover over effects
          className={`font-bold py-2 px-4 m-1 rounded ${index % 2 === 0 ? 'bg-black hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-200 text-black'}`}
          // calls characterclicked when button clicked (see hiragana/game/page.tsx )
          onClick={() => onButtonClick(characterClicked.katakana)}
        >
          {characterClicked.katakana}
        </button>
      ))}
    </div>
  );
}

export default KatakanaGameGrid; 