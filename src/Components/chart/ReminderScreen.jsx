import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ReminderScreen = (props) => {
  const dispatch = useDispatch();
  const [showReminderForm, setReminder] = useState(false);
  const [patientRemind, setpatientRemind] = useState([
    ...props.patientReminders,
  ]);
  console.log(props);
  console.log(...props.patientReminders);
  useEffect(() => {
    setpatientRemind(props.patientReminders);
  }, [props.patientReminders]);
  const currentRem = patientRemind.map((x) => (
    <div className="modal-map">
      <div className="modal-top">
        <div>
          Message: <div>{x.message}</div>
        </div>
        <div>
          Times Sent:
          {x.times.map((a) => (
            <div>{a}</div>
          ))}
        </div>
      </div>
      <div className="modal-bottom">
        <div className="modal-days">
          Days Sent:
          <div className="modal-days-row">
            {x.days.map((b) => {
              return <div className="modal-day">{b}</div>;
            })}
          </div>
        </div>
        <div className="modal-bottom-right">
          <div>Every Month?</div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="modal">
        <div class="modal-content">
          <form>
            <div className="modal-top">
              <div>
                <div>Message?</div>
                <input type="text" placeholder="Take medicine" />
              </div>
              <div>
                <div>Times?</div>
                <input type="text" placeholder="1200, 1400, 1700" />
              </div>
            </div>
            <div className="modal-formdateFreq">
              <div style={{ width: "60%" }}>
                <div>Which Days?</div>
                <div className="modal-form-datechecker">
                  <div>
                    <div>Mon</div>
                    <input type="checkbox" name="Mon" id="" />
                  </div>
                  <div>
                    <div>Tue</div>
                    <input type="checkbox" name="Tue" id="" />
                  </div>
                  <div>
                    <div>Wed</div>
                    <input type="checkbox" name="Wed" id="" />
                  </div>
                  <div>
                    <div>Thu</div>
                    <input type="checkbox" name="Thu" id="" />
                  </div>
                  <div>
                    <div>Fri</div>
                    <input type="checkbox" name="Fri" id="" />
                  </div>
                  <div>
                    <div>Sat</div>
                    <input type="checkbox" name="Sat" id="" />
                  </div>
                  <div>
                    <div>Sun</div>
                    <input type="checkbox" name="Sun" id="" />
                  </div>
                </div>
              </div>
              <div className="modal-bottom-right">
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
            </div>
          </form>
          {currentRem}
          <button
            className="modal-button-add"
            onClick={(e) => {
              e.preventDefault();
              setReminder(!showReminderForm);
            }}
          >
            Add Reminder
          </button>
        </div>
      </div>
    </>
  );
};
