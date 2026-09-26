import { useState, useEffect, useRef, useContext, createContext } from 'react';

export const LevelContext = createContext(1);

/***********************************************/
/* テストセクション1 */
/***********************************************/
const TestSection1 = () => {
    const [count, setCount] = useState(0);
    const sNowTime = new Date().toLocaleTimeString();
    const level = useContext(LevelContext);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div style={{ display : "block", backgroundColor : "lightgreen" }}>
                <div>Count: {count}<button onClick={handleClick}>+</button></div>
                <div>Time: {sNowTime}</div>
                <div>Level: {level}</div>
            </div>
            <TestSection1Child count={count} />
        </div>
    )
}

/***********************************************/
/* テストセクション2 */
/***********************************************/
const TestSection2 = () => {
    const [count, setCount] = useState(0);
    const sNowTime = new Date().toLocaleTimeString();
    const count2 = useRef(0);
        const level = useContext(LevelContext);

    useEffect(() => {
        console.log("TestSection2: useEffect called");
        count2.current = count2.current + 2;
    }, [count]);


    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div style={{ display : "block", backgroundColor : "lightblue" }}>
            <div>Count: {count}<button onClick={handleClick}>+</button></div>
            <div>Time: {sNowTime}</div>
            <div>Level: {level}</div>
            <input type="text" value={count2.current.toString()} readOnly />
        </div>
    )
}


/***********************************************/
/* テストセクション1-child */
/***********************************************/
 type Sec1ChildProps = {
    count: number   
}

const TestSection1Child = ({ count } : Sec1ChildProps) => {
    const sNowTime = new Date().toLocaleTimeString();
    const level = useContext(LevelContext);

    return (
        <div style={{ display : "block", backgroundColor : "lightpink" }}>
            <div>Count: {count} </div>
            <div>Time: {sNowTime}</div>
            <div>Level: {level}</div>
        </div>
    )
}

/***********************************************/
/* メイン */
/***********************************************/
const Test = () => {
    return (
        <div>
            <LevelContext value={4}>
                <TestSection1 />
            </LevelContext>
            <LevelContext value={3}>
                <TestSection2 />
            </LevelContext>
        </div>
    )

}

export default  Test;