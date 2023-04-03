import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ connectKaikas, isLogin, setIsLogin }) {
  const router = useRouter();

  function kaikasLoginButton() {
    connectKaikas();
    setIsLogin(!isLogin);
    router.push("/");
  }

  return (
    <div className="nav">
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" width={165} height={65} />
        </Link>
      </div>

      <div className="btn">
        <Link href="/">
          <button className="introduce">Introduce</button>
        </Link>

        <Link href="/upload">
          <button className="upload">Upload</button>
        </Link>

        <Link href="/mypage">
          <button className="mypage">MyPage</button>
        </Link>

        {isLogin ? (
          <Link href="/">
            <button className="logout" onClick={kaikasLoginButton}>
              Logout
            </button>
          </Link>
        ) : (
          <Link href="/">
            <button className="login" onClick={kaikasLoginButton}>
              Login
            </button>
          </Link>
        )}
      </div>
      <style jsx>{`
        .nav {
          background-color: #ffffff7a;
          display: flex;
          justify-content: space-between;
          position: fixed;
          z-index: 1;
          width: 100%;
          height: 100px;
          padding: 0 7vw;
          top: 0;
        }

        .nav .logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav .btn {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: flex-end;
        }

        .nav .btn button {
          letter-spacing: 1px;
          font-size: 20px;
          background-color: transparent;
          color: #525ffb;
          cursor: pointer;
          transition: 0.5s;
        }

        .nav .btn .introduce,
        .nav .btn .mypage,
        .nav .btn .upload {
          border: none;
          margin-left: 25px;
        }

        .nav .btn .login,
        .nav .btn .logout {
          font-weight: bold;
          padding: 10px 20px;
          border: 1.5px solid #525ffb;
          border-radius: 10px;
          width: 130px;
          margin-left: 50px;
        }
        .nav .btn .logout {
          background-color: #525ffb;
          color: white;
        }

        .nav .btn .login:hover {
          background-color: #525ffb;
          color: white;
        }

         {
          /* .nav .btn .logout:hover {
          background-color: white;
          color: #525ffb;
        } */
        }
      `}</style>
    </div>
  );
}
