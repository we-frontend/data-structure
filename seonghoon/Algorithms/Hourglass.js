const HourglassArray = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 9, 2, -4, -4, 0 ],
    [ 0, 0, 0, -2, 0, 0 ],
    [ 0, 0, -1, -2, -4, 0 ]
];

const detectHourGlass = (line, idx, hourGlass) => {
    const nowLine = line,
          nowIdx = idx,
          entireMap = hourGlass;

    if(detectAvaliableLine(nowIdx, entireMap)) {
        return outputHourGlass(nowLine, nowIdx, entireMap);
    }
};

const detectAvaliableLine = (idx, hourGlass) => {
    return (hourGlass[idx+2]) ? true : false;
};

const outputHourGlass = (nowLine, lineIdx, entireMap) => {
    const sumArray = [];
    nowLine.forEach((point, idx, lineArray) => {
        let sum = 0;
        if(lineArray[idx + 2] !== undefined) {
            sum = lineArray[idx] + lineArray[idx + 1] + lineArray[idx + 2];
            sum += entireMap[lineIdx + 1][idx + 1];
            sum += entireMap[lineIdx + 2][idx] + entireMap[lineIdx + 2][idx + 1] + entireMap[lineIdx + 2][idx + 2];

            sumArray.push(sum);
        }
    });

    return Math.max(...sumArray);
};

const HourGlassFunction = (hourGlass) => {
    const sumArray = [];
    hourGlass.forEach((line, idx, hourGlass) => {
        let maxSum = detectHourGlass(line, idx, hourGlass);
        if(maxSum !== undefined) sumArray.push(maxSum);
    });

    return Math.max(...sumArray);
};

HourGlassFunction(HourglassArray);

