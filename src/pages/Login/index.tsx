import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { BodyLogin, BtnSignIn, BtnSignUp, Form, LoginMain } from "./style";
import { loginSchema } from "../../schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces/context";
import { api } from "../../service/api";
import { toast } from "react-hot-toast";
import { ILoginRequest } from "../../interfaces/components";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ModalForgetPassword } from "../../components/ModalForgetPassword";

export const LoginPage = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(loginSchema),
  });

  const requestLogin = async (data:ILoginRequest ) => {
    await api
      .post("/session", data)
      .then((res) => {

        localStorage.setItem("@token", res.data.token)
        localStorage.setItem("@user", JSON.stringify(res.data.user)) 
        setUser(res.data.user)
        
        toast.success("Logado com sucesso!");

        setTimeout(()=> {
          navigate("/", {replace: true})
        }, 1000)
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  }

  const handleModalForgetPassword = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <BodyLogin>
      <Header />
      <LoginMain>
        <Form onSubmit={handleSubmit(requestLogin)}>
          <h5>Login</h5>
          <Input
            id="email"
            placeholder="Ex: samuel@mymail.com.br"
            label="Email"
            {...register("email")}
            error={errors?.email}
            type="text"
          /> 
          <Input
            id="password"
            placeholder="Digitar senha"
            label="Senha"
            {...register("password")}
            error={errors?.description}
            type="password"
          />

          <p className="label forget-password" onClick={handleModalForgetPassword}>Esqueci minha senha</p>
          {
            isOpenModal && <ModalForgetPassword isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
          }
          <BtnSignIn className="text-button-big-text" type="submit">Entrar</BtnSignIn>
          <p className="label">Ainda não possui conta?</p>
          <BtnSignUp className="text-button-big-text" to="/register">Cadastrar</BtnSignUp>
        </Form>
      </LoginMain>
      <Footer />
    </BodyLogin>
  );
};