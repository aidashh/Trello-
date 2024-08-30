import React from "react";
import { useForm } from "react-hook-form";
import { FaTrello } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../../store/thunk/authThunk";
import ErrorMessages from "../UI/ErrorMessages";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const submitHandler = (userData) => {
    if (userData.email === "admin@gmail.com") {
      userData.role = "ADMIN";
    } else {
      userData.role = "USER";
    }
    dispatch(signUpRequest({ userData, navigate }));
  };
  return (
    <StyledRegisterPage>
      <StyledH1>
        {" "}
        <IconInfo /> TRELLO
      </StyledH1>
      <section>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            {...register("firstName", { required: "введите имя..." })}
            type="text"
            placeholder="Введите имя..."
          />
          <ErrorMessages>{errors?.firstName?.message}</ErrorMessages>
          <input
            {...register("lastName", { required: "Введите фамилию" })}
            type="text"
            placeholder="Введите фамилию..."
          />
          <ErrorMessages>{errors?.lastName?.message}</ErrorMessages>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "введите email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                message: "Hе пправельно введён email",
              },
            })}
            type="email"
            placeholder="Введите email..."
          />
          <ErrorMessages>{errors?.email?.message}</ErrorMessages>

          <input
            {...register("password", {
              required: { value: true, message: "введите password" },
              minLength: {
                value: 6,
                message: "Пароль должен быть не менее шести символов!",
              },
              maxLength: {
                value: 15,
                message: "Пароль не должен быть больше 15 символов",
              },
            })}
            type="password"
            placeholder="Введите пароль..."
          />
          <ErrorMessages>{errors?.password?.message}</ErrorMessages>

          <button>Отправить</button>
          <p>
            У вас уже есть аккаунт?
            <StyledtLink to={"/login"}>Войти</StyledtLink>
          </p>
        </form>
      </section>
    </StyledRegisterPage>
  );
};

export default SignUp;

const StyledRegisterPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & > section > form {
    width: 500px;
    height: fit-content;
    background-color: #eae6e6;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    & > input {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      padding-left: 10px;
      border: none;
    }
    & > button {
      height: 60px;
      border-radius: 10px;
      background-color: #319631;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: 1px solid aquamarine;
      cursor: pointer;
    }
  }
`;
const StyledtLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;
`;
const IconInfo = styled(FaTrello)`
  position: relative;
  top: 5px;
  color: #4275d5;
`;
const StyledH1 = styled.h1`
  color: #4275d5;
`;
