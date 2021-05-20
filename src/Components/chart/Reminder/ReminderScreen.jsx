import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReminderMsg } from "./ReminderMsg";
import { ReminderTime } from "./ReminderTime";
import { ReminderDays } from "./ReminderDays";
import { ReminderEvery } from "./ReminderEvery";
export const ReminderScreen = (props) => {
  const dispatch = useDispatch();
  const [showReminderForm, setReminder] = useState(false);
  const [patientRemind, setpatientRemind] = useState([
    ...props.patientReminders,
  ]);

  useEffect(() => {
    setpatientRemind(props.patientReminders);
  }, [props.patientReminders]);
  const currentRem = patientRemind.map((x) => (
    <div className="modal-map">
      <div className="modal-top">
        <ReminderMsg message={x.message} id={x.id} />
        <ReminderTime times={x.times} id={x.id} />
      </div>
      <div className="modal-bottom">
        <div className="modal-days">
          <ReminderDays days={x.days} id={x.id} />
        </div>
        <div className="modal-bottom-right">
          <ReminderEvery everyWhen={x.everyWhen} id={x.id} />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="modal">
        <div class="modal-content">
          {showReminderForm ? (
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
          ) : (
            ""
          )}
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
