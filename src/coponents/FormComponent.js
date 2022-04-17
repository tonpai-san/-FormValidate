import "./FromComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordlColor] = useState("");
  const [rePasswordColor, setRePasswordlColor] = useState("");

  const validateForm = (e) => {
    // ใช้ preventDefault เพื่อที่จะไม่ต้อง รีเฟชข้อมูลในฟอร์ม
    e.preventDefault();
    //   น้อยกว่า 8 ตัว
    if (userName.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("กรุณากรอกข้อมูลมากกว่า 8 ตัวอักษร");
      setUserNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมล์ใม่ถูกต้อง");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordlColor("green");
    } else {
      setErrorPassword("กรุณากรอกรหัสผ่านมากกว่า 8 ตัวอักษร");
      setPasswordlColor("red");
    }

    if (rePassword != "" && rePassword === password) {
      setErrorRePassword("");
      setRePasswordlColor("green");
    } else {
      setErrorRePassword("รหัสผ่านไม่ตรงกัน");
      setRePasswordlColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            style={{ borderColor: userNameColor }}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <small style={{ color: userNameColor }}> {errorUserName} </small>
        </div>
        <div className="form-control">
          <label>อีเมล์</label>
          <input
            style={{ borderColor: emailColor }}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            style={{ borderColor: passwordColor }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small style={{ color: passwordColor }}> {errorPassword} </small>
        </div>
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            style={{ borderColor: rePasswordColor }}
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <small style={{ color: rePasswordColor }}> {errorRePassword} </small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
