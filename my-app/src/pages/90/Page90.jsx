import React from "react";
import { Frame90, Line90, Lines90, Space90, Trigger90 } from "./Page90.styled";

const Page90 = () => {
    const renderGrid = () => {
        const grid = [];
        for (let i = 1; i <= 380; i++) {
            const row = Math.ceil(i / 20);
            const column = i - (row - 1) * 20;

            grid.push(
                <Trigger90 key={i} className={`trigger trigger-${i}`} onMouseEnter={() => handleMouseEnter(row, column)} />
            );
        }
        return grid;
    };

    const handleMouseEnter = (row, column) => {
        const scale = {
            rowMinusTwo: (column - 1) / 10,
            rowMinusOne: (column - 2) / 10,
            currentRow: (column - 3) / 10,
            rowPlusOne: (20 - (column + 1)) / 10,
            rowPlusTwo: (20 - (column + 2)) / 10,
            rowPlusThree: (20 - (column + 3)) /10
        };

        const linesToChange = [
            row - 2,
            row - 1,
            row,
            row + 1,
            row + 2
        ];

        linesToChange.forEach(lineIndex => {
            const line = document.querySelector(`.line-${lineIndex}`);
            if (line) {
                const left = line.querySelector('.left');
                const right = line.querySelector('.right');

                if (lineIndex === row) {
                    left.style.transform = `scaleX(${scale.currentRow})`;
                    right.style.transform = `scaleX(${scale.rowPlusTwo})`;
                } else if (lineIndex === row - 1 || lineIndex === row + 1) {
                    left.style.transform = `scaleX(${scale.rowMinusOne})`;
                    right.style.transform = `scaleX(${scale.rowPlusOne})`;
                } else {
                    left.style.transform = `scaleX(${scale.rowMinusTwo})`;
                    right.style.transform = `scaleX(${scale.rowPlusThree})`;
                }
            }
        });
    };

    return (
        <Frame90>
            <Space90 />
            {renderGrid()}
            <Lines90>
                {Array.from({ length: 19 }, (_, i) => (
                    <Line90 key={i + 1} className={`line line-${i + 1}`}>
                        <div className="left" />
                        <div className="right" />
                    </Line90>
                ))}
            </Lines90>
        </Frame90>
    );
};

export default Page90;