import { useRouter } from "next/router";

export default function NotLogin({ isLogin, setIsLogin, connectKaikas }) {
  const router = useRouter();

  const KaikasLogin = () => {
    setIsLogin(!isLogin);
    connectKaikas();

    router.push("/");
  };

  return (
    <>
      <section className="not-section">
        <div className="container-not">
          <div className="btn-try">
            <div className="logout">
              <h5>Please connect account address first</h5>
              <button type="submit" onClick={KaikasLogin}>
                Login
              </button>
              {/* <button type="submit">Klip Login</button> */}
            </div>
          </div>
        </div>
        <style jsx>{`
          /** Start NotLogin Css **/
          .not-section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .not-section .container-not {
            width: 1290px;
            margin: auto;
            max-width: 95%;
          }

          .not-section .btn-try {
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .not-section .btn-try button {
            font-family: inherit;
            background-color: transparent;
            outline: none;
            font-weight: bold;
            font-size: 20px;
            color: #525ffb;
            cursor: pointer;
            margin-top: 25px;
            padding: 10px 20px;
            border: 1.5px solid #525ffb;
            border-radius: 10px;
            width: 150px;
            letter-spacing: 1px;
            transition: 0.5s;
          }

          .not-section .btn-try button:hover {
            background-color: #525ffb;
            color: white;
          }

          .not-section h5 {
            max-width: 95%;
            font-weight: 350;
            font-size: 40px;
            line-height: 35px;
            text-align: center;
            color: #0c135e;
            margin: auto;
          }
        `}</style>
      </section>
    </>
  );
}
