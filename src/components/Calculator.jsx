

export const Calculator = () => {
  return (
    <>
    <div id="calculator">
        <div id="display">0</div>
        <div id="result">=</div>
        <hr />
        <div id="buttons-wrap">
            <button id="seven" value="7">7</button>
            <button id="eight" value="8">8</button>
            <button id="nine"value="9">9</button>
            <button id="divide" value="/">/</button>
            <button id="four" value="4">4</button>
            <button id="five" value="5">5</button>
            <button id="six" value="6">6</button>
            <button id="multiply" value="*">*</button>
            <button id="one" value="1">1</button>
            <button id="two" value="2">2</button>
            <button id="three" value="3">3</button>
            <button id="add" value="+">+</button>
            <button id="clear" value="AC">C</button>
            <button id="zero" value="0">0</button>
            <button id="decimal" value=".">.</button>
            <button id="substract" value="-">-</button>
            <button id="equals" value="=">=</button>
        </div>     
    </div>
    <div id="footer">Created by BlackCoder</div>
    </>
  )
}
