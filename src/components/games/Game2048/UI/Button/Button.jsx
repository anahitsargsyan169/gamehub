import s from "./Button.module.css";

export const Button = ({ text, callback }) => {
  return (
    <div className={s.button} onClick={callback}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  );
};
/* const Button = styled.button`
  position: relative;
	display: inline-block;
  text-align: center;
  padding: 10px;
  width: 150px;
  margin-bottom: 20px;
  color: #ffffff;
  text-decoration: none;
  overflow: hidden;
  filter: hue-rotate(0deg);
  border: 2px solid #d2bdff;
  transition: all 0.1s linear;
  cursor: pointer;
  align-self: center;
` */

export default Button;
