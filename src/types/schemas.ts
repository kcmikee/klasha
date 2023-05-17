import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required")
    .matches(/^(?!.*@[^,]*,)/, "Please enter a valid email address"),
});

export const PhoneSchema = Yup.object().shape({
  phone: Yup.number().required("Phone number is required"),
});

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const PersonalDetailsSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
  country: Yup.string().required("Lastname is required"),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required")
    .matches(/^(?!.*@[^,]*,)/, "Please enter a valid email address"),

  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
