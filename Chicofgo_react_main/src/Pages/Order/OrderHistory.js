import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  Link,
} from 'react-router-dom';
function OrderHistory() {
  return (
    <>
      <div className="bg-body-secondary">
        <div className="custom-container">
          <p>會員專區 / 歷史訂單</p>
        </div>
        <div className="custom-container rounded-5 border pt-5">
          <h1 className="text-center fw-bold">歷史訂單</h1>
          <table className="table text-center table-secondary">
            <thead className="mb-5">
              <tr className="my-3 border-top border-bottom border-white border-5">
                <th>訂單編號</th>
                <th>日期</th>
                <th>總價</th>
                <th>訂單狀態</th>
                <th>查詢詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top border-bottom border-white border-5">
                <td className="py-4">
                  <a>2301271449</a>
                </td>
                <td className="py-4">2021-01-15</td>
                <td className="py-4">$170</td>
                <td className="py-4">未完成</td>
                <td className="py-4">
                  <Link
                    to="/orderStatus"
                    class="nav-link align-middle my-2 px-0 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Link>
                </td>
              </tr>
              <tr className="border-top border-bottom border-white border-5">
                <td className="py-4">
                  <a>2301271449</a>
                </td>
                <td className="py-4">2021-01-15</td>
                <td className="py-4">$170</td>
                <td className="py-4">未完成</td>
                <td className="py-4">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="border-top border-bottom border-white border-5">
                <td className="py-4">
                  <a>2301271449</a>
                </td>
                <td className="py-4">2021-01-15</td>
                <td className="py-4">$170</td>
                <td className="py-4">未完成</td>
                <td className="py-4">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
