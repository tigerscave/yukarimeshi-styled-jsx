import React from "react"

const SideMenu = () => {
  return (
    <div>
      <ul>
      <li>
        <i className="fas fa-clipboard-list"></i>
            ダッシュボード
      </li>
      <li>
        <i className="fas fa-book-open"></i>
            予約管理
      </li>
      <li>
        <i className="fas fa-book-open"></i>
            会員管理
      </li>
      <li>
        <i className="fas fa-users"></i>
            マイページ
      </li>
    </ul>
      <style jsx>{`
        `}</style>
    </div>
  )
}

export default SideMenu
