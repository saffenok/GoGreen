// NEW PROJECT
document.querySelectorAll(".tabs-nav__btn1").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn1").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn1--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn1--active");

    document.querySelectorAll(".tabs-item1").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item1--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item1--active");
  });
});

document.querySelectorAll(".tabs-nav__btn2").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn2").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn2--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn2--active");

    document.querySelectorAll(".tabs-item2").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item2--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item2--active");
  });
});

document.querySelectorAll(".tabs-nav__btn3").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn3").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn3--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn3--active");

    document.querySelectorAll(".tabs-item3").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item3--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item3--active");
  });
});

document.querySelectorAll(".tabs-nav__btn4").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".tabs-nav__btn4").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn4--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn4--active");

    document.querySelectorAll(".tabs-item4").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item4--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item4--active");
  });
});

//tooltip
tippy("#general-info-1", {
  content:
    'Необходимо указать основание - требования Федерального закона "Об ограничении выбросов парниковых газов" и (или) Федерального закона "О проведении эксперимента по ограничению выбросов парниковых газов в отдельных субъектах Российской Федерации"',
  theme: "light",
});

tippy("#general-info-2", {
  content:
    "Необходимо указать перечень применимых производственных процессов и видов деятельности, коды объектов негативного воздействия и информация о мощности используемого оборудования (при наличии)",
  theme: "light",
});
tippy("#general-info-3", {
  content:
    "Необходимо указать суммарную массу выбросов парниковых газов по всем применимым производственным процессам и видам деятельности по парниковым газам в тоннах соответствующего вещества и тоннах эквивалента углекислого газа",
  theme: "light",
});
tippy("#general-info-4", {
  content:
    "Необходимо указать информацию о методах и конверсионных коэффициентах по применимым производственным процессам и видам деятельности, объектам негативного воздействия (при наличии), сведения об источнике опубликования этих методов и конверсионных коэффициентов, а также обоснование применимости используемых методов и конверсионных коэффициентов",
  theme: "light",
});
tippy("#general-info-5", {
  content:
    "Необходимо указать сроки реализации проекта, объем сокращения выбросов парниковых газов, достигнутый в ходе реализации климатического проекта",
  theme: "light",
});
tippy("#general-info-6", {
  content:
    "Необходимо указать наименование и основной государственный регистрационный номер юридического лица или индивидуального предпринимателя, аккредитованного в национальной системе аккредитации в качестве органа по валидации и верификации парниковых газов, реквизиты отчета (отчетов) о верификации (дата и номер), к отчетности прилагается электронный образ отчета (отчетов) о верификации",
  theme: "light",
});
tippy("#general-info-7", {
  content:
    "Необходимо указать массу выбросов парниковых газов, устанавливаемая для региональной регулируемой организации на отчетный период (тонн CO₂-экв. ), и реквизиты решения уполномоченного органа",
  theme: "light",
});
tippy("#general-info-8", {
  content:
    "Необходимо указать номер счета в реестре углеродных единиц, количество углеродных единиц по итогам отчетного периода и количество углеродных единиц, зачтенных для выполнения квоты",
  theme: "light",
});
tippy("#general-info-9", {
  content:
    "Необходимо указать номер счета в реестре углеродных единиц, количество единиц выполнения квот по итогам отчетного периода и количество единиц выполнения квот, зачтенных для выполнения квоты",
  theme: "light",
});
tippy("#general-info-10", {
  content:
    "Необходимо указать разницу между установленной квотой и фактической массой выбросов парниковых газов (тонн CO₂-экв. ), размер внесенной платы (рублей), к отчетности прилагается электронный образ платежного документа, подтверждающего перечисление денежных средств в счет платы за превышение квоты)",
  theme: "light",
});

tippy("#new", {
  content: "какой-то текст для всплывашки",
  theme: "light",
});

// custom select
const element1 = document.querySelector("#select1");
const choices1 = new Choices(element1, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element2 = document.querySelector("#select2");
const choices2 = new Choices(element2, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element3 = document.querySelector("#select3");
const choices3 = new Choices(element3, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element4 = document.querySelector("#select4");
const choices4 = new Choices(element4, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element11 = document.querySelector("#select11");
const choices11 = new Choices(element11, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element22 = document.querySelector("#select22");
const choices22 = new Choices(element22, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element33 = document.querySelector("#select33");
const choices33 = new Choices(element33, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

const element44 = document.querySelector("#select44");
const choices44 = new Choices(element44, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

function notChecked() {
  document.getElementsByClassName("__select__input");
  // document.getElementById("dropdown__list").classList.toggle("dropdown_show");
}
