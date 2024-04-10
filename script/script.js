// LOGIN
// валидация формы
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".form_login");

  new JustValidate(".form_login", {
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
      password2: {
        required: true,
      },
    },

    messages: {
      email: {
        required: "Введите email",
        email: "Введите корректный email",
      },
      password: {
        required: "Введите пароль",
      },
      password2: {
        required: "Повторите пароль",
      },
    },
  });
});

// Show success message
document.getElementById("btn-success-mess").onclick = function () {
  document.getElementById("wrapper").classList.add("show-mess");
};

document.getElementById("new-account").onclick = function () {
  document.getElementById("wrapper_succ").classList.add("show-mess_succ");
};

