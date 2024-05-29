import React, { useEffect, useState } from 'react';
import './sodo.css';
const Sodo = () => {
    const [data, setdata] = useState([
        [, , , , , , , ,],
        [, , , , , , , ,],
        [, , , , , , , ,],

        [, , , , , , , ,],
        [, , , , , , , ,],
        [, , , , , , , ,],

        [, , , , , , , ,],
        [, , , , , , , ,],
        [, , , , , , , ,]

    ]);

    useEffect(() => {
        generate()
    }, []);

    var boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        if (box.classList.contains("active")) {
            box.classList.remove("active");
        }
        box.addEventListener('click', () => {
            if (box.innerHTML == "") {
                Array.from(boxes).forEach(function (set) {
                    set.classList.remove("active");
                });
                box.classList.add("active");
            }

        });
    });
    const newData = [...data];

    function addnum(e) {
        var selact = document.querySelector(".active");
        var cot = 0;
        var ind1 = null;
        var ind2 = null;
        if (selact) {
            let j = 0
            for (; j < 9; j++) {
                if ((((e.target.id * 2) / 2)) === newData[selact.id[0] - 1][j] && j != selact.id[2] - 1) {
                    cot++;
                }
            }

            if (cot == 0) {
                newData[(selact.id[0] - 1)][(selact.id[2] - 1)] = (((e.target.id * 2) / 2));
                setdata(newData)
                selact.classList.remove("active");
            }

            if (j == 9 && cot == 0) {
                ind1 = selact.id[0] - 1;
                ind2 = selact.id[2] - 1;
            }
            if (ind1!=null) {
                
            }
        }
    }

    function generate() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                newData[i][j] = Math.floor(Math.random() * 9) + 1;
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                for (let k = 0; k < 9; k++) {
                    if (k != j) {
                        if (newData[i][j] != "" && newData[i][j] == newData[i][k]) {
                            newData[i][k] = "";
                        }
                    }
                }
            }
        }
        for (let n = 0; n <= 6; n += 3) {
            for (let l = 0; l <= 6; l += 3) {
                for (let i = 0 + n; i < 3 + n; i++) {
                    for (let j = 0; j < 3 + l; j++) {
                        for (let a = 0 + n; a < 3 + n; a++) {
                            for (let b = 0; b < 3 + l; b++) {
                                if (j != b || i != a) {
                                    if (newData[i][j] == newData[a][b] && newData[i][j] != "") {
                                        if (Math.round(Math.random())) {
                                            newData[a][b] = "";
                                        } else {
                                            newData[i][j] = "";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log(Math.round(Math.random()));

        for (let m = 0; m < 3; m++) {
            for (let n = 0; n < 3; n++) {
                for (let i = 0 + m; i < 9 + m; i += 3) {
                    for (let j = 0 + n; j < 9 + n; j += 3) {

                        for (let a = 0 + m; a < 9 + m; a += 3) {
                            for (let b = 0 + n; b < 9 + n; b += 3) {

                                if (j != b || i != a) {
                                    if (newData[i][j] == newData[a][b] && newData[i][j] != "") {
                                        if (Math.round(Math.random())) {
                                            newData[a][b] = "";
                                        } else {
                                            newData[i][j] = "";
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
        setdata(newData);
    }
    return (
        <>
            <div className='main'>
                <div id="div1">
                    <div className='box' id="1-1">{data[0][0]}</div>
                    <div className='box' id="1-2">{data[0][1]}</div>
                    <div className='box' id="1-3">{data[0][2]}</div>
                    <div className='box' id="1-4">{data[0][3]}</div>
                    <div className='box' id="1-5">{data[0][4]}</div>
                    <div className='box' id="1-6">{data[0][5]}</div>
                    <div className='box' id="1-7">{data[0][6]}</div>
                    <div className='box' id="1-8">{data[0][7]}</div>
                    <div className='box' id="1-9">{data[0][8]}</div>
                </div>
                <div id="div2">
                    <div className='box' id="2-1">{data[1][0]}</div>
                    <div className='box' id="2-2">{data[1][1]}</div>
                    <div className='box' id="2-3">{data[1][2]}</div>
                    <div className='box' id="2-4">{data[1][3]}</div>
                    <div className='box' id="2-5">{data[1][4]}</div>
                    <div className='box' id="2-6">{data[1][5]}</div>
                    <div className='box' id="2-7">{data[1][6]}</div>
                    <div className='box' id="2-8">{data[1][7]}</div>
                    <div className='box' id="2-9">{data[1][8]}</div>
                </div>
                <div id="div3">
                    <div className='box' id="3-1">{data[2][0]}</div>
                    <div className='box' id="3-2">{data[2][1]}</div>
                    <div className='box' id="3-3">{data[2][2]}</div>
                    <div className='box' id="3-4">{data[2][3]}</div>
                    <div className='box' id="3-5">{data[2][4]}</div>
                    <div className='box' id="3-6">{data[2][5]}</div>
                    <div className='box' id="3-7">{data[2][6]}</div>
                    <div className='box' id="3-8">{data[2][7]}</div>
                    <div className='box' id="3-9">{data[2][8]}</div>
                </div>
                <div id="div4">
                    <div className='box' id="4-1">{data[3][0]}</div>
                    <div className='box' id="4-2">{data[3][1]}</div>
                    <div className='box' id="4-3">{data[3][2]}</div>
                    <div className='box' id="4-4">{data[3][3]}</div>
                    <div className='box' id="4-5">{data[3][4]}</div>
                    <div className='box' id="4-6">{data[3][5]}</div>
                    <div className='box' id="4-7">{data[3][6]}</div>
                    <div className='box' id="4-8">{data[3][7]}</div>
                    <div className='box' id="4-9">{data[3][8]}</div>
                </div>
                <div id="div5">
                    <div className='box' id="5-1">{data[4][0]}</div>
                    <div className='box' id="5-2">{data[4][1]}</div>
                    <div className='box' id="5-3">{data[4][2]}</div>
                    <div className='box' id="5-4">{data[4][3]}</div>
                    <div className='box' id="5-5">{data[4][4]}</div>
                    <div className='box' id="5-6">{data[4][5]}</div>
                    <div className='box' id="5-7">{data[4][6]}</div>
                    <div className='box' id="5-8">{data[4][7]}</div>
                    <div className='box' id="5-9">{data[4][8]}</div>
                </div>
                <div id="div6">
                    <div className='box' id="6-1">{data[5][0]}</div>
                    <div className='box' id="6-2">{data[5][1]}</div>
                    <div className='box' id="6-3">{data[5][2]}</div>
                    <div className='box' id="6-4">{data[5][3]}</div>
                    <div className='box' id="6-5">{data[5][4]}</div>
                    <div className='box' id="6-6">{data[5][5]}</div>
                    <div className='box' id="6-7">{data[5][6]}</div>
                    <div className='box' id="6-8">{data[5][7]}</div>
                    <div className='box' id="6-9">{data[5][8]}</div>
                </div>
                <div id="div7">
                    <div className='box' id="7-1">{data[6][0]}</div>
                    <div className='box' id="7-2">{data[6][1]}</div>
                    <div className='box' id="7-3">{data[6][2]}</div>
                    <div className='box' id="7-4">{data[6][3]}</div>
                    <div className='box' id="7-5">{data[6][4]}</div>
                    <div className='box' id="7-6">{data[6][5]}</div>
                    <div className='box' id="7-7">{data[6][6]}</div>
                    <div className='box' id="7-8">{data[6][7]}</div>
                    <div className='box' id="7-9">{data[6][8]}</div>
                </div>
                <div id="div8">
                    <div className='box' id="8-1">{data[7][0]}</div>
                    <div className='box' id="8-2">{data[7][1]}</div>
                    <div className='box' id="8-3">{data[7][2]}</div>
                    <div className='box' id="8-4">{data[7][3]}</div>
                    <div className='box' id="8-5">{data[7][4]}</div>
                    <div className='box' id="8-6">{data[7][5]}</div>
                    <div className='box' id="8-7">{data[7][6]}</div>
                    <div className='box' id="8-8">{data[7][7]}</div>
                    <div className='box' id="8-9">{data[7][8]}</div>
                </div>
                <div id="div9">
                    <div className='box' id="9-1">{data[8][0]}</div>
                    <div className='box' id="9-2">{data[8][1]}</div>
                    <div className='box' id="9-3">{data[8][2]}</div>
                    <div className='box' id="9-4">{data[8][3]}</div>
                    <div className='box' id="9-5">{data[8][4]}</div>
                    <div className='box' id="9-6">{data[8][5]}</div>
                    <div className='box' id="9-7">{data[8][6]}</div>
                    <div className='box' id="9-8">{data[8][7]}</div>
                    <div className='box' id="9-9">{data[8][8]}</div>
                </div>
            </div>
            <div id='genrate' onClick={generate} > generate</div>
            <div className='numbtn-mine'>
                <div id="1" onClick={addnum}>1</div>
                <div id="2" onClick={addnum}>2</div>
                <div id="3" onClick={addnum}>3</div>
                <div id="4" onClick={addnum}>4</div>
                <div id="5" onClick={addnum}>5</div>
                <div id="6" onClick={addnum}>6</div>
                <div id="7" onClick={addnum}>7</div>
                <div id="8" onClick={addnum}>8</div>
                <div id="9" onClick={addnum}>9</div>
            </div>
        </>
    );
}

export default Sodo;
