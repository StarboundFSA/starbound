import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/Training.module.css"
import Link from "next/link";


const Training3 = () => {
  return (
    <>
    <div className={robStyles.trainBox}>
    <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

      <div className={robStyles.trainingBox} >
        <h1>PAGE 3</h1>
        <div>
          training content
        </div>
        <div>
          <button  className={styles.btnStyle} >
            <Link href="/training2">{"Prev"}</Link>
          </button>

          {/* {setTimeout(function () { */}

          {/* <button  className={styles.btnStyle} >
            <Link href="/training">{"Next"}</Link>
          </button> */}

          {/* }, 5000)} */}

          <button  className={styles.btnStyle} >
            <Link href="/payment">{"Payment"}</Link>
          </button>
        </div>
      </div>
    </div>
    <div class="main"></div>
    </>
  );
};
export default Training3;
