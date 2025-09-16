"use client"

import { useEffect } from "react"

export default function RussianUniversitiesCard() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = document.querySelector(".card-3d") as HTMLElement
      if (card) {
        const ax = -(window.innerWidth / 2 - e.pageX) / 20
        const ay = (window.innerHeight / 2 - e.pageY) / 10
        card.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`
        card.style.webkitTransform = `rotateY(${ax}deg) rotateX(${ay}deg)`
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <style jsx>{`
        .card-3d {
          pointer-events: none;
          transform: translateZ(0);
          padding: 30px;
          background: white;
          border-radius: 20px;
          width: 400px;
          height: 200px;
          margin: auto;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          display: flex;
          box-shadow: 0 0 5px rgba(0,0,0,.1);
          position: relative;
        }
        
        .card-3d:after {
          content: " ";
          position: absolute;
          width: 100%;
          height: 10px;
          border-radius: 50%;
          left: 0;
          bottom: -50px;
          box-shadow: 0 30px 20px rgba(0,0,0,.3);
        }
        
        .card-content-3d {
          margin: auto;
          text-align: center;
          transform-style: preserve-3d;
        }
        
        .card-3d h1 {
          transform: translateZ(100px);
        }
        
        .card-3d p {
          transform: translateZ(50px);
          display: block;
        }
        
        .card-3d p.related {
          transform: translateZ(80px);
          font-style: italic;
        }
        
        .card-3d a {
          color: #69c6b8;
          pointer-events: auto;
        }
        
        .iklan {
          position: fixed;
          bottom: 0;
          right: 0;
          background: white;
          width: 200px;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }
        
        .iklan p {
          margin: 0 0 15px;
          line-height: 1.4;
        }
        
        .iklan a {
          background-color: #ff4757;
          color: white;
          display: inline-block;
          padding: 10px 20px;
          border-radius: 3px;
          text-decoration: none;
          font-size: 14px;
        }
      `}</style>

      <div className="card card-3d">
        <div className="card-content card-content-3d">
          <h1 className="font-fanavari-bold">فهرست کامل دانشگا‌های روسیه</h1>
          <p className="font-fanavari">
            <small>
              {" "}
              در{" "}
              <a href="https://www.fiverr.com/share/vLevr" target="_blank" rel="noreferrer">
                آبادیس پارسیان
              </a>
            </small>
          </p>
          <p className="related font-fanavari">
            <strong>همچنین ببینید</strong>
            <a href="https://codepen.io/ariona/details/LVZLGP/" target="_blank" rel="noreferrer">
              {" "}
              دانشگاه‌های مورد تأیید ایران{" "}
            </a>
          </p>
        </div>
      </div>

      <div className="iklan">
        <p>سوالی درباره‌ی دانشگاه دارید ؟</p>
        <a href="https://www.fiverr.com/share/vLevr" target="_blank" rel="noreferrer">
          با ما تماس بگیرید<strong></strong>
        </a>
      </div>
    </>
  )
}
