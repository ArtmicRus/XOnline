import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import { useGameState } from './use-game-state';
import {ResetButton} from "./reset-button";


export function Game() {
    const {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        resetGame,
        toggleCell,
        getWinnerCell
    } = useGameState();

    return (
        <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            {/* Пример grid-cols-[repeat(3,_30px)] - пишем нужный нам CSS который в процессе заменится на готовый стиль
                Вместо пробелов используются нижние подчёркивания в _ */}
            {/* Пример grid-rows-game-field стиль описанный в tailwind.config.js */}
            <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-game-field">
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={getWinnerCell(index)}
                        onClick={() => toggleCell(index)}
                    />
                ))}
            </div>
            <ResetButton onClick={resetGame}/>
        </div>
    )
}