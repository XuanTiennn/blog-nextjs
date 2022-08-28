import * as React from "react";
import { Form } from "react-bootstrap";
import { Enum } from "../../Enum/enum";

export interface IDarkLightProps {}

export function DarkLight(props: IDarkLightProps) {
  // const refisMounted=React.useRef:any(false);
  // useEffect(()=>{
  //   if(refisMounted){
  //     return;
  //   }else{
  //     refisMounted.current=true;
  //   }
  // },[])
  const changeLocalStoreThem = () => {
    const getTheme = localStorage.getItem("theme");
    localStorage.setItem(
      "theme",
      getTheme === Enum.theme.dark ? Enum.theme.light : Enum.theme.dark
    );
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute(
        "theme",
        getTheme === Enum.theme.dark ? Enum.theme.light : Enum.theme.dark
      );
  };
  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          onChange={changeLocalStoreThem}
          // checked={refisMounted.current && window.localStorage.getItem("theme") === "light" ? false : true}
        />
      </Form>
    </div>
  );
}
