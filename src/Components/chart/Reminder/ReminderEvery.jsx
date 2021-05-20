import React, { Component } from "react";

export const ReminderEvery = (props) => {
  const [when, setWhen] = useState(props.everyWhen);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    setWhen(props.everyWhen);
  }, [props.everyWhen]);
  return (
    <>
      {edit ? (
        <div>
          <div>
            <div>Every Month?</div>
            <input type="checkbox" name="EMonth" id="" />
          </div>
          <div>
            <div>Every Second Month?</div>
            <input type="checkbox" name="SMonth" id="" />
          </div>
          <div>
            <div>Every Week?</div>
            <input type="checkbox" name="EWeek" id="" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Every {when}
        </div>
      )}
    </>
  );
};
