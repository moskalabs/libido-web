import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../../lib/api/client";

function FindPasswordForm() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [re_password, setRepassword] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const emailHandler = e => {
    e.target.name === "emailVerification"
      ? setEmail(e.target.value)
      : setVerificationCode(e.target.value);
  };

  const sendVerificationCode = e => {
    client
      .post("http://15.164.210.185:8000/users/resetemail", {
        email,
      })
      .then(res => {
        const { auth_number } = res.data;
        setAuthNumber(auth_number);
      })
      .catch(error => {});
  };

  const confirmVerificationCode = e => {
    if (authNumber === verificationCode) setIsRegistered(true);
  };

  const onChangePassword = useCallback(e => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    e => {
      const passwordConfirmCurrent = e.target.value;
      setRepassword(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setIsPasswordConfirm(true);
      } else {
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const changeNewPassword = e => {
    client
      .post("http://15.164.210.185:8000/users/resetpw", {
        email,
        password,
        re_password,
        reset_token_number: authNumber,
      })
      .then(res => {
        navigate("/");
      });
  };

  return (
    <StyledPasswordForm>
      <FindPw>???????????? ??????</FindPw>
      <div>
        <EmailInput
          name="emailVerification"
          placeholder="????????? ?????????"
          type="email"
          onChange={emailHandler}
        />
        <OverlayButton onClick={sendVerificationCode}>
          ???????????? ??????
        </OverlayButton>
        <EmailInput
          onChange={emailHandler}
          name="verificationCode"
          placeholder="????????????"
        />
        <OverlayButton onClick={confirmVerificationCode}>
          ???????????? ??????
        </OverlayButton>

        {isRegistered && (
          <>
            <ResetPw>???????????? ?????????</ResetPw>
            <PasswordInput
              onChange={onChangePassword}
              type="password"
              placeholder="????????? ????????????"
            />
            <div className="condition">
              ??????, ??????, ????????? ???????????? 8??? ????????? ???????????????
            </div>
            <PasswordInput
              onChange={onChangePasswordConfirm}
              type="password"
              placeholder="???????????? ??????"
            />
            <div className="condition">
              {isPasswordConfirm
                ? "??????????????? ???????????????!"
                : "??????????????? ???????????? ????????????"}
            </div>
            <Footer>
              <Button onClick={changeNewPassword}>NEXT</Button>
            </Footer>
          </>
        )}
      </div>
    </StyledPasswordForm>
  );
}

const StyledPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .condition {
    font-size: 0.8rem;
    color: gray;
  }
`;

const ResetPw = styled.div`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;
const FindPw = styled.div`
  margin-bottom: 30px;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;

const EmailInput = styled.input`
  width: 210px;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;
const PasswordInput = styled.input`
  width: 315px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;

const OverlayButton = styled.button`
  padding: 10px 10px;
  background: white;
  border: #e8eaed solid 1px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #e8eaed;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin-top: 30px;
  padding: 12px 18px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;
export default FindPasswordForm;
