import {
  isEmail,
  isNameValid,
  isPhoneNumber,
  isRequired,
  isValidDate,
} from "@/helpers/validations";

export const FORM_INPUTS = [
  {
    ref: "nameInputRef",
    name: "name",
    placeholder: "Введите имя",
    rules: [isRequired(), isNameValid],
  },
  {
    ref: "dateInputRef",
    name: "date",
    placeholder: "Введите дату рождения",
    rules: [isRequired(), isValidDate()],
  },
  {
    ref: "phoneInputRef",
    name: "phone",
    placeholder: "Введите номер телефона",
    rules: [isRequired(), isPhoneNumber],
  },
  {
    ref: "emailInputRef",
    name: "email",
    placeholder: "Введите почту",
    rules: [isRequired(), isEmail],
  },
];
