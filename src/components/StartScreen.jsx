import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const StartScreen = ({ onStart }) => {
  const { theme, styles } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <div
        className={` ${styles.card} w-full h-88.75 rounded-xl border-4 drop-shadow-[0_8px_0]`}
      >
        <div className="text-center py-10 text-[16px] font-medium leading-10 tracking-[0.6px]">
          <h2 className={styles.text}>
            {theme === "light" ? (
              <>
                あなたは受け流し上手？
                <br />
                それとも抱え込みがち？
              </>
            ) : (
              <>
                気づかないうちに、
                <br />
                心がすり減っていませんか？
              </>
            )}
          </h2>
        </div>
        <div className="flex justify-center text-[14px] leading-5">
          <p className={styles.text}>
            {theme === "light" ? (
              <>
                日常のイライラや他人の言葉を <br />
                サラッと受け流す「スルースキル」 <br />
                あなたのスルー度はどのくらいでしょうか？
                <br />
                <br />
                直感で答えるだけのカンタン診断です <br />
                全10問で今すぐチェック！
              </>
            ) : (
              <>
                日常のイライラや他人の言葉で <br />
                じわじわ削られていく「精神摩耗」 <br />
                あなたの摩耗度はどのくらいでしょうか？
                <br />
                <br />
                直感で答えるだけのカンタン診断です <br />
                全10問で今すぐチェック！
              </>
            )}
          </p>
        </div>
      </div>
      <button
        onClick={onStart}
        className={`${styles.card} ${styles.text} mt-8 w-75 h-17 text-center text-[20px] rounded-[40px] border-4 drop-shadow-[0_8px_2px]`}
      >
        診断スタート！
      </button>
    </div>
  );
};
