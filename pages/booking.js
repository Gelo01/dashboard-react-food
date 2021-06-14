export const Booking = () => {
  return (
    <main className="me-main p-4 h-100 bg-color font-primary">
      <section id="search-and-profile" className="mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
              <div className="search-input d-flex w-100 mb-3 position-relative">
                <a href="" type="reset" className="position-absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </a>
                <input
                  id="searchId"
                  type="number"
                  placeholder="Enter Order ID"
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-between">
                  <div className="food-header d-flex">
                    <h2 className="me-3 mb-0">Food Delivery</h2>
                    <p id="search-result" className="mb-0 align-self-end">
                      123 results
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                  <a id="page-left" href="">
                    <i className="bx bxs-chevron-left bx-md"></i>
                  </a>
                  <a id="page-right" href="">
                    <i className="bx bxs-chevron-right bx-md"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 order-card bg-card-booking mb-3">
                <div className="row">
                  <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                    <img src="https://picsum.photos/id/237/120/144" alt="" />
                  </div>
                  <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
                    <div className="badges">
                      <span className="badge bg-badge-secondary">Pro</span>
                    </div>
                    <h4>Doggy Land</h4>
                    <h6>
                      Order Number: <span id="order-num">12312312</span>
                    </h6>
                    <button className="btn bg-secondary">Complete</button>
                  </div>
                </div>
              </div>
              <div className="col-12 order-card bg-card-booking mb-3">
                <div className="row">
                  <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                    <img src="https://picsum.photos/id/237/120/144" alt="" />
                  </div>
                  <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
                    <div className="badges">
                      <span className="badge bg-badge-secondary">Pro</span>
                    </div>
                    <h4>Doggy Land</h4>
                    <h6>
                      Order Number: <span id="order-num">12312312</span>
                    </h6>
                    <button>Complete</button>
                  </div>
                </div>
              </div>
              <div className="col-12 order-card bg-card-booking mb-3">
                <div className="row">
                  <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                    <img src="https://picsum.photos/id/237/120/144" alt="" />
                  </div>
                  <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
                    <div className="badges">
                      <span className="badge bg-badge-secondary">Pro</span>
                    </div>
                    <h4>Doggy Land</h4>
                    <h6>
                      Order Number: <span id="order-num">12312312</span>
                    </h6>
                    <button>Complete</button>
                  </div>
                </div>
              </div>
              <div className="col-12 order-card bg-card-booking mb-3">
                <div className="row">
                  <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                    <img src="https://picsum.photos/id/237/120/144" alt="" />
                  </div>
                  <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
                    <div className="badges">
                      <span className="badge bg-badge-secondary">Pro</span>
                    </div>
                    <h4>Doggy Land</h4>
                    <h6>
                      Order Number: <span id="order-num">12312312</span>
                    </h6>
                    <button>Complete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="dummy-box-1 w-100"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Booking;
