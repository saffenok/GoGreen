// MAIN PAGE tabs
document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs__btn").forEach(function (btn) {
      btn.classList.remove("tabs__btn--active");
    });
    e.currentTarget.classList.add("tabs__btn--active");

    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// LK
document.querySelectorAll(".tabs-nav__btn_lk").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn_lk").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn_lk--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn_lk--active");

    document.querySelectorAll(".tabs-item_lk").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item_lk--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item_lk--active");
  });
});

document.getElementById("btn-prof").onclick = function () {
  document.getElementById("wrapper_prof").classList.add("show-mess");
};

document.getElementById("btn-pass").onclick = function () {
  document.getElementById("wrapper_pass").classList.add("show-mess");
};
