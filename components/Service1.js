import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import router from "next/router";
import swal from "sweetalert";
import data from "../data/service.json";

// 아이콘 FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Service1() {
  const [randomId, setRandomId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get("/api/randomTable", {
        params: { randomId: randomId },
      })
      .then((res) => {
        router.push(`/mynft/${res.data.tokenId[0].tokenId}`);
      })
      .catch((err) => {
        swal(
          "조회 실패",
          "해당 코드는 존재하지 않습니다. 다시 확인해 주세요.",
          "warning"
        );
      });
  };

  return (
    <article>
      <div className="left">
        {data.service1.map((service) => (
          <>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </>
        ))}

        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={randomId}
              onChange={(e) => setRandomId(e.target.value)}
              placeholder="공유 코드를 입력해 주세요."
              required
            />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </label>
        </form>
      </div>

      <div className="right">
        <Image src="/hero.png" width={450} height={450} />
      </div>

      <style jsx>{`
        {/* article {
          padding: 0px 100px 0px 100px;
          height: 100vh;
          width: 90%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          justify-content: space-between;
          align-items: center;
          display: flex;
        } */}
        article {
                    display:flex;
                    height: calc(100vh - 100px);
                    margin-top: 100px;
                    padding: 0 100px 0 100px;
                }

        .left {
          display: flex;
          flex-direction: column;
          width: 60%;
        }

        .left h1 {
          font-weight: 700;
          font-size: 45px;
          text-align: left;
          letter-spacing: 0.7px;
        }

        .left p {
          color: #b1aaaa;
          font-weight: bold;
          font-size: 25px;
          text-align: left;
          padding-top: 15px;
          letter-spacing: 0.7px;
        }

        form {
          display: flex;
          padding-top: 40px;
          align-items: center;
        }

        label {
          position: relative;
          border-radius: 10px;
          box-shadow: 0 0 0.375rem 0.0625rem gainsboro;
        }
        form input {
          background: transparent;
          border: none;
          width: 450px;
          padding: 20px 20px;
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          transition: 1s;
        }
        form input:hover {
          letter-spacing: 1px;
        }

        form button {
          position: absolute;
          padding: 15px 15px;
          border: none;
          border-radius: 10px;
          background: #525ffb;
          font-weight: 500;
          font-size: 20px;
          text-align: left;
          color: #fff;
          cursor: pointer;
          right: 5px;
          top: 50%;
          transform: translate(0%, -50%);
          transition: 0.5s;
        }
        form button:hover {
          background: #dfdfdfaa;
          color: #525ffb;
        }
        .right {
          display: flex;
        }
      `}</style>
    </article>
  );
}
